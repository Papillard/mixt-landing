import type { Concern } from './types';

export const acne: Concern = {
  slug: 'acne',
  chip: 'Acné',
  condition: { name: 'Acné adulte' },
  seo: {
    title: "Traitement de l'acné adulte avec un médecin en ligne | Mixt",
    description:
      "Acné adulte qui revient malgré les soins : un médecin personnalise votre traitement et vous suit. Bilan gratuit, visio sous 7 jours.",
    alternateNames: ["Acné adulte", "Acné hormonale"],
  },
  hero: {
    kicker: "Acné adulte",
    title: "Acné adulte :",
    highlight: "un traitement fait pour votre peau",
    lead: "À 25, 35 ou 45 ans, l'acné mérite mieux qu'une succession d'essais. Faites le point avec un médecin sur vos boutons, vos marques et les traitements déjà utilisés.",
    leadShort: "Un médecin vous voit en visio, reprend tout ce que vous avez déjà essayé et construit un plan de traitement fait pour votre peau.",
    image: "/images/real/patiente-laetitia-acne-portrait-face-01.webp",
    imageAlt: "Jeune femme avec de l'acné, sans maquillage",
    imagePosition: "center 30%",
  },
  band: {
    image: "/images/real/texture-rouge-creme-nacree-01.webp",
    slogan: "Un traitement. Une méthode",
    imagePosition: "center 40%",
  },
  interstitial: {
    color: "#481B27",
    eyebrow: "Le protocole part du diagnostic",
    slogan: "Les bons actifs commencent par les bonnes questions",
    image: "/images/real/gros-plan-acne-inflammatoire-01.webp",
    imageAlt: "Gros plan d'une joue avec des boutons d'acné",
    imagePosition: "center",
  },
  voices: {
    title: "Encore des boutons à 30 ans ?",
    quotes: ["Des produits anti-boutons, testés un par un sans vraie méthode", "Un traitement qui a marché quelques mois, puis plus rien", "Un rendez-vous de cinq minutes, sans que personne ne reprenne votre histoire"],
    outro: "Chez Mixt, un médecin reprend toute votre histoire de peau avant de choisir un traitement.",
    image: "/images/real/gros-plan-acne-front-01.webp",
    imageAlt: "Gros plan de boutons d'acné sur le front",
    imagePosition: "center",
  },
  formulaImage: "/images/real/produit-tube-mains-fond-brun-02.webp",
  problem: {
    title: "Pourquoi l'acné",
    highlight: 'continue de revenir.',
    paras: [
      "On enchaîne les nettoyants, les sérums et les routines en plusieurs étapes, et les boutons reviennent. Souvent parce qu'on assèche la peau à l'excès, ce qui l'irrite et entretient l'inflammation.",
      "L'acné n'est pas qu'une question d'hygiène. C'est un follicule qui se bouche puis s'enflamme, avec une part hormonale fréquente chez l'adulte. Les bons actifs existent, mais le dosage et l'association font toute la différence.",
      "Et sans accompagnement, les meilleurs traitements échouent : le rétinoïde irrite au début, c'est normal, mais sans personne pour vous le dire on arrête trop tôt. Une peau suivie, pas juste traitée.",
    ],
  },
  mechanism: {
    lede: "L'acné, c'est un follicule qui se bouche, puis s'enflamme.",
    body: "Trop de sébum, des cellules mortes qui s'accumulent, une bactérie qui prolifère, et l'inflammation s'installe. La dermatologie agit sur chaque maillon : désincruster le pore, réguler le sébum, calmer l'inflammation.",
    actifs: [
      { name: 'Acide salicylique', bold: 'Désincruste le pore', rest: 'et exfolie en douceur.' },
      { name: 'Rétinoïdes', bold: 'Renouvellent la peau', rest: 'et préviennent les comédons.' },
      { name: 'Acide azélaïque', bold: 'Antibactérien', rest: 'et anti-inflammatoire.' },
      { name: 'Zinc', bold: 'Régule le sébum', rest: 'et apaise.' },
      { name: 'Niacinamide', bold: "Calme l'inflammation", rest: 'et resserre le grain de peau.' },
    ],
    footer:
      'Votre médecin personnalise actifs et dosages selon votre cas, selon son évaluation clinique.',
  },
  faq: [
    {
      q: "L'acné adulte est-elle différente de celle de l'adolescence ?",
      a: "Souvent, oui. Chez l'adulte, les boutons se situent plus souvent sur le bas du visage, la mâchoire et le cou, et les variations hormonales jouent un rôle fréquent. Le médecin en tient compte pour construire votre plan de traitement.",
    },
    {
      q: "J'ai de l'acné à 30 ans, est-ce normal ?",
      a: "Oui, l'acné adulte est très fréquente, en particulier chez les femmes, avec souvent une composante hormonale. Elle se traite, mais le protocole diffère de celui d'une acné d'adolescent.",
    },
    {
      q: "L'acné laisse des marques, peut-on les traiter aussi ?",
      a: "Oui. Les marques brunes laissées par les boutons sont une hyperpigmentation post-inflammatoire. Le médecin peut traiter l'acné active et ces marques en parallèle, dans un plan cohérent.",
    },
    {
      q: 'Faut-il forcément des médicaments forts ?',
      a: "Non. Selon votre cas, le médecin peut prescrire une formule magistrale sur mesure, un traitement dermatologique classique, ou une approche plus légère. La prescription relève de sa seule appréciation.",
    },
  ],
  related: [
    { href: '/taches/', label: 'Taches brunes et mélasma', teaser: "Les marques brunes laissées par l'acné." },
    { href: '/rosacee/', label: 'Rosacée et rougeurs', teaser: 'Rougeurs et boutons qui se confondent avec l\'acné.' },
  ],
};
