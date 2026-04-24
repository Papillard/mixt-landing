# Mixt — On-brand image generation (fal.ai)

Local CLI to generate on-brand photos / mockups / illustrations via fal.ai (FLUX.1 Pro).

## One-time setup

1. **Get your fal.ai API key** at https://fal.ai/dashboard/keys
2. **Create `.env`** from the template :
   ```bash
   cp .env.example .env
   ```
3. **Paste your key** into `astro/.env` (it is gitignored — never commit it)
4. Install deps if not done yet :
   ```bash
   npm i
   ```

## Usage

From `astro/` :

```bash
# Lifestyle photo (default preset)
npm run gen:image -- --prompt "woman in her 30s examining her skin at her bathroom mirror, soft morning light"

# Mobile mockup
npm run gen:image -- --prompt "mobile skin questionnaire app, step 2 of 4, face outline guide" --preset mockup

# Editorial illustration
npm run gen:image -- --prompt "abstract cellular turnover diagram, connected circles, thin ink strokes" --preset illustration

# Several variations at once
npm run gen:image -- --prompt "macro close-up of hyperpigmented cheek, beauty editorial" --n 4

# Custom output path
npm run gen:image -- --prompt "..." --out public/images/hero-variant-2.jpg

# Full help
npm run gen:image -- --help
```

Outputs go to `public/images/generated/<slug>-<timestamp>.jpg` — this folder is the **local archive**. Each image gets a sidecar `<slug>.json` with the full prompt, preset, model, timestamp so you can always trace or regenerate.

`generated/` is **gitignored** (kept local only). It never pollutes the repo, but you never lose an essai either.

**To use a generated image on the site :**

```bash
# Copy from generated/ to public/images/ with a clean name
npm run gen:pick -- close-up-detail-1777037329172-v1 pillar-suivi-dermato
```

The source file **stays in generated/** as archive. You can re-pick any time.

The basename search is fuzzy — partial match works (no need to paste the full filename). Extension optional.

## Presets

| Preset | Default size | Use case |
|---|---|---|
| `lifestyle` | `portrait_4_3` | Skin close-ups, patient lifestyle moments, hand+product shots, lab scenes |
| `mockup` | `portrait_9_16` | Phone screens for the questionnaire, app dashboard, doctor messaging UI |
| `illustration` | `square_hd` | Scientific diagrams, mechanism-of-action, editorial decorative visuals |

Each preset injects a **style suffix** (palette, lighting, medium) and a **negative prompt** into your raw prompt so the output stays on-brand.

## Tips for good prompts

- Write in **English** — FLUX is trained primarily on English captions.
- Be **descriptive** : pose, environment, lighting, emotion, camera (e.g. "shot on 50mm, f/2.8").
- Mention **what to avoid** only inside the prompt body if you see recurring issues. The preset negatives already cover the most common ones (harsh light, cartoon, watermark, etc.).
- For **macros of skin**, add "soft natural texture, no flash, editorial magazine".
- For **mockups**, describe the **layout** explicitly: "top-left logo, central question, 4 radio options, primary CTA button at bottom".

## Cost

FLUX.1 Pro via fal.ai ≈ **$0.04 per image**. Budget ~$5 covers ~125 generations, enough to iterate through every section of the landing multiple times.

## Security

- `.env` is **gitignored** (root `.gitignore`) — your key stays local
- `.env.example` is committed with an empty value only (template)
- Store the key **also in 1Password** for backup
- The script never logs the key and redacts auth errors

## Troubleshooting

- **`FAL_API_KEY is not set`** → you haven't copied `.env.example` to `.env` or the key is empty
- **Empty output / no images** → try simpler prompt or different preset ; check console for fal.ai error status
- **Style drift between generations** → iterate the suffix in `scripts/presets.mjs`
- **Node version error** → run `nvm use 22` before `npm run gen:image`
