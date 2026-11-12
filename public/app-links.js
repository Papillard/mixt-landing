/*
 * Repasse l'identifiant de clic pub (fbclid) et les utm_* de l'URL d'arrivée dans tous
 * les liens vers app.mixt.care.
 *
 * Pourquoi : sans ça, l'app ne connaît la pub d'origine que par le cookie _fbc, que le
 * pixel ne pose qu'APRÈS « Accepter » dans la bannière. Une visiteuse qui refuse ou
 * ignore la bannière devenait inattribuable, et on ne savait pas d'où elle venait.
 * Ici on ne pose aucun cookie : on recopie des paramètres d'URL dans des liens.
 *
 * Les valeurs sont gardées en sessionStorage pour survivre à la navigation entre les
 * pages du site (atterrissage sur /rosacee, clic sur le CTA depuis /).
 */
(function () {
  var KEYS = ['fbclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  var STORE = 'mixt:attribution';
  var saved = {};

  try { saved = JSON.parse(sessionStorage.getItem(STORE) || '{}') || {}; } catch (e) {}

  var params = new URLSearchParams(location.search);
  var fresh = {};
  KEYS.forEach(function (k) { if (params.get(k)) fresh[k] = params.get(k); });
  if (Object.keys(fresh).length) {
    saved = fresh; // un nouveau clic pub remplace le précédent
    try { sessionStorage.setItem(STORE, JSON.stringify(saved)); } catch (e) {}
  }
  if (!Object.keys(saved).length) return;

  function decorate(a) {
    if (a.hostname !== 'app.mixt.care' || /^\/login/.test(a.pathname)) return;
    var url = new URL(a.href);
    Object.keys(saved).forEach(function (k) {
      if (!url.searchParams.has(k)) url.searchParams.set(k, saved[k]);
    });
    a.href = url.toString();
  }

  function decorateAll() {
    document.querySelectorAll('a[href*="app.mixt.care"]').forEach(decorate);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', decorateAll);
  else decorateAll();

  // Filet pour les liens injectés après coup (quiz, composants dynamiques).
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href*="app.mixt.care"]');
    if (a) decorate(a);
  }, true);
})();
