---
version: 1.1
name: Mixt
description: Dermatologie personnalisée en ligne. Identité éditoriale chaude et
  clinique, photographie réelle texturée au grain argentique, sans-serif Geist en
  titres avec accents serif italiques, palette terracotta/jade sur canvas crème.
status: Source de vérité opinionée. Ce document est canonique ; le code converge
  vers lui. La palette et l'échelle typo ici sont la cible assainie, pas un simple
  miroir de l'existant. Les écarts encore présents dans le code sont listés en fin
  de document (section « Migration »).
colors:
  # ── Encres (texte) ──────────────────────────
  ink: "#1A1210"        # texte principal
  ink-2: "#6B5B52"      # texte secondaire
  ink-3: "#9A8A80"      # légendes, micro-textes
  # ── Canvas clair ────────────────────────────
  base: "#FFF8F2"       # fond par défaut
  cream: "#F5E6DA"      # lignes en surbrillance, en-têtes de tableau
  # ── Bruns / ancrage (rampe deep > warm > blush) ──
  deep: "#361822"       # nav, boutons dark, chips, teinte des ombres
  warm: "#B07460"       # mid-terracotta : cadrage tableau, gradients
  blush: "#D4A08A"      # tint chaud clair : fonds photo, halos
  # ── Action : registre chaud ─────────────────
  ember: "#E8664B"      # CTA principal, liaisons
  ember-dark: "#C4513A" # hover du CTA
  ember-deep: "#9E3E2B" # texte/eyebrow chaud sur fond clair
  # ── Négatif / erreur ────────────────────────
  danger: "#C85A4A"     # croix "don't", erreurs de formulaire
  # ── Froid : signal médical (sur fond clair) ──
  jade: "#5FBFA3"
  jade-deep: "#3A8A75"
  # ── Froid : fonds sombres "science" + tints ──
  sage: "#4A5F52"
  sage-deep: "#2D4239"  # fond des sections sombres
  sage-light: "#A8B5A7" # tint clair de distinction
  # ── Froid : accent sur fond sombre ──────────
  mint: "#7FE0A5"
  # ── DEPRECATED (ne pas étendre, voir Migration) ──
  rich: "#6B3D32"       # à fondre dans ink-2
  violet: "#5E3A6E"     # eyebrows Conditions, à migrer vers ember-deep/jade
fonts:
  serif: "Fraunces"        # wordmark uniquement
  italic: "Newsreader"     # accent italique dans les titres (.italic-serif)
  sans: "Geist"            # titres + corps + UI (police de travail)
  mono: "DM Mono"          # eyebrows, labels, micro-légendes
# Échelle typographique fermée. Toute taille ad hoc se "snappe" au cran le
# plus proche. display/stat/h2/h3 sont fluides (clamp mobile > desktop).
typography:
  display:   { size: "40>52px", weight: '500', lineHeight: '1.06', tracking: "-0.035em", usage: "titres de section" }
  stat:      { size: "48>60px", weight: '600', lineHeight: '0.95', tracking: "-0.04em",  usage: "grands chiffres" }
  h2:        { size: "32>36px", weight: '500', lineHeight: '1.12', tracking: "-0.03em",  usage: "titres secondaires" }
  h3:        { size: "22>24px", weight: '500', lineHeight: '1.25', tracking: "-0.02em",  usage: "titres de carte/bloc" }
  lead:      { size: "20px",    weight: '400', lineHeight: '1.5',  tracking: "0",         usage: "paragraphe d'intro" }
  body-lg:   { size: "18px",    weight: '400', lineHeight: '1.6',  tracking: "0",         usage: "corps généreux" }
  body:      { size: "16px",    weight: '400', lineHeight: '1.6',  tracking: "0",         usage: "corps par défaut" }
  body-sm:   { size: "14px",    weight: '400', lineHeight: '1.5',  tracking: "0",         usage: "corps dense/secondaire" }
  caption:   { size: "12px",    weight: '400', lineHeight: '1.4',  tracking: "0",         usage: "mentions, légendes" }
  eyebrow:   { size: "11px",    weight: '500', lineHeight: '1',    tracking: "0.18em",    usage: "sur-titre de section (mono, uppercase)" }
  label:     { size: "10px",    weight: '500', lineHeight: '1',    tracking: "0.10em",    usage: "micro-label (mono, uppercase)" }
# Poids : 3 seulement. 400 corps, 500 titres, 600 stats/emphase.
# Tracking : 5 valeurs. -0.035em / -0.02em / 0 / 0.10em / 0.18em.
weights: { normal: '400', medium: '500', semibold: '600' }
trackings: ["-0.035em", "-0.02em", "0", "0.10em", "0.18em"]
exceptions:
  - "Texte des boutons lg = 15px (cas UI dédié, hors échelle de corps)."
layout:
  maxWidth: 1200px
  gutterX: 24px            # px-6
  gutterXDesktop: 40px     # md:px-10
  sectionY: 96px           # py-24
  sectionYDesktop: 128px   # md:py-32
  navHeight: 56px          # h-14
shapes:
  button: 9999px           # rounded-full (pill)
  card: 12px               # rounded-[12px]
  image: 24px              # rounded-3xl
  chip: 6px                # rounded-[6px]
style:
  borderColor: "rgba(0,0,0,0.08)"   # black/[0.08]
  borderHairline: "rgba(0,0,0,0.06)"
  depth: soft               # ombres chaudes diffuses, jamais grises
texture:
  grain: ".grain-overlay (grain argentique SVG, opacity 0.22, mix-blend overlay)"
  filmGrade: ".film-grade (contrast 1.04, saturate 0.92, sepia 0.06)"
components:
  button-ember:
    backgroundColor: "{colors.ember}"
    textColor: "#FFFFFF"
    rounded: "{shapes.button}"
    padding: 13px 28px
    shadow: "0 2px 14px -2px rgba(212,98,42,0.35)"
    hover: "bg {colors.ember-dark}"
    usage: "CTA principal"
  button-dark:
    backgroundColor: "{colors.deep}"
    textColor: "#FFFFFF"
    rounded: "{shapes.button}"
    hover: "bg #2B1018"
    usage: "CTA sobre"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    border: "1px solid rgba(26,18,16,0.15)"
    rounded: "{shapes.button}"
    usage: "secondaire sur fond clair"
  button-ghost-light:
    backgroundColor: transparent
    textColor: "#FFFFFF"
    border: "1px solid rgba(255,255,255,0.25)"
    rounded: "{shapes.button}"
    usage: "secondaire sur fond sombre"
  card-default:
    backgroundColor: "{colors.base}"
    border: "1px solid {style.borderColor}"
    rounded: "{shapes.card}"
  chip:
    backgroundColor: "{colors.deep}/95"
    textColor: "#FFFFFF"
    rounded: "{shapes.chip}"
    typography: "label (10px uppercase tracking 0.18em)"
  shadow-image: "0 20px 60px -20px rgba(54,24,34,0.35)"
  shadow-dropdown: "0 24px 60px -24px rgba(54,24,34,0.40)"
---

# Design System: Mixt

## Marque et style

Mixt incarne une dermatologie personnalisée, humaine et crédible. L'identité est éditoriale et chaude, jamais froide ni « tech ». Le visuel repose sur un canvas crème (`base` `#FFF8F2`), une photographie réelle de patientes traitée au grain argentique, et une typographie sans-serif posée (Geist medium) ponctuée d'accents serif italiques (Newsreader). Le ton est celui d'un magazine de soin sérieux : générosité d'espace, photos plein cadre, jamais de cartes timides centrées.

Deux registres de couleur portent l'émotion : le **terracotta/ember** chaud pour l'action et l'énergie, le **jade** froid pour le signal médical et la confiance (sécurité, HDS, secret médical). Le brun profond (`deep`) ancre l'ensemble (nav, boutons, ombres). Le système n'est pas plat : les ombres chaudes diffuses sous les photos et les cartes créent une profondeur douce et premium.

## Couleurs

La palette tient en **cinq registres**, chacun avec un rôle exclusif. Tout token hors de cette liste est soit déprécié, soit interdit.

- **Encres (texte)** : `ink` `#1A1210` principal, `ink-2` `#6B5B52` secondaire, `ink-3` `#9A8A80` légendes. Tout le texte vient d'ici. Pas de brun-texte ad hoc.
- **Canvas et bruns** : `base` `#FFF8F2` est le fond par défaut. `cream` `#F5E6DA` tinte les lignes en surbrillance et les en-têtes de tableau. La rampe brune d'ancrage est `deep` `#361822` (sombre, nav/chips/ombres) → `warm` `#B07460` (mid-terracotta, cadrage de tableau et gradients) → `blush` `#D4A08A` (tint clair, fonds photo et halos).
- **Action (chaud)** : `ember` `#E8664B` est **l'unique couleur d'action**, déclinée en `ember-dark` `#C4513A` (hover) et `ember-deep` `#9E3E2B` (texte/eyebrow chaud sur fond clair). C'est le seul registre autorisé pour les CTA chauds.
- **Négatif / erreur** : `danger` `#C85A4A`. Réservé à la sémantique « non » (croix des listes « don't », messages d'erreur de formulaire). Ne sert jamais d'action ni de décoration.
- **Froid** : `jade` `#5FBFA3` / `jade-deep` `#3A8A75` pour le signal médical **sur fond clair** ; `sage-deep` `#2D4239` (+ `sage`, `sage-light` `#A8B5A7`) pour les fonds sombres « science » et leurs tints ; `mint` `#7FE0A5` pour l'accent froid **sur fond sombre**.

Règle du registre froid, par **contexte de luminance** (et non par couleur) : accent froid sur clair = `jade`, fond sombre = `sage`, accent froid sur sombre = `mint`. Une fois la règle posée, la coexistence de deux verts est intentionnelle, pas une redondance.

**Dépréciés** (présents dans le code, à retirer, voir Migration) : `rich` (brun-texte qui double `ink-2`) et `violet` (eyebrows des sections Conditions). Ne pas les étendre. Le `violet` du module quiz reste piloté par ses propres vars legacy `:root --violet-*`, indépendantes de la palette de marque.

## Typographie

Trois familles travaillent ensemble, plus la serif réservée au logo.

- **Geist** (sans) est la police de travail : titres **et** corps. Les titres de section sont en Geist `medium` (500), très resserrés (`tracking` -0.035em, `line-height` 1.06), fluides de 40px (mobile) à 52px (desktop). Le corps est en Geist 400, `line-height` 1.6.
- **Newsreader** (serif italique) fournit l'accent éditorial : un mot, à l'intérieur d'un titre, passe en italique serif via `.italic-serif` (ex. « Comment *ça marche.* »). C'est la signature typographique. **Un seul accent par titre.**
- **Fraunces** (serif) est réservée au **wordmark** « mixt. » uniquement. Ce n'est pas une police de corps ni de titre.
- **DM Mono** porte les étiquettes techniques : eyebrows, dividers de stats, labels de confiance, micro-légendes. Toujours `uppercase`, `tracking` large, 10 à 11px.

### Échelle fermée

L'échelle compte **11 crans nommés** (voir le bloc `typography` du frontmatter et les tokens `--text-*` de `global.css`). Toute taille intermédiaire se ramène au cran le plus proche : pas de demi-pixels (8.5, 13.5, 14.5, 16.5px bannis), pas de taille hors échelle. `display`, `stat`, `h2`, `h3` sont **fluides** (`clamp`), donc un seul token couvre mobile et desktop sans paire responsive en markup.

- **Poids** : trois seulement. 400 (corps), 500 (titres), 600 (stats et emphase).
- **Tracking** : cinq valeurs. -0.035em (display), -0.02em (chiffres/medium), 0 (corps), 0.10em (label mono), 0.18em (eyebrow).
- **Exception assumée** : le texte des boutons `lg` est à 15px, traité comme cas UI dédié, hors échelle de corps.

Règle d'accent mobile : dans un titre qui wrap (<768px), `.italic-serif` reprend la police du titre pour éviter les line-heights asymétriques. En blockquote et paragraphe, l'italique serif reste intact.

## Layout et espacement

Conteneur centré `max-w-[1200px] mx-auto`. Marges `px-6` (24px) mobile, `md:px-10` (40px) desktop. Rythme vertical `py-24` (96px) / `md:py-32` (128px). Nav fixe de 56px ; le héros compense avec `pt-[calc(56px+80px)]`.

Grilles généreuses et asymétriques : héros `lg:grid-cols-[1.2fr_1fr]`, sections science `[1fr_1fr]` avec colonne droite `sticky`. Photos plein cadre en ratio `4/5`, coins `rounded-3xl`. Pas de cartes étriquées : plein-largeur et photo-forward.

## Rythme des sections

Mixt vit majoritairement sur le canvas clair `bg-base`, ponctué de respirations :

- **Clair par défaut** : `bg-base` (`#FFF8F2`).
- **Tinte douce** : `bg-sage-light/25` ou `/30` pour distinguer une section sans casser la chaleur.
- **Sombre éditoriale** : `bg-sage-deep` + `text-white` pour le moment « science / preuve » (grille de fond subtile, eyebrow `mint`, strip de stats en blanc). Une à deux sections sombres par page maximum.

Ordre de référence (accueil) : Hero → Problem → Pillars → Steps → Respiration → Conditions → **Science (sombre)** → Testimonials → Pricing → Team → FaqCta.

## Profondeur et ombres

Pas de flat strict. La hiérarchie vient de l'alternance de fonds, des bordures hairline (`black/[0.08]`), et surtout d'**ombres chaudes diffuses** teintées de brun profond : photos `shadow-[0_20px_60px_-20px_rgba(54,24,34,0.35)]`, dropdowns `0_24px_60px_-24px_rgba(54,24,34,0.40)`, CTA ember `0_2px_14px_-2px_rgba(212,98,42,0.35)`. **Jamais d'ombre grise neutre** : toujours teintée `deep` ou `ember`.

## Texture

Signature propre à Mixt. Toute photo peut recevoir :

- `.grain-overlay` : grain argentique SVG, `opacity` 0.22, `mix-blend-mode: overlay`. Variante `.grain-overlay--heavy` pour les portraits macro.
- `.film-grade` : étalonnage Portra/Cinestill (`contrast 1.04`, `saturate 0.92`, `sepia 0.06`, `brightness 1.02`).

## Formes

- **Boutons et pills** : `rounded-full`. C'est la forme d'action.
- **Cartes et conteneurs** : `rounded-[12px]`.
- **Photos** : `rounded-3xl` (24px).
- **Chips et badges sur photo** : `rounded-[6px]`, fond `deep/95`, texte mono uppercase.

Bordures : hairline `border-black/[0.08]` sur les cartes, `border-black/[0.06]` sous la nav. Le cadrage de la colonne « Avec Mixt » utilise `warm/40`.

## Composants

**Boutons** (`src/components/Button.astro`, tailles `sm`/`md`/`lg`, `lg` par défaut) :

- `ember` / `ember-pill` : remplissage terracotta + ombre corail. CTA principal du héros.
- `dark` : remplissage `deep`, texte blanc. CTA sobre (pricing, nav).
- `ghost` : transparent, texte `ink`, bordure `ink/15`. Secondaire sur fond clair.
- `ghost-light` : transparent, texte blanc, bordure `white/25`. Secondaire sur fond sombre uniquement.
- `white` : remplissage blanc, texte `ink`. Sur fond sombre ou photo.

Tous portent une flèche `→` en suffixe et `gap-2` interne.

**Eyebrow de section** : `eyebrow` mono uppercase, précédé d'un tiret `h-px w-10`. La couleur s'adapte au contexte : `ember-deep` (parcours), `jade-deep` (sécurité), `sage-deep` (comparatif), `mint` (section sombre). Un par section maximum.

**Pastille de confiance** : pill `bg-base/70 backdrop-blur` bordure `ink/[0.12]`, point `jade` (halo `shadow-[0_0_0_3px_rgba(95,191,163,0.18)]`) + label mono « HDS · France ». Réservée au signal sécurité/données.

**Cartes et lignes de prix** : conteneur `rounded-[12px]` bordure `black/[0.08]` fond `base`, ligne en surbrillance teintée `cream/60`. Prix en `semibold tracking-[-0.02em]`.

**Listes Do / Don't** (`ChecksList.astro`) : check dans un disque vert `#4a8f5e`, croix dans un disque `danger` `#C85A4A`. Seul usage sémantique couleur (positif/négatif).

**Stats** : grand chiffre Geist 600 (token `stat`), légende `body-sm` en `ink-2` (ou `white/65` sur fond sombre), animée via `BigNumber`.

## Wordmark

« mixt. » en Fraunces 28px medium, `font-variation-settings: 'opsz' 144`, point final en `ember` qui se décale de 2px au survol. Sur fond clair : texte `ink`. Garder l'animation du point comme micro-signature.

## À faire / À éviter

À faire : garder `bg-base` dominant, réserver `sage-deep` aux moments de preuve. CTA principal en `ember`, secondaire en `ghost`. Un accent `.italic-serif` par titre, jamais plus. Grain + film-grade sur toute photo. Ombres toujours teintées `deep`/`ember`. `jade` réservé au signal médical, `danger` au négatif. Boutons en pill, cartes en `rounded-[12px]`. Toute taille de texte vient de l'échelle nommée.

À éviter : ne pas réintroduire `accent` (remplacé par `ember`/`danger`). Ne pas étendre `rich` ni `violet` (dépréciés). Ne pas utiliser Fraunces hors wordmark, ni Geist pour le wordmark. Pas deux accents italiques dans un titre. Pas de `ghost` clair sur fond sombre ni `ghost-light` sur clair. Jamais d'ombre grise neutre. Pas de cartes centrées étriquées. Ne pas mélanger registre chaud (`ember`) et froid (`jade`) sur un même élément d'action. Pas de taille de texte hors échelle ni de demi-pixel.

## Migration (écarts code > cible)

Le code n'est pas encore entièrement aligné sur cette cible. Suivi du chantier (PR de migration séparée) :

- **Tokens dépréciés à retirer** : `rich` (3 `text-rich` → `ink-2`), `violet` (eyebrows Conditions → `ember-deep` ou `jade-deep`).
- **`accent` supprimé** de la palette `@theme` ; reste les vars legacy `:root --accent` utilisées par `quiz.js`/`cookies.js` (à traiter avec la refonte du quiz).
- **Échelle typo** : les composants utilisent encore des tailles arbitraires `text-[..px]` (~42 valeurs distinctes). Migration vers les tokens `--text-*` (`text-display`, `text-h2`, `text-body`, etc.) et snap des valeurs égarées.
- **Tokens morts supprimés** (faits) : `jade-soft`, `mint-soft`, `violet-dark`, `violet-light`, `violet-bg`.
