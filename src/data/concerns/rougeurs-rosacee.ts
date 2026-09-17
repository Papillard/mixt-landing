import type { Concern } from './types';

export const rougeursRosacee: Concern = {
  slug: 'rougeurs',
  chip: 'Rosacée',
  seo: {
    title: "Rougeurs et rosacée : ce n'est pas qu'une peau sensible | Mixt",
    description:
      "Rougeurs qui reviennent, chaleurs, boutons : la rosacée n'est pas une simple sensibilité. Un médecin cible ses mécanismes avec des actifs prescrits et vous suit dans la durée. Consultation 49 €.",
    noindex: true,
  },
  heroProof: { label: 'Avis vérifiés sur Trustpilot' },
  faqPosition: 'early',
  objectionsTitle: 'Ce que vous vous demandez',
  hero: {
    kicker: 'Rougeurs & rosacée',
    title: 'Vos rougeurs',
    highlight: 'ont une cause.',
    lead: "Un médecin identifie ce qui déclenche vos rougeurs et prescrit les traitements qui les calment sur le fond. Consultation sous 7 jours.",
    image: '/images/agence-rosacee-profil.webp',
    imageAlt: 'Femme avec des rougeurs de rosacée sur la joue',
    imagePosition: 'center 25%',
  },
  problem: {
    title: "Apaiser",
    highlight: "ne suffit pas.",
    paras: [
      "La rosacée se confond avec une simple sensibilité ou une poussée d'acné. Du coup on l'attaque avec les mauvais produits : gommages, actifs irritants, routines trop riches, qui enflamment la peau davantage.",
      "Derrière les rougeurs, plusieurs mécanismes se combinent : des vaisseaux hyperréactifs, une inflammation chronique, parfois des micro-organismes. Une crème apaisante ne peut pas tout couvrir.",
      "La rosacée ne se guérit pas en une cure, elle se contrôle. Avec les bons traitements et un suivi qui ajuste au fil des poussées.",
    ],
    image: null,
    imageBrief: 'Macro rougeurs sur les joues',
    imageDesc: "Gros plan sur des rougeurs de rosacée diffuses avec vaisseaux visibles. Lumière du jour, fond neutre, peau réelle sans filtre.",
  },
  midCta: {
    kicker: 'Retrouvez votre peau',
    title: 'Oser le visage nu.',
    highlight: 'Sans fond de teint.',
    image: '/images/header-flush.webp',
    imageAlt: 'Femme avec des rougeurs sur les joues',
  },
  contrast: {
    kicker: 'Peau sensible ou rosacée',
    left: {
      value: 'Peau sensible',
      label: "crèmes apaisantes, eau thermale, routines douces.",
      items: [
        "atténuent la rougeur un instant",
        "n'agissent ni sur l'inflammation ni sur les vaisseaux",
        "la poussée revient",
      ],
    },
    right: {
      value: 'Rosacée',
      label: "métronidazole, ivermectine, acide azélaïque, sur prescription.",
      items: [
        "ciblent l'inflammation et les micro-organismes",
        "calment les rougeurs sur le fond",
        "ajustés poussée après poussée par le médecin",
      ],
    },
    note: "Ces actifs sont prescrits et préparés en pharmacie sur ordonnance médicale. Ils ne sont pas disponibles en cosmétique.",
  },
  mechanism: {
    lede: "Des traitements qui calment la rougeur sur le fond, pas en surface.",
    body: "Vaisseaux hyperréactifs, inflammation chronique, parfois des micro-organismes : le médecin cible chaque mécanisme avec des actifs prescrits, préparés en pharmacie et ajustés poussée après poussée.",
    actifs: [
      { name: 'Métronidazole', bold: "Réduit l'inflammation", rest: 'et les boutons. Référence de première intention.' },
      { name: 'Acide azélaïque', bold: 'Anti-inflammatoire', rest: 'parmi les plus efficaces sur les lésions.' },
      { name: 'Ivermectine', bold: "Cible l'inflammation", rest: 'et les micro-organismes de la peau.' },
      { name: 'Niacinamide', bold: 'Renforce la barrière', rest: 'et apaise les rougeurs.' },
    ],
    footer:
      'Le médecin choisit les actifs et dosages adaptés à votre cas, selon son évaluation clinique.',
    image: '/images/agence-rosacee-miroir.webp',
    imageAlt: 'Femme observant ses rougeurs dans le miroir',
    imageBadge: '',
  },
  proof: {
    name: 'Marie, 45 ans',
    meta: 'Rosacée · 3 mois',
    before: { src: '/images/melanie-before.webp', alt: 'Marie avant le protocole', objectPosition: 'center' },
    after: { src: '/images/melanie-after.webp', alt: 'Marie après 3 mois', objectPosition: 'center' },
    afterLabel: 'Après · 3 mois',
    quote: "Je ne sortais plus sans fond de teint. Maintenant j'ose le visage nu.",
    context: "Rosacée diagnostiquée par sa dermatologue. Parcours de 3 mois avec l'équipe et formule magistrale prescrite.",
    legal: "Photos authentiques, patiente consentante. Résultats individuels, non représentatifs d'une garantie.",
  },
  review: {
    quote: "J'ai enfin l'impression d'être suivie par des gens qui regardent vraiment, réagissent vite et savent exactement quoi faire.",
    name: 'Amandine B.',
    tag: 'Rosacée',
  },
  treatment: {
    kicker: 'Votre traitement',
    title: 'Une formule préparée',
    highlight: "pour une peau qui réagit.",
    lead: "Si le médecin la prescrit, votre formule est préparée en pharmacie : des actifs anti-inflammatoires dosés pour une peau réactive, sans les excipients qui l'irritent.",
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
    highlight: "d'une peau qu'on calme.",
    intro: "La rosacée ne se règle pas en une cure : elle se contrôle. Voici ce qui se passe vraiment, poussée après poussée.",
    steps: [
      { when: 'Semaines 1 à 4', body: "On calme le terrain et on identifie vos facteurs déclenchants. La peau reste réactive, c'est attendu." },
      { when: 'Semaine 8', body: "Les boutons inflammatoires diminuent, les épisodes de chaleur s'espacent. Le fond rouge bouge plus lentement." },
      { when: 'Semaine 12', body: "Des rougeurs nettement moins marquées chez celles qui répondent, et des poussées plus rares." },
      { when: 'Au-delà', body: "On entretient. C'est la régularité, et l'évitement de vos déclencheurs, qui tiennent les résultats." },
    ],
    footnote: "Résultats individuels, non garantis. La rosacée est chronique : le traitement la contrôle, il ne la supprime pas.",
  },
  faq: [
    {
      q: 'Rosacée ou simple sensibilité, comment faire la différence ?',
      a: "C'est l'un des rôles de la consultation. À partir de votre dossier et de vos photos, le médecin distingue une rosacée d'une peau réactive ou d'une autre condition, et propose le traitement adapté.",
    },
    {
      q: 'La rosacée se guérit-elle ?',
      a: "La rosacée est une condition chronique : elle ne disparaît pas définitivement, mais elle se contrôle très bien. Avec le bon traitement et un suivi régulier, les rougeurs et les poussées s'espacent nettement.",
    },
    {
      q: 'Mes rougeurs reviennent dès que je change de produit, est-ce normal ?',
      a: "Oui, la peau rosacée est très réactive. Une partie du travail consiste à identifier vos facteurs déclenchants et à construire une routine simple et tolérée, que le médecin ajuste dans le temps.",
    },
  ],
  related: [
    { href: '/mon-acne/', label: 'Acné qui persiste', teaser: 'Boutons et inflammation qui reviennent.' },
    { href: '/taches-brunes/', label: 'Taches brunes', teaser: 'Mélasma, taches de soleil et pigmentation.' },
  ],
};
