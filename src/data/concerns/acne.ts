import type { Concern } from './types';

export const acne: Concern = {
  slug: 'acne',
  chip: 'Acné',
  seo: {
    title: "Traitement de l'acné adulte : un plan de soin sur-mesure | Mixt",
    description:
      "Boutons, points noirs, acné qui résiste : un médecin expert de votre peau, supervisé par un dermatologue, construit un plan de soin sur-mesure et vous suit dans la durée.",
  },
  hero: {
    kicker: 'Acné',
    title: "Sortir de l'acné,",
    highlight: 'sans tâtonner.',
    lead: "L'acné qui persiste à l'âge adulte épuise autant qu'elle marque la peau. Un médecin expert de votre peau, supervisé par un dermatologue, construit un protocole adapté à votre type d'acné et vous suit jusqu'à ce que la peau se stabilise.",
    image: '/images/woman-mirror-acne.jpg',
    imageAlt: "Femme observant son acné dans un miroir",
  },
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
      'Le médecin choisit les actifs et dosages adaptés à votre cas, selon son évaluation clinique.',
  },
  proof: {
    name: 'Elodie, 30 ans',
    meta: 'Acné · 1 mois',
    before: { src: '/images/elodie-before.webp', alt: 'Elodie avant le protocole', objectPosition: 'center' },
    after: { src: '/images/elodie-after.webp', alt: 'Elodie après 1 mois', objectPosition: 'center' },
    afterLabel: 'Après · 1 mois',
    quote: "Des années d'acné, j'avais tout essayé, dermato, routines, produits en pharmacie. En quelques semaines ma peau était visiblement plus lisse, mon entourage l'a remarqué.",
    context: "Acné adulte prise en charge par un médecin Mixt, supervisé par un dermatologue. Parcours d'un mois et formule magistrale prescrite sur-mesure.",
    legal: "Photos authentiques, patiente consentante. Résultats individuels, non représentatifs d'une garantie.",
  },
  faq: [
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
    { href: '/hyperpigmentation/', label: 'Hyperpigmentation', teaser: "Les marques brunes laissées par l'acné." },
    { href: '/rosacee/', label: 'Rosacée', teaser: 'Rougeurs et boutons qui se confondent avec l\'acné.' },
  ],
};
