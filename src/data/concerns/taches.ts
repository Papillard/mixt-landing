import type { Concern } from './types';

// Page unique « Taches » : fusionne les anciennes pages mélasma et hyperpigmentation
// (301 dans public/_redirects). Persona Sophie : taches hormonales, masque de grossesse.
export const taches: Concern = {
  slug: 'taches',
  chip: 'Taches',
  condition: { name: 'Mélasma', alternateName: ['Masque de grossesse', 'Chloasma', 'Taches brunes'] },
  seo: {
    title: "Masque de grossesse et taches brunes : un médecin en ligne | Mixt",
    description:
      "Masque de grossesse (mélasma), taches brunes sur le visage : un médecin partenaire cherche leur origine et personnalise votre traitement. Bilan gratuit, visio sous 7 jours.",
  },
  hero: {
    kicker: 'Masque de grossesse · Mélasma · Taches brunes',
    title: 'Masque de grossesse et taches brunes :',
    highlight: "un médecin cherche d'abord leur cause",
    lead: "Masque de grossesse, taches apparues avec la pilule ou la ménopause, marques qui s'installent : faites le point avec un médecin partenaire pour comprendre d'où viennent vos taches et construire un traitement adapté à votre peau.",
    leadShort: "Un médecin vous voit en visio, cherche l'origine de vos taches et construit un plan de traitement adapté à votre peau.",
    image: '/images/real/patiente-leonixia-taches-portrait-main-joue-01.webp',
    imageAlt: 'Femme à la peau foncée montrant des taches sur sa joue',
    imagePosition: 'center 66%',
    imagePositionMobile: 'center 42%',
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
    quotes: ["Des sérums éclaircissants : ça s'estompe un peu, puis tout revient", "La même crème que tout le monde, sans regarder votre type de peau", "Des conseils généraux, sans que personne ne cherche la cause"],
    outro: "Un médecin partenaire cherche l'origine de vos taches et personnalise le traitement selon votre peau et votre phototype.",
    image: "/images/real/gros-plan-serie-melasma-01.webp",
    imageAlt: "Gros plan de mélasma sur la joue et la pommette",
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
  faq: [
    {
      q: "Mélasma et masque de grossesse : quelle différence ?",
      a: "C'est la même chose. On parle de masque de grossesse quand le mélasma apparaît pendant une grossesse. Il peut aussi apparaître avec une contraception hormonale, un traitement hormonal, ou sans cause évidente. Le médecin confirme le diagnostic à partir de vos photos et de la visio.",
    },
    {
      q: "Comment savoir d'où vient ma tache ?",
      a: "C'est l'objet de la consultation. À partir de votre dossier et de vos photos, le médecin distingue un masque de grossesse, une tache solaire ou une marque laissée par un bouton, et adapte le traitement. Si une tache est nouvelle ou change d'aspect, il peut vous orienter vers un examen en cabinet.",
    },
    {
      q: "J'ai un masque de grossesse, que faire ?",
      a: "C'est très fréquent. Signalez toute grossesse, tout projet de grossesse ou allaitement : certains actifs sont contre-indiqués. Le médecin adapte le plan à votre situation, en commençant par une protection solaire rigoureuse.",
    },
    {
      q: 'Comment éviter le masque de grossesse ?',
      a: "Le soleil est son premier déclencheur : une protection solaire quotidienne, teintée de préférence, et un chapeau dès les beaux jours limitent son apparition et son aggravation. Pendant la grossesse, demandez toujours un avis médical avant d'utiliser un actif dépigmentant.",
    },
    {
      q: "Le masque de grossesse disparaît-il après l'accouchement ?",
      a: "Il s'atténue souvent dans les mois qui suivent l'accouchement, mais pas toujours. Il peut persister ou revenir avec le soleil ou une contraception hormonale. S'il ne part pas, un médecin peut faire le point et proposer un plan adapté, en tenant compte de l'allaitement.",
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
    { href: '/acne/', label: 'Acné adulte', teaser: 'Boutons qui reviennent à l’âge adulte.' },
    { href: '/rosacee/', label: 'Rosacée et couperose', teaser: 'Rougeurs diffuses, petits vaisseaux, sensations de chaleur.' },
    { href: '/hyperpigmentation/', label: 'Hyperpigmentation et taches solaires', teaser: 'Lentigo, marques d’acné, peaux mates à foncées.' },
  ],
  articles: ['masque-de-grossesse-soleil', 'taches-peau-noire-mate', 'lentigo-taches-solaires'],
};
