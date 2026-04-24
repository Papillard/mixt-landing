(function () {
  'use strict';

  var STORAGE_KEY = 'mixt-consent';
  var VERSION = 1;
  var TTL_MS = 1000 * 60 * 60 * 24 * 30 * 6; // 6 months
  var POLICY_HREF = '/politique-de-confidentialite.html';

  var CSS = [
    '.mixt-cookie-banner{',
    '  position:fixed;left:20px;bottom:20px;width:340px;max-width:calc(100vw - 40px);',
    '  background:var(--cream,#F5E6DA);color:var(--deep,#361822);',
    '  border:1px solid rgba(54,24,34,0.08);border-radius:16px;',
    '  box-shadow:0 10px 40px rgba(54,24,34,0.18),0 2px 8px rgba(54,24,34,0.08);',
    '  padding:20px 22px;z-index:9999;font-family:"Geist",system-ui,-apple-system,sans-serif;',
    '  opacity:0;transform:translateY(8px);transition:opacity 200ms ease,transform 200ms ease;',
    '}',
    '.mixt-cookie-banner[data-visible="true"]{opacity:1;transform:translateY(0);}',
    '.mixt-cookie-banner h2{',
    '  font-family:"Fraunces",serif;font-size:16px;font-weight:500;margin:0 0 6px;',
    '  color:var(--deep,#361822);letter-spacing:-0.01em;',
    '}',
    '.mixt-cookie-banner p{',
    '  font-size:13px;line-height:1.5;margin:0 0 14px;color:var(--text-2,#6B5B52);',
    '}',
    '.mixt-cookie-banner a.mixt-cookie-link{',
    '  color:var(--deep,#361822);text-decoration:underline;text-underline-offset:2px;',
    '  text-decoration-thickness:1px;',
    '}',
    '.mixt-cookie-banner a.mixt-cookie-link:hover{color:var(--accent,#C85A4A);}',
    '.mixt-cookie-actions{display:flex;gap:8px;}',
    '.mixt-cookie-btn{',
    '  flex:1;font-family:inherit;font-size:13px;font-weight:500;letter-spacing:0.01em;',
    '  padding:10px 14px;border-radius:999px;cursor:pointer;',
    '  transition:background 150ms ease,color 150ms ease,border-color 150ms ease;',
    '}',
    '.mixt-cookie-btn:focus-visible{outline:2px solid var(--accent,#C85A4A);outline-offset:2px;}',
    '.mixt-cookie-btn--refuse{',
    '  background:transparent;color:var(--deep,#361822);',
    '  border:1px solid rgba(54,24,34,0.25);',
    '}',
    '.mixt-cookie-btn--refuse:hover{border-color:var(--deep,#361822);background:rgba(54,24,34,0.04);}',
    '.mixt-cookie-btn--accept{',
    '  background:var(--deep,#361822);color:#fff;border:1px solid var(--deep,#361822);',
    '}',
    '.mixt-cookie-btn--accept:hover{background:#1f0d14;border-color:#1f0d14;}',
    '@media (max-width:720px){',
    '  .mixt-cookie-banner{left:12px;right:12px;bottom:12px;width:auto;padding:18px 18px;}',
    '}',
    '@media (prefers-reduced-motion:reduce){',
    '  .mixt-cookie-banner{transition:none;transform:none;}',
    '}'
  ].join('');

  function readStored() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var data = JSON.parse(raw);
      if (!data || data.version !== VERSION) return null;
      var age = Date.now() - new Date(data.date).getTime();
      if (!isFinite(age) || age > TTL_MS) {
        localStorage.removeItem(STORAGE_KEY);
        return null;
      }
      return data.status === 'accepted' || data.status === 'refused' ? data.status : null;
    } catch (e) {
      return null;
    }
  }

  function writeStored(status) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        status: status,
        date: new Date().toISOString(),
        version: VERSION
      }));
    } catch (e) { /* storage disabled — still emit event */ }
  }

  var bannerEl = null;
  var lastFocus = null;

  function injectStyles() {
    if (document.getElementById('mixt-cookie-styles')) return;
    var s = document.createElement('style');
    s.id = 'mixt-cookie-styles';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  function trapTab(e) {
    if (!bannerEl || e.key !== 'Tab') return;
    var focusables = bannerEl.querySelectorAll('a,button');
    if (!focusables.length) return;
    var first = focusables[0], last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  function onKey(e) {
    if (!bannerEl) return;
    if (e.key === 'Escape') { e.preventDefault(); decide('refused'); }
    else trapTab(e);
  }

  function decide(status) {
    writeStored(status);
    close();
    document.dispatchEvent(new CustomEvent('mixt:consent', { detail: status }));
  }

  function close() {
    if (!bannerEl) return;
    bannerEl.setAttribute('data-visible', 'false');
    document.removeEventListener('keydown', onKey);
    var el = bannerEl;
    setTimeout(function () { if (el && el.parentNode) el.parentNode.removeChild(el); }, 220);
    bannerEl = null;
    if (lastFocus && typeof lastFocus.focus === 'function') {
      try { lastFocus.focus(); } catch (e) { /* noop */ }
    }
  }

  function open() {
    if (bannerEl) return;
    injectStyles();
    lastFocus = document.activeElement;

    var el = document.createElement('aside');
    el.className = 'mixt-cookie-banner';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-labelledby', 'mixt-cookie-title');
    el.setAttribute('aria-describedby', 'mixt-cookie-desc');
    el.setAttribute('data-visible', 'false');
    el.innerHTML = [
      '<h2 id="mixt-cookie-title">Cookies &amp; confidentialit&eacute;</h2>',
      '<p id="mixt-cookie-desc">Nous pouvons utiliser des cookies pour mesurer l\'audience et am&eacute;liorer votre exp&eacute;rience. Aucun d&eacute;p&ocirc;t sans votre accord. ',
      '<a class="mixt-cookie-link" href="', POLICY_HREF, '">En savoir plus</a>.</p>',
      '<div class="mixt-cookie-actions">',
      '<button type="button" class="mixt-cookie-btn mixt-cookie-btn--refuse" data-action="refuse">Refuser</button>',
      '<button type="button" class="mixt-cookie-btn mixt-cookie-btn--accept" data-action="accept">Accepter</button>',
      '</div>'
    ].join('');

    el.querySelector('[data-action="refuse"]').addEventListener('click', function () { decide('refused'); });
    el.querySelector('[data-action="accept"]').addEventListener('click', function () { decide('accepted'); });

    document.body.appendChild(el);
    bannerEl = el;
    document.addEventListener('keydown', onKey);

    requestAnimationFrame(function () {
      el.setAttribute('data-visible', 'true');
      var accept = el.querySelector('[data-action="accept"]');
      if (accept) accept.focus();
    });
  }

  function wireSettingsLinks() {
    var links = document.querySelectorAll('[data-cookie-settings]');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function (e) {
        e.preventDefault();
        open();
      });
    }
  }

  window.mixtConsent = {
    get: readStored,
    set: function (status) {
      if (status !== 'accepted' && status !== 'refused') return;
      decide(status);
    },
    open: open,
    isAccepted: function () { return readStored() === 'accepted'; }
  };

  function boot() {
    wireSettingsLinks();
    if (readStored() !== null) return;
    setTimeout(open, 400);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
