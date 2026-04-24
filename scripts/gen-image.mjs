#!/usr/bin/env node
// Mixt — On-brand image generation CLI (fal.ai / FLUX)
// Usage : npm run gen:image -- --prompt "..." --preset lifestyle

import { parseArgs } from 'node:util';
import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { fal } from '@fal-ai/client';
import { PRESETS, DEFAULT_PRESET, PRESET_NAMES } from './presets.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASTRO_ROOT = dirname(__dirname); // scripts/../  = astro/
const DEFAULT_OUT_DIR = join(ASTRO_ROOT, 'public', 'images', 'generated');

const HELP = `
Mixt — On-brand image generation via fal.ai (FLUX)

Usage :
  npm run gen:image -- --prompt "..." [options]

Required :
  --prompt <text>      Description of the image (English recommended)

Options :
  --preset <name>      ${PRESET_NAMES.join(' | ')} (default: ${DEFAULT_PRESET})
  --n <number>         Number of variations (default: 1)
  --out <path>         Output file path (default: auto in public/images/generated/)
  --size <preset>      Override image size (e.g. square_hd, portrait_4_3, landscape_16_9)
  --model <id>         Override fal model id (default: fal-ai/flux-pro/v1.1)
  --seed <number>      Reproducibility seed (optional)
  --help               Show this help

Examples :
  npm run gen:image -- --prompt "woman examining her skin at her bathroom mirror" --preset lifestyle
  npm run gen:image -- --prompt "mobile skin questionnaire app screen" --preset mockup
  npm run gen:image -- --prompt "abstract cellular turnover diagram" --preset illustration --n 3

Presets :
${PRESET_NAMES.map((n) => `  • ${n.padEnd(12)} size=${PRESETS[n].size} model=${PRESETS[n].model}`).join('\n')}
`;

function slugify(text, max = 48) {
  return text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, max);
}

function fail(msg, code = 1) {
  console.error(`\n✖ ${msg}\n`);
  process.exit(code);
}

async function downloadImage(url, outPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed: ${res.status} ${res.statusText}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, buf);
}

async function writeSidecar(imagePath, meta) {
  const jsonPath = imagePath.replace(/\.[a-z0-9]+$/i, '.json');
  await writeFile(jsonPath, JSON.stringify(meta, null, 2) + '\n');
}

async function main() {
  let args;
  try {
    args = parseArgs({
      options: {
        prompt: { type: 'string' },
        preset: { type: 'string', default: DEFAULT_PRESET },
        n: { type: 'string', default: '1' },
        out: { type: 'string' },
        size: { type: 'string' },
        model: { type: 'string' },
        seed: { type: 'string' },
        help: { type: 'boolean', default: false },
      },
      strict: true,
      allowPositionals: false,
    }).values;
  } catch (err) {
    fail(`${err.message}\n${HELP}`);
  }

  if (args.help) {
    console.log(HELP);
    process.exit(0);
  }

  if (!args.prompt) fail(`Missing required --prompt\n${HELP}`);
  if (!PRESET_NAMES.includes(args.preset)) {
    fail(`Unknown preset "${args.preset}". Available : ${PRESET_NAMES.join(', ')}`);
  }

  const apiKey = process.env.FAL_API_KEY;
  if (!apiKey) {
    fail(
      'FAL_API_KEY is not set.\n  1. Copy astro/.env.example to astro/.env\n  2. Paste your key from https://fal.ai/dashboard/keys\n  3. Re-run (the npm script already passes --env-file=.env)'
    );
  }

  fal.config({ credentials: apiKey });

  const preset = PRESETS[args.preset];
  const n = Math.max(1, Math.min(8, parseInt(args.n, 10) || 1));
  const imageSize = args.size || preset.size;
  const model = args.model || preset.model;

  // Structure : {prefix} {user_prompt}. {suffix}
  // Prefix = direction stylistique dominante (imposée en tête)
  // Suffix = renforcement des marqueurs style en fin
  const parts = [];
  if (preset.prefix) parts.push(preset.prefix);
  parts.push(args.prompt);
  if (preset.suffix) parts.push(preset.suffix);
  const finalPrompt = parts.join(' ').replace(/\s+/g, ' ').trim();

  console.log(`\n→ Preset: ${args.preset}  (model: ${model}, size: ${imageSize})`);
  console.log(`→ Prompt: ${finalPrompt.slice(0, 160)}${finalPrompt.length > 160 ? '…' : ''}`);
  console.log(`→ Variations: ${n}\n`);

  const startMs = Date.now();

  // Build input depending on model family
  const isFlux = model.includes('flux');
  const isNanoBanana = model.includes('nano-banana');
  const isGptImage = model.includes('gpt-image');

  const input = {
    prompt: finalPrompt,
    num_images: n,
    ...(args.seed ? { seed: parseInt(args.seed, 10) } : {}),
  };
  if (isFlux) {
    input.image_size = imageSize;
    if (preset.negative) input.negative_prompt = preset.negative;
    input.enable_safety_checker = true;
  } else if (isNanoBanana) {
    // Nano Banana (Gemini 2.5 Flash Image) on fal.ai
    input.output_format = 'jpeg';
    const aspectMap = {
      portrait_4_3: '3:4',
      portrait_9_16: '9:16',
      portrait_16_9: '16:9',
      square: '1:1',
      square_hd: '1:1',
      landscape_4_3: '4:3',
      landscape_16_9: '16:9',
    };
    input.aspect_ratio = aspectMap[imageSize] || '3:4';
  } else if (isGptImage) {
    // OpenAI GPT Image 1 on fal.ai
    const gptSizeMap = {
      portrait_4_3: '1024x1536',
      portrait_9_16: '1024x1536',
      portrait_16_9: '1536x1024',
      square: '1024x1024',
      square_hd: '1024x1024',
      landscape_4_3: '1536x1024',
      landscape_16_9: '1536x1024',
    };
    input.image_size = /^\d+x\d+$/.test(imageSize)
      ? imageSize
      : gptSizeMap[imageSize] || '1024x1536';
    input.quality = 'high';
    input.output_format = 'jpeg';
  }

  let result;
  try {
    result = await fal.subscribe(model, { input, logs: false });
  } catch (err) {
    fail(`fal.ai request failed: ${err?.status || ''} ${err?.message || err}`);
  }

  const images = result?.data?.images ?? [];
  if (!images.length) fail('No images returned by fal.ai');

  const baseSlug = slugify(args.prompt);
  const ts = Date.now();
  const outPaths = [];

  for (let i = 0; i < images.length; i++) {
    const suffix = n > 1 ? `-v${i + 1}` : '';
    const fileName = args.out
      ? n > 1
        ? args.out.replace(/(\.[a-z0-9]+)?$/i, `${suffix}$1`)
        : args.out
      : join(DEFAULT_OUT_DIR, `${baseSlug}-${ts}${suffix}.jpg`);

    try {
      await downloadImage(images[i].url, fileName);
      // Sidecar JSON : prompt, preset, model, timestamp — pour pouvoir retrouver et régénérer
      await writeSidecar(fileName, {
        prompt: args.prompt,
        finalPrompt,
        preset: args.preset,
        model,
        imageSize,
        seed: args.seed ? parseInt(args.seed, 10) : null,
        variantIndex: n > 1 ? i + 1 : null,
        totalVariants: n,
        timestamp: new Date(ts).toISOString(),
      });
      outPaths.push(fileName);
    } catch (err) {
      console.error(`  ✖ Image ${i + 1} failed: ${err.message}`);
    }
  }

  const elapsed = ((Date.now() - startMs) / 1000).toFixed(1);
  console.log(`\n✓ Generated ${outPaths.length} image(s) in ${elapsed}s`);
  outPaths.forEach((p) => {
    const rel = relative(ASTRO_ROOT, p);
    console.log(`  → ${rel}`);
  });
  if (outPaths.length) {
    console.log(`\nPreview: open ${outPaths.map((p) => relative(ASTRO_ROOT, p)).join(' ')}\n`);
  }
}

main().catch((err) => {
  fail(`Unexpected error: ${err.stack || err}`);
});
