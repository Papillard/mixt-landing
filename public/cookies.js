(function () {
  'use strict';

  var STORAGE_KEY = 'mixt-consent';
  var VERSION = 1;
  var TTL_MS = 1000 * 60 * 60 * 24 * 30 * 6; // 6 months
  var POLICY_HREF = '/politique-cookies';

  var CSS = [
    '.mixt-cookie-overlay{',
    '  position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;',
    '  padding:16px;background:rgba(21,24,28,0.45);',
    '  opacity:0;transition:opacity 200ms ease;',
    '}',
    '.mixt-cookie-overlay[data-visible="true"]{opacity:1;}',
    '.mixt-cookie-banner{',
    '  position:relative;width:420px;max-width:100%;',
    '  background:#fff;color:#321922;border-radius:14px;',
    '  box-shadow:0 24px 64px rgba(21,24,28,0.28),0 2px 8px rgba(21,24,28,0.08);',
    '  padding:22px 24px 24px;font-family:"Geist",system-ui,-apple-system,sans-serif;',
    '  transform:translateY(8px);transition:transform 200ms ease;',
    '}',
    '.mixt-cookie-overlay[data-visible="true"] .mixt-cookie-banner{transform:translateY(0);}',
    '.mixt-cookie-head{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin:0 0 6px;}',
    '.mixt-cookie-skip{',
    '  flex-shrink:0;padding:0;background:none;border:0;cursor:pointer;white-space:nowrap;',
    '  font-family:inherit;font-size:12px;font-weight:500;color:#5B6169;',
    '  text-decoration:underline;text-underline-offset:3px;text-decoration-thickness:1px;',
    '}',
    '.mixt-cookie-skip:hover{color:#321922;}',
    '.mixt-cookie-banner h2{',
    '  font-family:"Geist",system-ui,sans-serif;font-size:18px;font-weight:700;margin:0;white-space:nowrap;',
    '  color:#321922;letter-spacing:-0.015em;',
    '}',
    '.mixt-cookie-banner p{',
    '  font-size:15px;line-height:1.5;margin:0 0 18px;color:#15181C;',
    '}',
    '.mixt-cookie-banner a.mixt-cookie-link{',
    '  color:#5B6169;font-size:13px;text-decoration:underline;text-underline-offset:3px;',
    '  text-decoration-thickness:1px;',
    '}',
    '.mixt-cookie-banner a.mixt-cookie-link:hover{color:#321922;}',
    '.mixt-cookie-accept{',
    '  display:block;width:100%;font-family:inherit;font-size:15px;font-weight:600;',
    '  padding:13px 18px;border-radius:999px;cursor:pointer;',
    '  background:#F0502A;color:#fff;border:0;transition:background 150ms ease;',
    '}',
    '.mixt-cookie-accept:hover{background:#D13F1C;}',
    '.mixt-cookie-banner:focus{outline:none;}',
    '.mixt-cookie-banner button:focus-visible,.mixt-cookie-banner a:focus-visible{outline:2px solid #321922;outline-offset:2px;}',
    '@media (prefers-reduced-motion:reduce){',
    '  .mixt-cookie-overlay,.mixt-cookie-banner{transition:none;transform:none;}',
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

    var el = document.createElement('div');
    el.className = 'mixt-cookie-overlay';
    el.setAttribute('data-visible', 'false');
    el.innerHTML = [
      '<div class="mixt-cookie-banner" tabindex="-1" role="dialog" aria-modal="true" aria-labelledby="mixt-cookie-title" aria-describedby="mixt-cookie-desc">',
      '<div class="mixt-cookie-head">',
      '<h2 id="mixt-cookie-title">Vos cookies</h2>',
      '<button type="button" class="mixt-cookie-skip" data-action="refuse">Continuer sans accepter</button>',
      '</div>',
      '<p id="mixt-cookie-desc">Ils mesurent nos annonces et nous aident &agrave; am&eacute;liorer le bilan. ',
      '<a class="mixt-cookie-link" href="', POLICY_HREF, '">En savoir plus</a></p>',
      '<button type="button" class="mixt-cookie-accept" data-action="accept">OK pour moi</button>',
      '</div>'
    ].join('');

    el.querySelector('[data-action="refuse"]').addEventListener('click', function () { decide('refused'); });
    el.querySelector('[data-action="accept"]').addEventListener('click', function () { decide('accepted'); });

    document.body.appendChild(el);
    bannerEl = el;
    document.addEventListener('keydown', onKey);

    requestAnimationFrame(function () {
      el.setAttribute('data-visible', 'true');
      var dialog = el.querySelector('.mixt-cookie-banner');
      if (dialog) dialog.focus({ preventScroll: true });
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
