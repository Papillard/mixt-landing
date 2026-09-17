import type { Concern } from './types';

export const monAcne: Concern = {
  slug: 'mon-acne',
  chip: 'Acné',
  seo: {
    title: "Acné qui persiste : enfin un plan qui marche | Mixt",
    description:
      "Vous avez tout essayé et l'acné revient ? Un vrai médecin cherche la cause avec vous et construit un plan de soin personnalisé, avec un suivi dans la durée. Consultation 49 €.",
    noindex: true,
  },
  heroProof: { label: 'Avis vérifiés sur Trustpilot' },
  faqPosition: 'early',
  objectionsTitle: 'Ce que vous vous demandez',
  hero: {
    kicker: 'Acné qui persiste',
    title: 'Tout essayé.',
    highlight: 'Sauf un médecin.',
    lead: "Un médecin expert de votre peau en visio sous 7 jours. Vous repartez avec un traitement qui cible la cause de votre acné, pas un énième produit à tester.",
    image: '/images/agence-acne-jeune.webp',
    imageAlt: "Jeune femme avec de l'acné",
    imagePosition: 'center 30%',
  },
  problem: {
    title: "Et si la réponse",
    highlight: "n'était pas sur Google ?",
    paras: [
      "Rien ne marche vraiment parce qu'on traite les symptômes, un bouton après l'autre, sans jamais chercher la cause.",
      "L'acné, c'est un follicule qui se bouche puis s'enflamme, avec une part hormonale fréquente. Les bons actifs existent : c'est le dosage et l'association qui font la différence.",
      "Et sans suivi, même le bon traitement échoue. Un rétinoïde irrite au début, c'est normal, mais si personne ne vous le dit, vous arrêtez trop tôt.",
    ],
    image: null,
    imageBrief: 'Macro joue, acné inflammatoire',
    imageDesc: "Gros plan sur une joue de jeune femme avec acné active. Lumière naturelle chaude, fond clair, texture de peau réelle sans retouche.",
  },
  midCta: {
    kicker: 'Reprendre la main',
    title: 'Une peau nette, enfin.',
    highlight: 'Avec un médecin, pas au hasard.',
    image: '/images/header-acne.webp',
    imageAlt: "Jeune femme observant son acné",
  },
  contrast: {
    kicker: 'Le vrai calcul',
    left: {
      value: '+600 €',
      label: "dépensés dans des crèmes achetées à l'aveugle, sans jamais savoir si c'était le bon actif.",
    },
    right: {
      value: '49 €',
      label: "une consultation avec un vrai médecin, et une routine simple et personnalisée.",
    },
    note: "Les 49 € de la consultation reviennent intégralement au médecin. Mixt ne prélève rien dessus.",
  },
  mechanism: {
    lede: "Des actifs prescrits qui agissent là où les crèmes s'arrêtent.",
    body: "L'acné bouche le pore, puis l'enflamme. Le médecin cible chaque maillon avec des actifs dosés pour votre peau : désincruster, réguler le sébum, calmer l'inflammation. Préparés en pharmacie, ajustés chaque mois.",
    actifs: [
      { name: 'Acide salicylique', bold: 'Désincruste le pore', rest: 'et exfolie en douceur.' },
      { name: 'Rétinoïdes', bold: 'Renouvellent la peau', rest: 'et préviennent les comédons.' },
      { name: 'Acide azélaïque', bold: 'Antibactérien', rest: 'et anti-inflammatoire.' },
      { name: 'Zinc', bold: 'Régule le sébum', rest: 'et apaise.' },
      { name: 'Niacinamide', bold: "Calme l'inflammation", rest: 'et resserre le grain de peau.' },
    ],
    footer:
      'Le médecin choisit les actifs et dosages adaptés à votre cas, selon son évaluation clinique.',
    image: '/images/agence-acne-miroir.webp',
    imageAlt: "Jeune femme examinant son acné dans le miroir",
    imageBadge: '',
  },
  proof: {
    name: 'Elodie, 30 ans',
    meta: 'Acné · 1 mois',
    before: { src: '/images/elodie-before.webp', alt: 'Elodie avant le protocole', objectPosition: 'center' },
    after: { src: '/images/elodie-after.webp', alt: 'Elodie après 1 mois', objectPosition: 'center' },
    afterLabel: 'Après · 1 mois',
    quote: "Des années d'acné, j'avais tout essayé, dermato, routines, produits en pharmacie. En quelques semaines ma peau était visiblement plus lisse, mon entourage l'a remarqué.",
    context: "Acné adulte prise en charge par un médecin partenaire, supervisé par un dermatologue. Parcours d'un mois et formule magistrale prescrite sur-mesure.",
    legal: "Photos authentiques, patiente consentante. Résultats individuels, non représentatifs d'une garantie.",
  },
  review: {
    quote: "Les premiers résultats sont arrivés très rapidement, en même pas 1 mois, ma peau était plus uniforme et les rougeurs avaient nettement diminué.",
    name: 'Marie D.',
    tag: 'Acné',
  },
  treatment: {
    kicker: 'Votre traitement',
    title: 'Une formule préparée',
    highlight: "pour votre peau, pas pour une moyenne.",
    lead: "Si le médecin la prescrit, votre formule est préparée en pharmacie à partir de son ordonnance : les actifs qu'il a choisis, aux dosages qu'il a fixés pour votre acné.",
    benefits: [
      { label: 'Sur-mesure', body: "Pas la même formule pour tout le monde : les actifs et leurs concentrations sont décidés pour votre peau, à partir de votre dossier et de vos photos." },
      { label: 'Une seule application', body: "Les actifs sont combinés dans une formule unique, à appliquer le soir. Pas une routine à sept étapes qu'on abandonne au bout d'un mois." },
      { label: 'Ajustée dans le temps', body: "Le dosage évolue avec votre peau. On monte en puissance quand elle est prête, on lève le pied quand elle réagit." },
    ],
    footnote: "Préparation en pharmacie de 30 à 60 € selon la formule, avec remboursement partiel possible. Toute prescription relève de la seule appréciation du médecin : selon votre cas, il peut aussi recommander un traitement classique ou une approche cosmétique.",
    image: null,
    imageBrief: 'Flacon de préparation magistrale',
    imageDesc: "Le flacon Mixt sur un plan clair, lumière naturelle rasante, étiquette lisible. Sobre et premium, jamais packshot sur fond blanc.",
  },
  expectations: {
    title: 'Le rythme réel',
    highlight: "d'un traitement qui marche.",
    intro: "Personne ne vous le dit avant de commencer : les premières semaines, la peau peut se rebeller. C'est normal, c'est transitoire, et c'est là qu'on arrête trop tôt.",
    steps: [
      { when: 'Semaines 1 à 4', body: "La peau s'adapte. Rougeurs, sécheresse, parfois une poussée : c'est la phase d'adaptation au rétinoïde. Le médecin ajuste le dosage pour la traverser." },
      { when: 'Semaine 8', body: "Moins de nouvelles lésions, un grain de peau plus régulier. Les premiers vrais signes arrivent ici, pas avant." },
      { when: 'Semaine 12', body: "Une peau nettement plus calme chez celles qui répondent. Le médecin réévalue et ajuste selon vos résultats." },
      { when: 'Au-delà', body: "On stabilise. L'acné se contrôle dans la durée : on allège quand la peau tient, on renforce si ça repart." },
    ],
    footnote: "Résultats individuels, non garantis. La régularité des premières semaines conditionne tout le reste.",
  },
  faq: [
    {
      q: "J'ai de l'acné à 25 ans, est-ce normal ?",
      a: "Oui, l'acné à l'âge adulte est très fréquente, avec souvent une composante hormonale. Elle se traite très bien, mais le protocole diffère de celui d'une acné d'adolescent.",
    },
    {
      q: "J'ai déjà essayé plein de produits sans résultat, pourquoi ce serait différent ?",
      a: "Parce qu'ici on part de la cause, pas du rayon. Le médecin évalue votre type d'acné, choisit les bons actifs aux bons dosages, et surtout ajuste au fil des semaines. C'est ce suivi qui manque quand on achète à l'aveugle.",
    },
    {
      q: "L'acné laisse des marques, peut-on les traiter aussi ?",
      a: "Oui. Les marques brunes laissées par les boutons sont une hyperpigmentation post-inflammatoire. Le médecin peut traiter l'acné active et ces marques en parallèle, dans un plan cohérent.",
    },
  ],
  related: [
    { href: '/acne-peau-noire/', label: 'Acné sur peau foncée', teaser: "Traiter l'acné sans laisser de taches." },
    { href: '/hyperpigmentation/', label: 'Hyperpigmentation', teaser: "Les marques brunes laissées par l'acné." },
  ],
};
