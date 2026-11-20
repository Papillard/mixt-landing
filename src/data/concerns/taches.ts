import type { Concern } from './types';

// Page unique « Taches » : fusionne les anciennes pages mélasma et hyperpigmentation
// (301 dans public/_redirects). Persona Sophie : taches hormonales, masque de grossesse.
export const taches: Concern = {
  slug: 'taches',
  chip: 'Taches',
  seo: {
    title: 'Taches brunes et masque de grossesse : un avis médical | Mixt',
    description:
      "Taches brunes, masque de grossesse, taches qui reviennent malgré les sérums : un médecin partenaire cherche leur origine et personnalise votre traitement, avec un suivi dans la durée.",
  },
  hero: {
    kicker: 'Taches · Mélasma · Masque de grossesse',
    title: 'Vos taches ne partent plus ?',
    highlight: "Un médecin cherche d'abord leur cause",
    lead: "Masque de grossesse, taches apparues avec la pilule ou la ménopause, marques qui s'installent : faites le point avec un médecin partenaire pour comprendre d'où viennent vos taches et construire un traitement adapté à votre peau.",
    image: '/images/real/gros-plan-melasma-joue-01.webp',
    imageAlt: 'Gros plan de taches brunes sur la joue',
    imagePosition: 'center',
  },
  band: {
    image: '/images/real/texture-ambre-bulles-01.webp',
    slogan: 'Identifier. Puis traiter',
    imagePosition: 'center 45%',
  },
  interstitial: {
    color: '#321E2D',
    eyebrow: 'Le protocole part du diagnostic',
    slogan: 'Avant les actifs, comprendre la tache',
    image: '/images/real/gros-plan-taches-phototype-mat-01.webp',
    imageAlt: 'Gros plan de taches brunes sur une peau mate',
    imagePosition: 'center',
  },
  voices: {
    title: 'Des taches qui reviennent malgré les sérums',
    quotes: ["Des taches apparues avec une grossesse ou la pilule, qui ne partent plus", "Des sérums qui éclaircissent un peu, puis tout revient", "Des conseils génériques, la même crème pour tout le monde"],
    outro: "Un médecin partenaire cherche l'origine de vos taches et personnalise le traitement selon votre peau et votre phototype.",
    image: '/images/real/gros-plan-taches-joue-01.webp',
    imageAlt: 'Gros plan de taches pigmentaires sur la joue',
    imagePosition: 'center',
  },
  formulaImage: '/images/real/produit-creme-doigt-fond-beige-01.webp',
  problem: {
    title: 'Pourquoi les taches',
    highlight: 'reviennent.',
    paras: [
      "Une tache de grossesse, une tache solaire et une marque laissée par un bouton ne se traitent pas de la même façon. Sans savoir d'où vient la tache, on enchaîne les sérums sans résultat durable.",
    ],
  },
  mechanism: {
    lede: "Une tache brune, c'est de la mélanine qui s'accumule dans la peau.",
    body: "Fabriquée en profondeur, elle remonte à la surface puis s'évacue. Quand ce cycle se dérègle sous l'effet du soleil, des hormones ou d'une inflammation, la tache s'installe. La dermatologie agit sur ces trois temps : freiner, ralentir, évacuer.",
    actifs: [
      { name: 'Protection solaire', bold: 'Le socle du traitement', rest: 'un filtre teinté arrête aussi la lumière visible, qui réactive les taches.' },
      { name: 'Acide tranexamique', bold: 'Cible la composante hormonale', rest: 'en amont de la fabrication du pigment.' },
      { name: 'Acide azélaïque', bold: 'Agit sur la production de mélanine', rest: "et l'inflammation, bien toléré sur les peaux foncées." },
      { name: 'Acide kojique', bold: 'Freine la fabrication de mélanine.' },
      { name: 'Niacinamide', bold: 'Limite le transfert du pigment', rest: 'vers la surface et apaise la peau.' },
      { name: 'Acide rétinoïque', bold: 'Accélère le renouvellement', rest: 'cellulaire pour évacuer le pigment installé.' },
    ],
    footer:
      "Votre médecin personnalise actifs et dosages selon votre phototype et votre situation, selon son évaluation clinique. Certains actifs ne s'utilisent pas pendant la grossesse ou l'allaitement.",
  },
  proof: {
    name: 'Laetitia, 41 ans',
    meta: 'Taches brunes · 4 mois',
    before: { src: '/images/laetitia-before.webp', alt: 'Laetitia avant le protocole', objectPosition: 'center 15%' },
    after: { src: '/images/laetitia-after.webp', alt: 'Laetitia après 4 mois', objectPosition: 'center 15%' },
    afterLabel: 'Après · 4 mois',
    quote: "Pendant 10 ans j'ai cherché une solution pour ma peau. Aujourd'hui quand je vois les photos d'avant, je n'en reviens pas.",
    context: "Taches diagnostiquées par sa dermatologue. Parcours de 4 mois avec un médecin partenaire et l'équipe Mixt, formule magistrale prescrite.",
    legal: 'Photos authentiques, patiente consentante. Résultats individuels, variables selon les personnes.',
  },
  faq: [
    {
      q: "Comment savoir d'où vient ma tache ?",
      a: "C'est l'objet de la consultation. À partir de votre dossier et de vos photos, le médecin distingue un masque de grossesse, une tache solaire ou une marque laissée par un bouton, et adapte le traitement. Si une tache est nouvelle ou change d'aspect, il peut vous orienter vers un examen en cabinet.",
    },
    {
      q: "J'ai un masque de grossesse, que faire ?",
      a: "C'est très fréquent. Signalez toute grossesse, tout projet de grossesse ou allaitement : certains actifs sont contre-indiqués. Le médecin adapte le plan à votre situation, en commençant par une protection solaire rigoureuse.",
    },
    {
      q: 'Mes taches vont-elles disparaître définitivement ?',
      a: "On ne peut pas le promettre. Le masque de grossesse a tendance à revenir si la protection solaire et l'entretien s'arrêtent. C'est pour ça que le suivi dans la durée compte autant que le traitement de départ.",
    },
    {
      q: "Les marques laissées par l'acné, ça se traite ?",
      a: "Oui, ce sont des taches liées à l'inflammation. Le médecin les prend en charge avec un protocole adapté, en parallèle d'un traitement de l'acné si elle est encore active.",
    },
    {
      q: 'Le laser, une bonne idée ?',
      a: "Rarement en première intention. Sur un masque de grossesse, le laser peut déclencher une inflammation qui aggrave la tache, surtout sur les peaux foncées. Le médecin privilégie d'abord un traitement local et la protection solaire.",
    },
    {
      q: 'Les crèmes du commerce suffisent-elles ?',
      a: "Rarement sur des taches installées. Les concentrations en vente libre sont faibles, et un actif mal choisi peut aggraver la tache. Si une préparation est indiquée, votre médecin peut la prescrire, à des dosages adaptés à votre peau.",
    },
  ],
  related: [
    { href: '/acne/', label: 'Acné', teaser: 'Boutons qui reviennent à l’âge adulte.' },
    { href: '/rosacee/', label: 'Rosacée', teaser: 'Rougeurs diffuses, sensations de chaleur et boutons.' },
  ],
};
