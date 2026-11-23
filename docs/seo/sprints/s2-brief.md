# Sprint 2 : brief des 2 landings

Sources : `docs/seo/data-ahrefs.md` (Ahrefs France, SERP du 04/11 et du 22/11/2026, Matching terms du 23/11/2026), `docs/seo/synthese-seo.md`, plan des sprints (PR #67). Copy passée par `copy-conforme` puis `anti-ia-copy`.

## Landing #2 : Taches brunes et hyperpigmentation

**URL** : `/hyperpigmentation/` (réutilise `ConcernPage.astro`, données `src/data/concerns/hyperpigmentation.ts`).

**Requêtes cibles (Ahrefs, France)**

| Requête | Volume/mois | KD | Où |
|---|---|---|---|
| hyperpigmentation | 6,9K | 5 | title, H1, condition JSON-LD |
| lentigo | 5,1K | 0 | H2 mécanisme, FAQ dédiée |
| tache marron sur la peau | 3,5K | | description, FAQ |
| tache brune sur la peau | 2,8K | | H1 (« taches brunes »), FAQ |
| tache sur la peau | 2,7K | | FAQ « quand s'inquiéter » |
| taches brunes visage | 2,1K | 0 | lead, title |
| hyperpigmentation de la peau | 1,0K | | corps |
| hyperpigmentation post-inflammatoire | 400 + 250 (+ durée 150) | 0 | FAQ, voix, related /acne |
| hyperpigmentation peau noire | 600 (+ ≈ 550 variantes) | 0 | hero (photo phototype foncé), FAQ |
| enlever taches brunes visage | 500 | 1 | FAQ |
| laser hyperpigmentation / laser taches brunes | 150 / 200 | 0 | FAQ laser |
| hyperpigmentation après peeling | 200 | | FAQ (prudence) |

**SERP** : aucune pub, KD 5, top 10 = marques cosmétiques (La Roche-Posay, Eucerin, Caudalie, Nubiance DR 34 sans lien en 5e) et un seul site médical (MSD Manuals). Angle libre : un médecin qui identifie le type de tache.

**Différence avec /taches/** : /taches/ vise le masque de grossesse et le mélasma (hormonal, PR #67). Ici : taches solaires (lentigo), marques laissées par l'acné ou une irritation (post-inflammatoire), peaux mates à foncées. Liens croisés vers /taches/ et /acne/ dans les deux sens.

**Structure (sections de ConcernPage)**
- H1 : « Taches brunes et hyperpigmentation : un médecin identifie d'abord leur type »
- Voix : « Des taches qui ne partent pas avec les sérums »
- Mécanisme : trois familles (lentigo, post-inflammatoire, mélasma), actifs en DCI, contenu éducatif
- Bloc dossier, objection, interstitiel, preuve (avant/après réel Laetitia), prix
- FAQ concern : c'est quoi l'hyperpigmentation ; lentigo ; post-inflammatoire et durée ; peau noire ou mate ; enlever ses taches brunes ; laser et peeling ; quand s'inquiéter d'une tache ; grossesse et allaitement. Puis FAQ partagée (prix, délai, médecin, données, ordonnance).
- Related : /taches/, /acne/, /consultation-dermatologique-en-ligne/

**Redirection** : retirer `/hyperpigmentation → /taches/` de `public/_redirects` (fusion de 11/2026). La SERP « hyperpigmentation » est distincte de celle du masque de grossesse (marques cosmétiques et MSD d'un côté, Avène et sites grossesse de l'autre) et la grappe pèse ~20K/mois à elle seule (24K en longue traîne). Une page fusionnée ne peut pas viser les deux noms nus en H1.

## Landing #1 : Consultation dermatologique en ligne

**URL** : `/consultation-dermatologique-en-ligne/` (page Astro qui assemble les sections de la home).

**Requêtes cibles (Ahrefs, France)**

| Requête | Volume/mois | KD | Où |
|---|---|---|---|
| dermatologue rdv en ligne | 1,6K | | section honnêteté, FAQ |
| dermatologue en ligne | 1,4K | 1 | H2 « Dermatologue en ligne : ce que Mixt propose » |
| consultation dermatologue en ligne | 400 | | title (« consultation dermatologique en ligne ») |
| téléconsultation dermatologue | 200 | 1 | FAQ, description |

**SERP** : aucune pub. Doctolib (prise de RDV), puis téléconsultations généralistes : Qare, Feeli (DR 26, 3 domaines réf., 5e avec 2 100 mots), Kry, MedecinDirect, Tessan. Aucun acteur spécialisé peau avec plan personnalisé et suivi.

**Garde-fou** : les consultations sont faites par des médecins généralistes partenaires, les protocoles sont conçus avec une dermatologue (board médical). Le H1 dit « consultation dermatologique en ligne », jamais « dermatologue en ligne » comme promesse. Le mot « dermatologue » n'apparaît qu'en H2 et FAQ, pour répondre franchement.

**Structure**
- H1 : « Consultation dermatologique en ligne : un médecin pour votre peau, sous 7 jours »
- H2 « Dermatologue en ligne : ce que Mixt propose » (qui consulte, rôle de la dermatologue, quand aller en cabinet)
- Sections home réutilisées : V3Steps (parcours), V3Dermatologue + EquipeMedicale (équipe), V3Reviews, V3Pricing
- H2 « Pour quels problèmes de peau » : cartes vers /acne/, /rosacee/, /taches/, /hyperpigmentation/
- H2 « Ce qui change avec Mixt » : spécialisé peau, dossier et photos avant la visio, plan personnalisé, suivi inclus, bilan gratuit
- FAQ : délai ; prix et prise en charge ; ordonnance ; photos ; différence avec un dermatologue en cabinet ; quand consulter en cabinet ; quels problèmes ; données
- CTA final

**Liens internes** : /acne/, /rosacee/, /taches/, /hyperpigmentation/, footer.

## Placeholders photo

Voir `docs/seo/photos-a-generer.md` (section Sprint 2).

## Relecture médecin

- /hyperpigmentation/ : mécanisme (3 familles), actifs cités, FAQ lentigo, post-inflammatoire, peau foncée, laser et peeling, « quand s'inquiéter d'une tache ».
- /consultation-dermatologique-en-ligne/ : section « ce que Mixt propose », FAQ « différence avec un dermatologue en cabinet » et « quand consulter en cabinet ».
