# Déploiement de mixt.care

Source de vérité pour le déploiement. Lire ceci avant toute question sur "comment
ça se déploie".

## En une phrase

`git push` sur `master` → **Cloudflare build (Git-connecté) le construit et le
déploie tout seul**. Rien d'autre à faire.

## Hébergement réel

- Domaine : **mixt.care**, DNS chez **Cloudflare** (proxy orange).
- Servi par le **Cloudflare Worker `mixt-landing`** (voir `wrangler.toml`,
  `[assets] directory = "./dist"`). C'est un site statique : Astro build → `dist/`,
  le Worker sert `dist/` en edge.
- **Ce n'est PAS GitHub Pages.** GitHub Pages a été retiré (workflow supprimé,
  site Pages désactivé) parce qu'il n'était pas la prod et créait de la confusion.

## Pipeline automatique

1. Push / merge sur `master`.
2. **Cloudflare Workers Builds** (connecté au repo GitHub) lance `npm run build`
   (Astro, Node 22), puis publie `dist/` sur le Worker.
3. Statut visible dans GitHub sur le commit : check-run `Workers Builds: mixt-landing`,
   et dans le dashboard Cloudflare (Workers & Pages > `mixt-landing` > Builds).
4. Le cache edge Cloudflare peut servir l'ancienne page une minute. Vérifier avec
   une URL cache-bustée : `https://mixt.care/?cb=$RANDOM`.

## Variables de build (analytics)

Astro n'injecte les variables `PUBLIC_*` **qu'au moment du build**. Le build
Cloudflare doit donc les avoir dans son environnement. Deux façons :

- **Versionné (actuel)** : `.env.production` à la racine, lu par `astro build`.
  On y met uniquement des valeurs **publiques** (clé projet PostHog `phc_`, host
  PostHog, ID de pixel Meta) : elles finissent dans le JS client de toute façon.
  Jamais de secret ici.
- **Dashboard Cloudflare (surcharge)** : Settings > Build > Variables. Une variable
  d'env process a priorité sur `.env.production`. À utiliser si on veut sortir les
  valeurs de git.

Variables utilisées : `PUBLIC_POSTHOG_KEY`, `PUBLIC_POSTHOG_HOST`,
`PUBLIC_META_PIXEL_ID`. Vides => analytics non branchés (le site build quand même).

Attention : des "GitHub Repository Variables" ne servent à RIEN ici, car le build
tourne chez Cloudflare, pas dans GitHub Actions.

## Déploiement manuel (secours, si le build Git est cassé)

```bash
nvm use 22
npm run build            # lit .env.production
npx wrangler deploy      # pousse dist/ sur le Worker (auth: boris.paillard@gmail.com)
```

## Build local / preview

```bash
nvm use 22               # Node >= 22.12 obligatoire (le défaut Node 20 casse astro build)
npm run build
npm run preview
```

`.env` (local, gitignoré) sert au dev local. `.env.production` sert au build de prod.
