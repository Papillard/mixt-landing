// On-brand presets for Mixt image generation
// Structure : `{prefix} {user_prompt}. {suffix}`
// — `prefix` plante la direction stylistique DOMINANTE en début de prompt
// — `suffix` renforce les marqueurs en fin (palette, grain, mood)
// Palette Mixt: base #FFF8F2, cream #F5E6DA, deep #361822, blush #D4A08A, ember #FFAF2C, sage #4A5F52

export const PRESETS = {
  // Style éditorial magazine wellness — film argentique, vraie personne imparfaite
  // Token-list style (pas de prose). Répétition stratégique des marqueurs clés.
  // Références photographes réels = force le style (le modèle a été entraîné dessus).
  // Pellicules spécifiques + "amateur snapshot" pour casser le biais "beauté magazine".
  lifestyle: {
    // Wellness urban moderne, pas bourgeois Parisian. Style Tyler Mitchell / Petra Collins /
    // Durimel real-life. Sujet JAMAIS centré et posé — toujours en action, partiel, de dos,
    // cropped. Vestiaire : basics vintage (tshirt, sweatshirt, tank), pas chemises chic.
    prefix:
      '35mm film photograph, shot on Cinestill 800T or Kodak Gold 200, heavy analog film grain visible, editorial modern wellness brand, amateur point-and-shoot snapshot, candid slice-of-life caught mid-action not posing, photographed in the style of Tyler Mitchell and Petra Collins and Durimel, a real person with attitude effortlessly cool not a professional model not a mannequin, asymmetric features visible pores real skin texture subtle hyperpigmentation freckles or acne scars, no makeup no filter no retouching. DIVERSITY CONSTRAINT — do not default to white european woman : ethnicity varies across mediterranean south-asian black mixed latina ; age varies 30s to 50s not only early 30s ; setting varies not only indoor Parisian apartment — could be urban street minimalist tiled bathroom outdoor terrace modern office countryside ; wardrobe varies not only cream beige tshirt — could be graphic tee hoodie ribbed tank burgundy coat olive cardigan ; time of day varies not only afternoon golden — could be morning blue midday sharp evening blue hour night neon. Subject:',
    suffix:
      'subject off-center not centered in frame, face partially cropped out of frame or turned away or seen from behind, no posed smile toward camera, caught mid-action doing something real, negative space on one side of the frame, vintage washed oversized cotton tshirt or worn sweatshirt or ribbed tank top not chic shirt, hair wet or messy loosely up not styled, small thin gold hoop earring barely visible, warm afternoon or morning diffused light overexposed highlights no dark areas, heavy visible film grain emulsion texture, Cinestill 800T film scan warm halation, modern urban wellness aesthetic not Kinfolk not bourgeois, slice of life documentary feel, editorial magazine photography',
    size: 'portrait_4_3',
    model: 'fal-ai/nano-banana',
  },

  // LAB — visuel pharmacie/laboratoire moderne. PAS d'humain. Fond neutre médical.
  // Pas d'aesop/parfumerie vibe. Clean pharmaceutical grade + grain film.
  lab: {
    prefix:
      '35mm film photograph, heavy analog film grain, medical laboratory close-up photography, modern pharmaceutical apothecary aesthetic clean not sterile cold, editorial scientific photography, no people no humans no hands no body parts, pure product or equipment only, neutral off-white or soft grey background softly out of focus, precise clean composition, glass and stainless steel materials, shallow depth of field. Subject:',
    suffix:
      'close-up macro detail, warm soft diffused laboratory lighting from one side, subtle halation on glass surfaces, pharmaceutical grade laboratory glassware or apothecary bottles, asymmetric off-center composition, intimate scientific product detail, heavy film grain Cinestill, no text on labels no visible brand logos, modern medical editorial not cozy parfumerie not Aesop',
    size: 'landscape_4_3',
    model: 'fal-ai/nano-banana',
  },

  // CONDITION — macro dermatologique peau, skin atlas clinique.
  // Pas d'editorial lifestyle. Documentation médicale honest.
  condition: {
    prefix:
      '35mm film photograph analog grain, dermatological reference photography skin atlas, extreme macro close-up of real human skin, honest clinical documentation not glamour not beauty editorial, real imperfect mature skin with visible natural texture pores and condition details, diverse ethnic subjects across ages 30s to 50s not only young white woman, neutral diffused even lighting no harsh shadows, minimum background distraction, medical editorial photography. Subject:',
    suffix:
      'no makeup no filter no retouching, subject skin area dominant in frame, neutral cream grey or sage background softly blurred, asymmetric close-up composition, heavy film grain, honest dermatological documentation, visible pores lesions hyperpigmentation freckles or fine lines authentic',
    size: 'portrait_4_3',
    model: 'fal-ai/nano-banana',
  },

  // Raw — pas de prefix/suffix, passe le prompt tel quel. Utile pour tester des prompts
  // déjà polis (ex. venant de Leonardo.ai, Midjourney) ou comparer des modèles
  raw: {
    prefix: '',
    suffix: '',
    size: 'portrait_4_3',
    model: 'fal-ai/nano-banana',
  },

  // Fallback FLUX Pro si besoin d'un rendu plus classique / studio
  'lifestyle-flux': {
    suffix:
      'warm natural light, cream and blush color palette, editorial beauty photography, shallow depth of field, shot on 50mm, subtle film grain, soft skin texture, no visible text, no watermark, no logo',
    negative:
      'harsh lighting, oversaturated, plastic skin, cartoon, 3d render, cgi, low quality, blurry, text, watermark',
    size: 'portrait_4_3',
    model: 'fal-ai/flux-pro/v1.1',
  },

  mockup: {
    suffix:
      'clean minimalist medical app UI mockup, cream white background (#FFF8F2), serif display typography similar to Fraunces, soft amber accents (#FFAF2C), phone frame or laptop screen, professional and trustworthy, centered composition, flat shadows, no visible brand logos, no placeholder lorem ipsum',
    negative:
      'cluttered, 3d render, cartoon, low contrast, dark mode, neon, garish colors, stock photo feel',
    size: 'portrait_9_16',
    model: 'fal-ai/flux-pro/v1.1',
  },

  illustration: {
    suffix:
      'minimalist editorial illustration, warm bordeaux and cream palette, grainy texture, scientific diagram aesthetic, hand-drawn line work, magazine editorial style, flat composition, thin ink strokes',
    negative:
      'photorealistic, 3d render, flashy, neon, cartoon kawaii, stock vector clipart',
    size: 'square_hd',
    model: 'fal-ai/flux-pro/v1.1',
  },
};

export const DEFAULT_PRESET = 'lifestyle';
export const PRESET_NAMES = Object.keys(PRESETS);
