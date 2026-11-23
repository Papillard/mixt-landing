# Sprints SEO : plan et méthode

## Méthode (chaque lot)
1. Brief précis du lot dans `docs/seo/sprints/sprint-N-brief.md` : requête cible, sections H2, FAQ, liens internes, sources (docs/seo/data-ahrefs.md).
2. Contenu tiré de l'étude SEO, mis en page avec une narrative claire.
3. Photos manquantes : placeholder gris nommé (`PH-<page>-<usage>`), listé dans le brief. Photos générées à la chaîne au sprint final.
4. Réutiliser les visuels produit existants (`public/images/real/produit-*`) quand c'est possible.
5. Articles de blog : hero simple 2 colonnes (titre + intro à gauche, visuel à droite), corps une colonne. Pas de layout complexe.
6. copy-conforme + anti-ia-copy, relecture médecin des contenus médicaux, captures de tous les états, PR, merge.

## Les 10 pages à créer, par priorité
| # | Type | Page | Cible | Volume/mois |
|---|---|---|---|---|
| 1 | Landing | Consultation dermatologique en ligne | dermatologue en ligne, dermatologue rdv en ligne | ~3,5K (+ Google Ads) |
| 2 | Landing | Taches brunes et hyperpigmentation | hyperpigmentation, tache marron/brune sur la peau, lentigo | ~20K |
| 3 | Blog | Laser couperose : résultats, prix, après la séance, quand il ne suffit pas | laser couperose et variantes | ~3,65K |
| 4 | Blog | Rosacée oculaire : symptômes, photos, que faire | rosacée oculaire | ~2,2K |
| 5 | Blog | Crème rosacée et couperose : avec ou sans ordonnance | crème rosacée/couperose sans/avec ordonnance | ~2,1K |
| 6 | Blog | Rosacée papulo-pustuleuse : la reconnaître, la traiter | rosacée papulo-pustuleuse | ~2K |
| 7 | Blog | Une rosacée peut-elle disparaître ? | ma rosacée a disparu, la rosacée se guérit-elle | ~1,9K |
| 8 | Blog | Rosacée : causes, alimentation, intestin | rosacée cause, banane, intestin | ~1,9K |
| 9 | Blog | Acné hormonale : zinc, compléments, et quand ça ne suffit plus | zinc acné hormonale, compléments, nettoyant | ~1,6K |
| 10 | Blog | Taches et masque de grossesse sur peau noire ou mate | hyperpigmentation peau noire, mélasma peau noire | ~1,4K |

Plus tard : marques après les boutons (~800), masque de grossesse et soleil (~550), guides traitements (DCI uniquement : copy-conforme interdit tout nom de marque de médicament).

## Sprints
| Sprint | Contenu | Parallélisable |
|---|---|---|
| S0 | Retouches SEO des 3 landing pages (title, H1, FAQ) | fait |
| S1 | Fondations blog (layout article hero 2 colonnes, collection, placeholder photo, /blog, sitemap, JSON-LD Article + FAQ) + article pilote #3 | non, bloque S3 et S4 |
| S2 | Landings #1 et #2 | oui, en parallèle de S1 |
| S3 | Articles rosacée #4 à #8 | oui, 2 à 3 workspaces |
| S4 | Articles #9 et #10 + maillage (liens des landings vers les articles) | oui |
| S5 | Photos à la chaîne (tous les placeholders) + relecture médecin + ship | non |
