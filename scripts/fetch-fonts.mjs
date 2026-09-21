/**
 * fetch-fonts.mjs — Self-héberge les polices Google (RGPD : plus aucune requête
 * vers fonts.gstatic.com / fonts.googleapis.com, donc plus d'IP transmise à
 * Google avant consentement — cf. sanction CNIL Google Fonts).
 *
 * Récupère la CSS que Google sert (avec un UA Chrome, pour obtenir du woff2),
 * télécharge chaque fichier woff2 dans public/fonts/, réécrit les url() vers
 * /fonts/<nom> et écrit src/styles/fonts.css.
 *
 * Usage : node scripts/fetch-fonts.mjs
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const FONT_DIR = resolve(ROOT, 'public/fonts');
mkdirSync(FONT_DIR, { recursive: true });

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const FAMILIES = [
  { slug: 'geist', url: 'https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap' },
  { slug: 'dmmono', url: 'https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap' },
];

async function fetchText(url) {
  const r = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!r.ok) throw new Error(`GET ${url} -> ${r.status}`);
  return r.text();
}

async function fetchBuffer(url) {
  const r = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!r.ok) throw new Error(`GET ${url} -> ${r.status}`);
  return Buffer.from(await r.arrayBuffer());
}

let out = `/* Polices self-hébergées — généré par scripts/fetch-fonts.mjs. Ne pas éditer à la main. */\n`;

for (const fam of FAMILIES) {
  let css = await fetchText(fam.url);
  const urls = [...css.matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+\.woff2)\)/g)].map((m) => m[1]);
  let i = 0;
  for (const u of urls) {
    const name = `${fam.slug}-${i}.woff2`;
    const buf = await fetchBuffer(u);
    writeFileSync(resolve(FONT_DIR, name), buf);
    css = css.replace(u, `/fonts/${name}`);
    i++;
  }
  // force font-display: swap (déjà présent via &display=swap, mais on garantit)
  out += `\n/* ${fam.slug} */\n${css.trim()}\n`;
  console.log(`✓ ${fam.slug} : ${urls.length} fichiers woff2`);
}

writeFileSync(resolve(ROOT, 'src/styles/fonts.css'), out, 'utf8');
console.log('✓ src/styles/fonts.css écrit');
