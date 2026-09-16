import type { Concern } from './types';

export const acnePeauNoire: Concern = {
  slug: 'acne-peau-noire',
  chip: 'Acné',
  seo: {
    title: "Acné sur peau noire et métissée : traiter sans laisser de marques | Mixt",
    description:
      "Sur les peaux foncées, chaque bouton peut laisser une tache. Un médecin expert des peaux noires traite l'acné et l'hyperpigmentation en même temps, avec des actifs adaptés. Consultation 59 €.",
  },
  hero: {
    kicker: 'Acné & taches · peaux foncées',
    title: 'Le bouton part.',
    highlight: 'La tache reste.',
    lead: "Un médecin qui connaît les phototypes IV à VI traite l'acné et les marques en même temps. Consultation sous 7 jours, avec des actifs qui ne foncent pas votre peau.",
    image: '/images/agence-acne-peau-noire.webp',
    imageAlt: "Femme à la peau foncée avec de l'acné et des marques",
    imagePosition: 'center 35%',
  },
  problem: {
    title: "L'acné n'est pas",
    highlight: "qu'une histoire de cycle.",
    paras: [
      "Sur une peau foncée, le vrai problème n'est pas le bouton : c'est la marque brune qu'il laisse. Cette hyperpigmentation post-inflammatoire est souvent plus visible, et plus longue à partir, que l'acné elle-même.",
      "Et beaucoup de traitements trop agressifs l'aggravent. Sur un phototype foncé, un actif mal dosé crée une tache là où il devait l'effacer.",
      "La bonne approche traite les deux fronts dans un seul plan : calmer l'acné, estomper les marques, sans jamais agresser.",
    ],
  },
  midCta: {
    kicker: 'Sans attendre six mois',
    title: 'Une peau nette,',
    highlight: 'sans les taches qui restent.',
  },
  contrast: {
    kicker: 'Arrêtez d\'attendre',
    left: {
      value: '6 mois',
      label: "d'attente pour un rendez-vous chez un dermatologue formé aux peaux foncées.",
    },
    right: {
      value: '7 jours',
      label: "un médecin expert de votre peau, en visio, qui traite l'acné et les marques ensemble.",
    },
    note: "Vous prenez rendez-vous en 2 minutes, sans salle d'attente.",
  },
  mechanism: {
    lede: "Un seul plan pour le bouton et pour la marque.",
    body: "L'inflammation d'un bouton déclenche un surplus de mélanine : c'est la tache. Le médecin calme l'un et freine l'autre, avec des dosages choisis pour votre phototype. Préparés en pharmacie, ajustés chaque mois.",
    actifs: [
      { name: 'Acide azélaïque', bold: 'Antibactérien et anti-taches', rest: 'bien toléré sur les phototypes foncés.' },
      { name: 'Niacinamide', bold: "Calme l'inflammation", rest: 'et limite le transfert du pigment vers la surface.' },
      { name: 'Rétinoïdes dosés', bold: 'Renouvellent la peau', rest: 'préviennent les comédons et estompent les marques.' },
      { name: 'Acide tranexamique', bold: 'Cible la pigmentation', rest: 'post-inflammatoire en amont.' },
      { name: 'Acide kojique', bold: 'Freine la fabrication de mélanine.' },
    ],
    footer:
      'Le médecin choisit les actifs et dosages adaptés à votre phototype et à votre cas, selon son évaluation clinique. Sur peau foncée, la prudence sur les dosages est essentielle pour ne pas créer de nouvelles taches.',
    image: null,
  },
  cohort: {
    image: null,
  },
  review: {
    quote: "Les premiers résultats sont arrivés très rapidement, en même pas 1 mois, ma peau était plus uniforme et les rougeurs avaient nettement diminué.",
    name: 'Marie D.',
    tag: 'Acné',
  },
  faq: [
    {
      q: "Pourquoi mon acné laisse-t-elle des taches si foncées ?",
      a: "Parce que sur les peaux mates à foncées, l'inflammation d'un bouton stimule fortement les mélanocytes. Le résultat est une hyperpigmentation post-inflammatoire (PIH) : une marque brune qui peut durer des mois. C'est pour ça qu'il faut traiter l'acné sans jamais agresser la peau.",
    },
    {
      q: "Les traitements de l'acné sont-ils sûrs sur peau noire ?",
      a: "Oui, à condition d'être bien choisis et bien dosés. Certains actifs et gestes trop agressifs (peelings forts, laser mal indiqué) peuvent aggraver les taches sur un phototype foncé. Le médecin en tient compte à chaque étape.",
    },
    {
      q: "Peut-on traiter l'acné et les marques en même temps ?",
      a: "C'est justement l'approche recommandée. Le médecin construit un plan qui calme l'acné active et estompe la pigmentation post-inflammatoire en parallèle, pour ne pas courir après les marques une fois l'acné partie.",
    },
  ],
  related: [
    { href: '/mon-acne/', label: 'Acné qui persiste', teaser: "Un plan qui marche enfin, avec un suivi." },
    { href: '/taches-brunes/', label: 'Taches brunes', teaser: 'Melasma, taches de soleil et pigmentation.' },
  ],
};
