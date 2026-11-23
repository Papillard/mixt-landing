# Ajouter un article de blog

1. Crée `src/content/blog/<slug>.md` (le nom du fichier = l'URL `/blog/<slug>/`). Copie le frontmatter de `laser-couperose.md` et remplis tous les champs (schéma : `src/content.config.ts`, le build casse si un champ obligatoire manque).
2. `title` (≈60 car., requête cible en tête), `description` (≈150 car.), `h1`, `kicker` (sur-titre court), `intro` (2 ou 3 phrases), `pillar` : `rosacee | taches | acne | hyperpigmentation` (lien pilier + mot du CTA, `ctaTopic` pour le changer : « Parler de votre <ctaTopic> à un médecin »).
3. Photo : `heroImage` seulement si approuvée (`public/images/real/`), sinon `heroPlaceholder: PH-<slug>-hero` (aplat gris nommé, affiché en 3/2 sous l'intro : hero éditorial centré, sans bouton) et ajoute une ligne dans `docs/seo/photos-a-generer.md`. Dans le corps (Markdown), un placeholder : `<div class="ph">PH-<slug>-<usage></div>` (aplat gris 3/2), une photo approuvée : `![alt](/images/real/<fichier>.webp)`.
4. Corps en Markdown : uniquement des `##` (sommaire auto) et `###`. Tableaux, listes, citations `>` sont stylés. Liens internes en relatif (`/rosacee/`, `/blog/<autre-slug>/`).
5. `whenToConsult` : 4 à 6 signes (encadré sombre « Quand consulter » sous le corps). `faq` : 4 à 6 `{q, a}` (rendu accordéon + JSON-LD FAQPage). `related` : `{href, label}` vers d'autres articles (la landing pilier est ajoutée automatiquement).
6. `datePublished`, `dateModified` (AAAA-MM-JJ), `reviewedBy` (défaut « Relecture médicale en cours »). `draft: true` exclut l'article du build.
7. JSON-LD Article + FAQPage + BreadcrumbList, sitemap, index `/blog/` : automatiques, rien à faire.
8. Copy : `.claude/skills/copy-conforme/SKILL.md` puis `~/.claude/skills/anti-ia-copy/SKILL.md`. Zéro tiret cadratin ou demi-cadratin, aucune marque de médicament (DCI seulement), « peut prescrire », « médecin partenaire », jamais « consultez un dermatologue », titres sans point final.
9. Build : `export PATH=$HOME/.nvm/versions/node/v22.22.2/bin:$PATH && npm run build && npx astro preview`, captures dans `.context/screenshots/<sprint>/`.
10. Un article = un fichier .md + des lignes dans `photos-a-generer.md` : ne touche ni au layout ni au schéma sans le dire dans la PR (les autres articles en dépendent).
11. Image de partage : `public/images/og-blog-<slug>.jpg` en 1200 × 630 (recadrage du hero, haut du visage gardé). Sans ce fichier, le partage social n'a pas d'image.
