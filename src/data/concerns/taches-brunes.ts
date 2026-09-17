import type { Concern } from './types';

export const tachesBrunes: Concern = {
  slug: 'taches-brunes',
  chip: 'Hyperpigmentation',
  seo: {
    title: "Taches brunes, mélasma, taches de soleil : le traitement qui agit | Mixt",
    description:
      "Mélasma, masque de grossesse, taches de soleil : la cosmétique plafonne. Un médecin prescrit les actifs dépigmentants qui agissent vraiment et vous suit dans la durée. Consultation 49 €.",
    noindex: true,
  },
  heroProof: { label: 'Avis vérifiés sur Trustpilot' },
  faqPosition: 'early',
  objectionsTitle: 'Ce que vous vous demandez',
  hero: {
    kicker: 'Taches & mélasma',
    title: 'Vos taches résistent',
    highlight: 'pour une raison.',
    lead: "La cosmétique n'a pas le droit d'utiliser les actifs qui agissent vraiment. Un médecin, si : dépigmentants prescrits, dosés pour votre phototype. Consultation sous 7 jours.",
    image: '/images/agence-melasma-profil.webp',
    imageAlt: 'Femme avec des taches brunes sur la joue',
    imagePosition: 'center 25%',
  },
  problem: {
    title: "L'hyperpigmentation n'est pas",
    highlight: "qu'un problème de soleil.",
    paras: [
      "Une tache installée, c'est de la mélanine fabriquée en profondeur, entretenue par les hormones autant que par la lumière. Une crème du commerce éclaircit la surface : elle ne franchit jamais le seuil d'efficacité.",
      "Pire, s'acharner avec les mauvais produits aggrave la tache. Un peeling trop fort ou un actif mal dosé enflamme la zone et la fonce.",
      "La dermatologie agit là où ça se joue : la fabrication du pigment. Les bons actifs, aux bons dosages, ajustés au fil des mois.",
    ],
    image: null,
    imageBrief: 'Macro taches sur la pommette',
    imageDesc: "Gros plan sur des taches de mélasma bien dessinées sur la pommette. Lumière du jour, fond neutre chaud, peau réelle.",
  },
  midCta: {
    kicker: 'Reprendre la main',
    title: 'Un teint uniforme.',
    highlight: 'Traité, pas camouflé.',
    image: '/images/header-dark-spot.webp',
    imageAlt: 'Femme avec des taches pigmentaires sur le visage',
  },
  contrast: {
    kicker: 'Cosmétique ou prescription',
    left: {
      value: 'Cosmétique',
      label: "vitamine C sous-dosée, sérums éclaircissants en vente libre.",
      items: [
        "concentrations plafonnées par la réglementation",
        "agit à peine sur la surface",
        "aucun diagnostic, aucun suivi",
      ],
    },
    right: {
      value: 'Prescription',
      label: "hydroquinone, trétinoïne, acide tranexamique, dosés pour vous.",
      items: [
        "agit sur la fabrication même du pigment",
        "adapté à votre phototype, préparé en pharmacie",
        "ajusté mois après mois par le médecin",
      ],
    },
    note: "Ces actifs ne sont pas disponibles en cosmétique : ils sont prescrits et préparés en pharmacie sur ordonnance médicale.",
  },
  mechanism: {
    lede: "Des actifs qui agissent sur la fabrication du pigment, pas sur la surface.",
    body: "La mélanine se fabrique en profondeur, remonte, puis s'évacue. Le médecin agit sur les trois temps : freiner, ralentir, évacuer. Des dosages adaptés à votre phototype, préparés en pharmacie et ajustés chaque mois.",
    actifs: [
      { name: 'Protection solaire', bold: 'Bloque les UV et la lumière visible', rest: "le socle du traitement : un seul jour sans protection peut effacer des semaines de progrès." },
      { name: 'Acide tranexamique', bold: 'Cible la composante hormonale', rest: 'en amont de la fabrication du pigment.' },
      { name: 'Hydroquinone', bold: 'Freine puissamment la mélanine', rest: 'sur prescription, en cures encadrées par le médecin.' },
      { name: 'Acide azélaïque', bold: 'Agit sur la production de mélanine', rest: "et l'inflammation, bien toléré sur les phototypes foncés." },
      { name: 'Acide rétinoïque', bold: 'Accélère le renouvellement', rest: 'cellulaire pour évacuer le pigment déjà installé.' },
    ],
    footer:
      "Le médecin choisit les actifs et dosages adaptés à votre phototype et à votre cas, selon son évaluation clinique. La protection solaire, elle, n'est jamais optionnelle.",
    image: '/images/agence-taches-visage.webp',
    imageAlt: 'Femme avec des taches pigmentaires sur le visage',
    imageBadge: '',
  },
  treatment: {
    kicker: 'Votre traitement',
    title: 'Une formule préparée',
    highlight: "pour vos taches, et pour votre peau.",
    lead: "Si le médecin la prescrit, votre formule est préparée en pharmacie à partir de son ordonnance : les dépigmentants qu'il a choisis, aux dosages adaptés à votre phototype.",
    benefits: [
      { label: 'Sur-mesure', body: "Pas la même formule pour tout le monde : les actifs et leurs concentrations sont décidés pour votre peau, à partir de votre dossier et de vos photos." },
      { label: 'Une seule application', body: "Les actifs sont combinés dans une formule unique, à appliquer le soir. Pas une routine à sept étapes qu'on abandonne au bout d'un mois." },
      { label: 'Ajustée dans le temps', body: "Le dosage évolue avec votre peau. On monte en puissance quand elle est prête, on lève le pied quand elle réagit." },
    ],
    footnote: "Préparation en pharmacie de 30 à 60 € selon la formule, avec remboursement partiel possible. Toute prescription relève de la seule appréciation du médecin : selon votre cas, il peut aussi recommander un traitement classique ou une approche cosmétique.",
    image: null,
    imageBrief: 'Flacon de préparation magistrale',
    imageDesc: "Le flacon Mixt sur un plan clair, lumière naturelle rasante, étiquette lisible. Sobre et premium, jamais packshot sur fond blanc.",
    label: {
      formula: 'Pigment Contrôle Boost',
      lines: [
        { name: 'Acide azélaïque', pct: '20 %' },
        { name: 'Acide tranexamique', pct: '5 %' },
        { name: 'Vitamine PP', pct: '4 %' },
        { name: 'Centella asiatica', pct: '5 %' },
        { name: 'Acide kojique', pct: '1 %' },
      ],
      base: 'Hydrocrème',
      note: "Exemple d'une formule réellement prescrite et préparée en pharmacie. La vôtre dépendra de votre peau et de l'évaluation du médecin.",
    },
  },
  expectations: {
    title: 'À quoi vous pouvez',
    highlight: 'vous attendre.',
    intro: "Les taches se traitent lentement. Voici le rythme réel, pour avancer sans se décourager.",
    steps: [
      { when: 'Semaines 1 à 4', body: "La phase invisible. Le traitement agit en profondeur, rien ne se voit encore. C'est le moment où la régularité compte le plus." },
      { when: 'Semaine 8', body: "Les premiers signes. La tache commence à s'estomper, à condition que la protection solaire soit tenue chaque jour." },
      { when: 'Semaine 12', body: "Une amélioration nette chez les peaux qui répondent. Le médecin ajuste les actifs et les dosages selon vos résultats." },
      { when: 'Au-delà', body: "L'entretien. Certaines taches, comme le mélasma, reviennent si l'on baisse la garde : on passe en mode entretien pour tenir les résultats." },
    ],
    footnote: "Résultats individuels, non garantis. La protection solaire conditionne tout le traitement.",
    curve: {
      pace: 'slow',
      sideEffectLabel: "Phase d'adaptation : picotements et légère desquamation",
      improveLabel: "Taches estompées",
      milestones: [{ week: 8, label: 'Premiers signes' }, { week: 12, label: 'Teint plus uniforme' }],
    },
  },
  proof: {
    name: 'Laetitia, 41 ans',
    meta: 'Co-fondatrice de Mixt · Hyperpigmentation · 4 mois',
    before: { src: '/images/laetitia-before.webp', alt: 'Laetitia avant le protocole', objectPosition: 'center 15%' },
    after: { src: '/images/laetitia-after.webp', alt: 'Laetitia après 4 mois', objectPosition: 'center 15%' },
    afterLabel: 'Après · 4 mois',
    quote: "Pendant 10 ans j'ai cherché une solution pour ma peau. Aujourd'hui quand je vois les photos d'avant, je n'en reviens pas.",
    context: "Laetitia est co-fondatrice de Mixt. Elle a cherché une solution pour sa peau pendant dix ans avant de créer l'entreprise, et a suivi exactement le parcours proposé ici : bilan, consultation, formule magistrale prescrite. Hyperpigmentation diagnostiquée par sa dermatologue, parcours de 4 mois.",
    legal: "Photos authentiques, patiente consentante. Résultats individuels, non représentatifs d'une garantie.",
  },
  review: {
    quote: "J'ai l'impression d'avoir appris plus sur ma peau en quelques mois qu'en des années à tester des produits toute seule.",
    name: 'Marie G.',
    tag: 'Masque de grossesse',
  },
  faq: [
    {
      q: "Mes taches sont-elles du mélasma ou des taches de soleil ?",
      a: "C'est tout l'intérêt de la consultation. À partir de votre dossier et de vos photos, le médecin distingue un mélasma (hormonal, symétrique), un lentigo solaire ou une marque post-inflammatoire, et adapte le traitement en conséquence.",
    },
    {
      q: "Les crèmes dépigmentantes du commerce suffisent-elles ?",
      a: "Rarement sur une vraie tache installée. Les concentrations en vente libre sont faibles, et un actif mal choisi peut empirer la tache. Les actifs efficaces sont prescrits et préparés en pharmacie, à des dosages adaptés à votre peau.",
    },
    {
      q: "J'ai un masque de grossesse, que faire ?",
      a: "Le mélasma de grossesse est très fréquent. Certains actifs ne s'utilisent pas pendant la grossesse ou l'allaitement : le médecin en tient compte et adapte le plan à votre situation, en commençant par une protection solaire rigoureuse.",
    },
  ],
  related: [
    { href: '/melasma/', label: 'Mélasma', teaser: 'Le masque hormonal, symétrique sur les joues et le front.' },
    { href: '/anti-age/', label: 'Anti-âge', teaser: 'Les actifs prescrits qui font vraiment la différence.' },
  ],
};
