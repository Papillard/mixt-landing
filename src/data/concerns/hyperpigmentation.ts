import type { Concern } from './types';

export const hyperpigmentation: Concern = {
  slug: 'hyperpigmentation',
  chip: 'Hyperpigmentation',
  seo: {
    title: 'Traitement des taches brunes et de l\'hyperpigmentation | Mixt',
    description:
      "Taches solaires, marques d'acné, hyperpigmentation : un médecin expert de votre peau, supervisé par un dermatologue, construit un plan de soin sur-mesure et vous suit dans la durée.",
  },
  hero: {
    kicker: "Taches brunes · Marques d’acné",
    title: "Taches brunes : le bon traitement",
    highlight: "commence par un diagnostic",
    lead: "Marques après l'acné, taches de soleil, pigmentation qui s'installe : faites le point avec un médecin pour comprendre l'origine de vos taches et les options adaptées à votre peau.",
    image: "/images/real/gros-plan-taches-rousseur-nez-01.webp",
    imageAlt: "Gros plan de taches brunes près du nez",
    imagePosition: "center",
  },
  band: {
    image: "/images/real/texture-brun-nature-morte-bois-01.webp",
    slogan: "Chaque tache a sa cause",
    imagePosition: "center 45%",
  },
  interstitial: {
    color: "#321E2D",
    eyebrow: "Le protocole part du diagnostic",
    slogan: "Avant les actifs, identifier la pigmentation",
    image: "/images/real/gros-plan-melasma-joue-01.webp",
    imageAlt: "Gros plan de taches pigmentaires sur la joue",
    imagePosition: "center",
  },
  problem: {
    title: 'Pourquoi les taches',
    highlight: 'reviennent toujours.',
    paras: [
      "On accumule les sérums vitamine C et les crèmes éclaircissantes vues sur Instagram, et la tache reste là. Le problème n'est pas la motivation : c'est qu'on traite sans savoir d'où vient la tache.",
      "Une tache solaire, une marque d'acné et une hyperpigmentation post-inflammatoire ne répondent pas aux mêmes actifs. Et sur un phototype foncé, un actif mal dosé peut créer une nouvelle tache là où il devait l'effacer.",
      "Sans diagnostic ni accompagnement, on tourne en rond. La bonne approche, c'est identifier la cause, choisir les actifs adaptés à votre peau, et ajuster dans le temps. Une peau suivie, pas juste traitée.",
    ],
  },
  mechanism: {
    lede: "Une tache brune, c'est de la mélanine qui s'accumule dans la peau.",
    body: "Fabriquée en profondeur, elle remonte à la surface puis s'évacue. Quand le cycle se dérègle sous l'effet des UV, des hormones ou de l'inflammation, elle s'installe. La dermatologie agit sur ces trois temps : freiner, ralentir, évacuer.",
    actifs: [
      { name: 'Acide azélaïque', bold: 'Agit sur la production de mélanine', rest: "et l'inflammation." },
      { name: 'Acide kojique', bold: 'Freine la production de mélanine.' },
      { name: 'Acide tranexamique', bold: 'Agit sur le transfert', rest: 'de la mélanine vers la surface.' },
      { name: 'Niacinamide', bold: 'Limite le transfert', rest: 'et apaise la peau.' },
      { name: 'Acide rétinoïque', bold: 'Accélère le renouvellement', rest: 'cellulaire pour évacuer le pigment.' },
    ],
    footer:
      'Votre médecin personnalise actifs et dosages selon votre phototype et à votre cas, selon son évaluation clinique.',
  },
  proof: {
    name: 'Laetitia, 41 ans',
    meta: 'Hyperpigmentation · 4 mois',
    before: { src: '/images/laetitia-before.webp', alt: 'Laetitia avant le protocole', objectPosition: 'center 15%' },
    after: { src: '/images/laetitia-after.webp', alt: 'Laetitia après 4 mois', objectPosition: 'center 15%' },
    afterLabel: 'Après · 4 mois',
    quote: "Pendant 10 ans j'ai cherché une solution pour ma peau. Aujourd'hui quand je vois les photos d'avant, je n'en reviens pas.",
    context: "Hyperpigmentation diagnostiquée par sa dermatologue. Parcours de 4 mois avec l'équipe Mixt et formule magistrale prescrite.",
    legal: "Photos authentiques, patiente consentante. Résultats individuels, non représentatifs d'une garantie.",
  },
  faq: [
    {
      q: "Comment savoir d'où vient ma tache ?",
      a: "C'est tout l'intérêt de la consultation. À partir de votre dossier et de vos photos, le médecin distingue une tache solaire, une marque post-acné ou une hyperpigmentation post-inflammatoire, et adapte le traitement en conséquence.",
    },
    {
      q: "Les marques laissées par l'acné, ça se traite ?",
      a: "Oui. Les marques brunes laissées par les boutons sont une hyperpigmentation post-inflammatoire. Elles répondent bien à un protocole adapté, en parallèle d'un traitement de l'acné si elle est encore active.",
    },
    {
      q: 'Faut-il vraiment une protection solaire ?',
      a: "Indispensable. Sans protection solaire quotidienne, les UV réactivent la production de mélanine et toute progression est annulée. C'est le socle de tout traitement de l'hyperpigmentation.",
    },
  ],
  related: [
    { href: '/melasma/', label: 'Mélasma', teaser: 'Le masque hormonal, symétrique sur les joues et le front.' },
    { href: '/acne/', label: 'Acné', teaser: "Boutons, points noirs et marques laissées par l'acné." },
  ],
};
