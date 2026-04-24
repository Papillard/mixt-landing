#!/usr/bin/env node
// Mixt — Pick a generated image and copy it to public/images/
// Usage :  npm run gen:pick -- <source-file-or-basename> <target-name>
//
// Examples :
//   npm run gen:pick -- close-up-detail-shot-1777037329172-v1.jpg pillar-suivi-dermato
//   npm run gen:pick -- close-up-detail-shot-1777037329172-v1 pillar-suivi-dermato
//
// The source is searched in public/images/generated/ (no extension needed).
// The target goes to public/images/<target>.jpg. Source stays in generated/ as archive.

import { copyFile, stat, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, basename, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASTRO_ROOT = dirname(__dirname);
const GEN_DIR = join(ASTRO_ROOT, 'public', 'images', 'generated');
const DEST_DIR = join(ASTRO_ROOT, 'public', 'images');

function fail(msg) {
  console.error(`\n✖ ${msg}\n`);
  process.exit(1);
}

async function resolveSource(needle) {
  // Full path ?
  if (existsSync(needle)) return needle;
  // In generated dir with ext ?
  const direct = join(GEN_DIR, needle);
  if (existsSync(direct)) return direct;
  // Without ext : search for match
  const baseNeedle = needle.replace(/\.[a-z0-9]+$/i, '');
  const files = await readdir(GEN_DIR);
  const match = files.find(
    (f) => f.startsWith(baseNeedle) && /\.(jpe?g|png|webp)$/i.test(f)
  );
  if (match) return join(GEN_DIR, match);
  // Partial substring match as last resort
  const partial = files.find(
    (f) => f.includes(baseNeedle) && /\.(jpe?g|png|webp)$/i.test(f)
  );
  if (partial) return join(GEN_DIR, partial);
  return null;
}

async function main() {
  const [, , source, targetRaw] = process.argv;

  if (!source || !targetRaw || source === '--help') {
    console.log(`
Mixt — Pick a generated image and copy it to public/images/

Usage :
  npm run gen:pick -- <source> <target>

Args :
  <source>    Path or basename of the image in public/images/generated/
              (extension optional, partial match supported)
  <target>    Target filename (without extension — kept as .jpg)

Example :
  npm run gen:pick -- close-up-detail-1777037329172-v1 pillar-suivi-dermato

The source image is copied (not moved). Original stays in generated/ as archive.
`);
    process.exit(source === '--help' ? 0 : 1);
  }

  const src = await resolveSource(source);
  if (!src) fail(`Source not found : "${source}" (searched in ${GEN_DIR})`);

  const ext = extname(src);
  const targetBase = targetRaw.replace(/\.[a-z0-9]+$/i, '');
  const dest = join(DEST_DIR, `${targetBase}${ext}`);

  await copyFile(src, dest);
  const st = await stat(dest);
  console.log(`\n✓ Copied ${basename(src)} → public/images/${basename(dest)} (${(st.size / 1024).toFixed(0)}KB)`);
  console.log(`  Source preserved in generated/ as archive.\n`);
}

main().catch((err) => fail(err.stack || err));
