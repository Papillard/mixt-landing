import type { Concern } from './types';

// Page « Taches brunes et hyperpigmentation » (sprint SEO S2). Distincte de /taches/,
// qui vise le masque de grossesse (mélasma, hormonal). Ici : lentigo (taches solaires),
// marques post-inflammatoires (acné, irritation), peaux mates à foncées.
// Cibles Ahrefs : hyperpigmentation 6,9K, lentigo 5,1K, tache marron/brune sur la peau 3,5K/2,8K.
export const hyperpigmentation: Concern = {
  slug: 'hyperpigmentation',
  chip: 'Hyperpigmentation',
  condition: {
    name: 'Hyperpigmentation',
    alternateName: ['Taches brunes', 'Lentigo', 'Taches solaires', 'Hyperpigmentation post-inflammatoire'],
  },
  seo: {
    title: 'Hyperpigmentation et taches brunes : un médecin en ligne | Mixt',
    description:
      "Taches brunes sur le visage, lentigo, marques d'acné, peau mate ou foncée : un médecin partenaire identifie le type de tache et personnalise votre traitement. Bilan gratuit.",
  },
  hero: {
    kicker: 'Hyperpigmentation · Lentigo · Marques d’acné',
    title: 'Taches brunes et hyperpigmentation :',
    highlight: "un médecin identifie d'abord le type de tache",
    lead: "Taches solaires, marques laissées par les boutons, taches plus visibles sur une peau mate ou foncée : un médecin partenaire étudie vos photos, identifie le type de tache et construit un traitement adapté à votre peau.",
    leadShort:
      "Tache solaire, marque d'acné ou mélasma : en visio, un médecin identifie le type de tache et construit un plan adapté à votre peau et à votre phototype.",
    image: '/images/real/patiente-leonixia-taches-portrait-sourire-01.webp',
    imageAlt: 'Femme à la peau foncée, souriante, avec des taches brunes sur le front et les joues',
    imagePosition: 'center 40%',
    imagePositionMobile: 'center 35%',
  },
  band: {
    image: '/images/real/texture-gel-transparent-doigt-01.webp',
    slogan: "Chaque tache a sa cause",
    imagePosition: 'center 55%',
  },
  interstitial: {
    color: '#481B27',
    eyebrow: 'Lentigo, marque d’acné ou mélasma',
    slogan: 'Trois taches qui se ressemblent, trois traitements différents',
    image: '/images/real/gros-plan-taches-joue-01.webp',
    imageAlt: 'Gros plan de taches solaires sur la joue et la tempe',
    imagePosition: 'center 40%',
  },
  voices: {
    title: 'Des taches qui ne bougent pas malgré les sérums',
    quotes: [
      "Un sérum à la vitamine C, puis un autre, sans voir la tache pâlir",
      "Attendre que les marques des boutons partent d'elles-mêmes, pendant des mois",
      'Des crèmes anti-taches qui irritent une peau mate ou foncée',
    ],
    outro:
      "Un médecin partenaire étudie vos photos, identifie le type de tache et choisit des actifs tolérés par votre phototype.",
    image: 'PH-hyperpigmentation-voix',
    imageAlt: 'Photo à venir',
  },
  formulaImage: '/images/real/produit-tube-main-fond-brun-01.webp',
  problem: {
    title: 'Pourquoi les taches',
    highlight: 'résistent.',
    paras: [
      "Une tache solaire, une marque laissée par un bouton et un mélasma se ressemblent dans le miroir. Elles n'ont pas la même cause et ne répondent pas aux mêmes actifs : un produit utile sur l'une peut foncer l'autre.",
    ],
  },
  mechanism: {
    lede: "Une tache brune, c'est un excès de mélanine. Trois mécanismes peuvent le produire.",
    body:
      "Le lentigo, ou tache solaire, vient d'années d'exposition au soleil : il apparaît sur le visage, les mains ou le décolleté, souvent après 40 ans. L'hyperpigmentation post-inflammatoire suit un bouton, une irritation ou un soin trop agressif, et dure plus longtemps sur les peaux mates à foncées. Le mélasma est surtout hormonal (masque de grossesse, pilule). Le médecin part de ce mécanisme pour choisir les actifs.",
    actifs: [
      { name: 'Protection solaire', bold: 'Le socle, pour toutes les taches', rest: 'une formule teintée filtre aussi la lumière visible, qui fonce les peaux mates et foncées.' },
      { name: 'Acide azélaïque', bold: 'Freine la production de mélanine', rest: "et calme l'inflammation, bien toléré sur les peaux foncées." },
      { name: 'Niacinamide', bold: 'Limite le transfert du pigment', rest: 'vers la surface de la peau.' },
      { name: 'Acide kojique', bold: 'Freine la fabrication de mélanine.' },
      { name: 'Acide rétinoïque', bold: 'Accélère le renouvellement de la peau', rest: 'pour évacuer le pigment, introduit progressivement pour éviter les irritations.' },
      { name: 'Acide glycolique', bold: 'Exfolie la surface', rest: 'à une concentration adaptée au phototype.' },
    ],
    footer:
      "Votre médecin personnalise actifs et dosages selon le type de tache et votre phototype, selon son évaluation clinique. Certains actifs ne s'utilisent pas pendant la grossesse ou l'allaitement.",
  },
  expectations: {
    title: 'Ce qui se passe',
    highlight: 'après votre bilan',
    steps: [
      { when: 'Avant la visio', body: 'Vous répondez au bilan en ligne et ajoutez des photos de vos taches, en lumière naturelle.' },
      { when: 'En visio', body: "Le médecin identifie le type de tache, vérifie qu'aucune ne demande un examen en cabinet et construit votre plan." },
      { when: 'Les premières semaines', body: "Protection solaire tous les jours, actifs introduits progressivement. L'équipe Mixt suit vos photos toutes les deux semaines." },
      { when: 'Au fil des mois', body: "Le médecin revoit le plan selon l'évolution de vos taches et ajuste les dosages." },
    ],
    footnote: 'Les délais varient selon le type de tache et la peau. Résultats individuels, variables selon les personnes.',
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
      q: "Hyperpigmentation : qu'est-ce que c'est ?",
      a: "Une zone de peau plus foncée que le reste, due à un excès de mélanine. Le mot regroupe plusieurs taches : taches solaires (lentigo), marques laissées par l'acné ou une irritation, mélasma. Elles se ressemblent mais ne se traitent pas de la même façon, d'où l'intérêt de savoir laquelle vous avez.",
    },
    {
      q: "Lentigo : qu'est-ce qu'une tache solaire ?",
      a: "Une tache brune plane, aux contours nets, sur les zones exposées (visage, mains, décolleté), qui apparaît après des années de soleil. Elle est bénigne mais ne part pas seule. La protection solaire l'empêche de foncer et limite l'apparition de nouvelles taches. Le médecin peut proposer un traitement local, ou vous orienter vers un cabinet si une technique comme le laser convient mieux.",
    },
    {
      q: 'Combien de temps durent les marques laissées par les boutons ?',
      a: "Souvent plusieurs mois, et parfois plus d'un an sur une peau mate ou foncée. C'est l'hyperpigmentation post-inflammatoire. Tant que l'acné est active, de nouvelles marques apparaissent : le médecin traite souvent les boutons et les marques en même temps.",
    },
    {
      q: 'Hyperpigmentation sur peau noire ou mate : qu’est-ce qui change ?',
      a: "Une peau foncée fabrique plus facilement du pigment en réponse à une agression : un bouton, un frottement ou un produit irritant peut laisser une tache durable. Le traitement doit donc éviter d'irriter. Le médecin choisit des actifs bien tolérés et des dosages adaptés à votre phototype. La protection solaire reste indispensable, même sur une peau très foncée.",
    },
    {
      q: 'Comment enlever des taches brunes sur le visage ?',
      a: "En commençant par savoir de quelle tache il s'agit. La protection solaire quotidienne vaut pour toutes. Ensuite, le traitement dépend du type : actifs dépigmentants pour une marque post-inflammatoire ou un mélasma, traitement local ou technique en cabinet pour un lentigo. Les gommages agressifs et les produits choisis sans avis peuvent foncer une tache.",
    },
    {
      q: 'Laser ou peeling contre les taches : bonne idée ?',
      a: "Sur un lentigo, le laser peut être une option, réalisée en cabinet. Sur une peau mate ou foncée, ou sur un mélasma, un laser ou un peeling mal adapté peut provoquer une inflammation et laisser une nouvelle tache. Le médecin vous dit si c'est pertinent dans votre cas.",
    },
    {
      q: 'Une tache sur la peau : quand faut-il s’inquiéter ?',
      a: "Une tache nouvelle, qui grandit, change de couleur ou de forme, a des bords irréguliers, saigne ou démange doit être examinée rapidement, en cabinet. Une téléconsultation ne remplace pas l'examen d'un grain de beauté ou d'une tache suspecte : si l'aspect d'une tache le demande, le médecin vous oriente vers un dermatologue.",
    },
    {
      q: 'Grossesse ou allaitement : que faire de mes taches ?',
      a: "Signalez toute grossesse, tout projet de grossesse ou allaitement : plusieurs actifs dépigmentants sont contre-indiqués pendant cette période. Le médecin adapte le plan à votre situation. Si les taches sont apparues pendant la grossesse, il s'agit souvent d'un masque de grossesse.",
    },
  ],
  related: [
    { href: '/taches/', label: 'Masque de grossesse et taches brunes', teaser: 'Mélasma et taches d’origine hormonale.' },
    { href: '/acne/', label: 'Acné adulte', teaser: 'Traiter les boutons qui laissent des marques.' },
    { href: '/consultation-dermatologique-en-ligne/', label: 'Consultation dermatologique en ligne', teaser: 'Comment se passe la visio avec un médecin.' },
  ],
};
