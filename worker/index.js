// Worker devant les assets statiques (cf. wrangler.toml, run_worker_first).
// 1. Hôte canonique : http:// et www → https://mixt.care, chemin et query conservés (301).
// 2. Slash final : l'asset server redirige /acne → /acne/ en 307 ; on le passe en 301
//    pour que Google consolide le signal sur l'URL canonique.
const CANONICAL_HOST = 'mixt.care';
const MIXT_HOSTS = new Set(['mixt.care', 'www.mixt.care']);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (MIXT_HOSTS.has(url.hostname) && (url.protocol === 'http:' || url.hostname !== CANONICAL_HOST)) {
      url.protocol = 'https:';
      url.hostname = CANONICAL_HOST;
      url.port = '';
      return Response.redirect(url.toString(), 301);
    }

    const res = await env.ASSETS.fetch(request);
    if (res.status === 307) {
      const location = res.headers.get('Location');
      if (location) return new Response(null, { status: 301, headers: { Location: location } });
    }
    return res;
  },
};
