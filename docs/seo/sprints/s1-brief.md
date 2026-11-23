# Sprint 1 : brief

## Lot A : fondations du blog
Collection `src/content/blog`, `BlogLayout` (hero 2 colonnes, sommaire auto, « Quand consulter », FAQ accordéon, maillage, CTA final), `/blog/[slug]`, `/blog/`, `PhotoPlaceholder`, JSON-LD Article + FAQPage + BreadcrumbList, sitemap (auto), lien « Blog » dans le footer. Mode d'emploi : `blog-howto.md`.

## Lot B : article pilote #3, « Laser couperose »
- **URL** : `/blog/laser-couperose/`. **Pilier** : `/rosacee/`.
- **Requête cible (title + H1)** : laser couperose (1,0K, KD 0).
- **Variantes** (source : `docs/seo/data-ahrefs.md`, Matching terms couperose) : laser couperose apres seance 600, laser couperose avant après 500 (CPC 0,80 $), couperose laser 450, laser couperose raté 350 (CPC 1,60 $), traitement couperose laser prix 200, traitement laser couperose remboursé mutuelle 200, laser vasculaire couperose 150. Question : résultat laser couperose combien de temps (100). Total ~3,65K/mois.
- **SERP couperose** : sfldlaser.com (fiche patient, DR 52, 1 184 mots) est 9e : contenu de référence sur le laser, court. On vise plus complet et plus honnête sur les limites.
- **Angle** : informer sans vendre le laser. Le laser vasculaire atténue les vaisseaux visibles, il ne traite ni l'inflammation ni les poussées. Mixt ne fait pas de laser : quand le laser ne suffit pas ou rate, traitement de fond avec un médecin.
- **Title** : « Laser couperose : résultats, après la séance, prix, limites » (≈60 car.)
- **H1** : « Laser couperose : résultats, prix, après la séance, et quand il ne suffit pas »

### H2
1. Ce que fait le laser sur la couperose (laser vasculaire, KTP, colorant pulsé, lumière pulsée)
2. Couperose ou rosacée : ce que le laser ne traite pas
3. Comment se passe une séance
4. Après la séance de laser : ce qui est normal (requête « après séance »)
5. Combien de séances, combien de temps durent les résultats
6. Avant/après : à quoi s'attendre vraiment (requête « avant après »)
7. Laser couperose raté : les raisons les plus fréquentes (requête « raté »)
8. Prix et remboursement (requêtes « prix », « mutuelle »)
9. Quand le laser ne suffit pas : le traitement de fond

### FAQ (5)
Disparition définitive ? / Combien de temps durent les rougeurs après une séance ? / Remboursé par la mutuelle ? / Laser en été ? / Mixt fait-il du laser ?

### Liens internes
`/rosacee/` (pilier, contexte + CTA), futurs articles : `/blog/creme-rosacee-ordonnance/`, `/blog/rosacee-disparaitre/` (slugs à confirmer par S3 ; liens retirés si absents au merge).

### Sources médicales (citées dans l'article)
- SFLD, fiche patient « Couperose ou rosacée » (maj 23/05/2023) : https://www.sfldlaser.com/info-patient-fiche/147/Couperose-ou-rosacee : KTP 532 nm, colorant pulsé, lampes flash ; 1 à 5 séances espacées de 2 à 3 mois ; rougeur et œdème 2 à 3 jours, croûtes 4 à 7 jours, purpura 10 à 15 jours ; hyperpigmentation rare et réversible, surtout peaux mates et foncées ; pas sur peau bronzée, plutôt hors été ; pas définitif, entretien possible ; pas de remboursement Sécurité sociale, prix selon surface et appareil.
- Ameli, « Traitement de la couperose et de la rosacée » (21/03/2025) : https://www.ameli.fr/assure/sante/themes/rosacee-couperose/traitement-rosacee-couperose : laser = visée esthétique, non pris en charge ; peau claire non bronzée, de préférence l'hiver ; doxycycline réduit papules et pustules mais pas les rougeurs ni les télangiectasies ; pas de guérison définitive.

### Photos
`PH-laser-couperose-hero` (hero), `PH-laser-couperose-apres-seance` (corps). Pas d'avant/après : Mixt ne fait pas de laser, aucun avant/après réel disponible.
