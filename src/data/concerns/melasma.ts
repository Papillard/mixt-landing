import type { Concern } from './types';

export const melasma: Concern = {
  slug: 'melasma',
  chip: 'Mélasma',
  seo: {
    title: 'Traitement du mélasma et du masque de grossesse | Mixt',
    description:
      "Mélasma, masque de grossesse, taches hormonales : un médecin expert de votre peau, supervisé par un dermatologue, construit un plan sur-mesure et vous suit mois après mois.",
  },
  hero: {
    kicker: 'Mélasma',
    title: 'Le mélasma se traite.',
    highlight: 'Avec méthode, et dans la durée.',
    lead: "Ces taches symétriques sur les joues, le front ou la lèvre supérieure, souvent apparues pendant une grossesse ou sous pilule, reviennent dès qu'on baisse la garde. Un médecin expert de votre peau, supervisé par un dermatologue, construit un plan adapté à votre phototype et vous accompagne mois après mois.",
    image: '/images/woman-mirror-melasma.jpg',
    imageAlt: 'Femme observant son mélasma dans un miroir',
  },
  problem: {
    title: 'Pourquoi le mélasma',
    highlight: 'résiste autant.',
    paras: [
      "Le mélasma, ou masque de grossesse, n'est pas une simple tache de soleil. C'est une pigmentation profonde, entretenue par les hormones et la lumière. Une grossesse, une pilule, quelques minutes de soleil sans protection suffisent à le réactiver.",
      "C'est précisément pour ça que les protocoles agressifs vus en ligne se retournent contre vous. Un peeling trop fort, un laser mal indiqué ou un actif mal dosé sur un phototype foncé peut enflammer la peau et aggraver la tache au lieu de l'estomper.",
      "Trois pièges expliquent la plupart des échecs : les cosmétiques sous-dosés qui ne franchissent jamais le seuil d'efficacité, les essais au hasard qui changent de produit tous les mois, et l'abandon faute de suivi. Le mélasma demande l'inverse : les bons actifs aux bons dosages, une protection solaire sérieuse, et quelqu'un qui ajuste au fil des mois. C'est une peau à suivre, pas juste à traiter.",
    ],
  },
  mechanism: {
    lede: "Une tache de mélasma, c'est de la mélanine qui s'accumule dans la peau.",
    body: "Fabriquée en profondeur, elle remonte à la surface puis s'évacue. Quand le cycle se dérègle sous l'effet des UV et des hormones, elle s'installe. La dermatologie agit sur ces trois temps : freiner, ralentir, évacuer.",
    actifs: [
      { name: 'Protection solaire', bold: 'Bloque les UV et la lumière visible', rest: "le filtre minéral teinté arrête aussi la lumière des écrans et des fenêtres, qui réactive la tache." },
      { name: 'Acide tranexamique', bold: 'Cible la composante hormonale', rest: 'et vasculaire, en amont de la fabrication du pigment.' },
      { name: 'Acide azélaïque', bold: 'Agit sur la production de mélanine', rest: "et l'inflammation, bien toléré sur les phototypes foncés." },
      { name: 'Acide kojique', bold: 'Freine la fabrication de mélanine.' },
      { name: 'Niacinamide', bold: 'Limite le transfert du pigment', rest: "vers la surface. Dosée jusqu'à 15 % en préparation magistrale, un niveau introuvable en cosmétique." },
      { name: 'Acide rétinoïque', bold: 'Accélère le renouvellement', rest: 'cellulaire pour évacuer le pigment déjà installé.' },
    ],
    footer:
      "Le médecin choisit les actifs et dosages adaptés à votre phototype et à votre cas, selon son évaluation clinique. La protection solaire, elle, n'est jamais optionnelle : c'est le socle du traitement.",
  },
  expectations: {
    title: 'À quoi vous pouvez',
    highlight: 'vous attendre.',
    intro: "Le mélasma se traite lentement. Voici le rythme réel, pour avancer sans se décourager.",
    steps: [
      { when: 'Semaines 1 à 4', body: "La phase invisible. Le traitement agit en profondeur, rien ne se voit encore. C'est le moment où la régularité compte le plus." },
      { when: 'Semaine 8', body: "Les premiers signes. La tache commence à s'estomper, à condition que la protection solaire soit tenue chaque jour." },
      { when: 'Semaine 12', body: "Une amélioration nette chez les peaux qui répondent. Le médecin ajuste les actifs et les dosages selon vos résultats." },
      { when: 'Au-delà', body: "L'entretien. Le mélasma ne disparaît jamais totalement : on passe en mode entretien pour tenir les résultats dans la durée." },
    ],
    footnote: "Résultats individuels, non garantis. La protection solaire conditionne tout : un seul jour sans protection peut effacer des semaines de progrès.",
  },
  faq: [
    {
      q: 'Combien de temps avant de voir des résultats ?',
      a: "Comptez 8 à 12 semaines avant un changement visible, et seulement si la protection solaire est tenue tous les jours. Les quatre premières semaines, le traitement agit sans que rien ne se voie : c'est normal. Le mélasma se traite dans la durée, pas en quelques jours.",
    },
    {
      q: 'Le mélasma part-il définitivement ?',
      a: "Le mélasma est une condition chronique : il s'atténue très bien avec le bon traitement, mais il a tendance à revenir si la protection solaire et l'entretien s'arrêtent. C'est pour ça que le suivi dans la durée compte autant que le traitement de départ.",
    },
    {
      q: "J'ai un mélasma apparu pendant ma grossesse, que faire ?",
      a: "Le masque de grossesse est très fréquent. Certains actifs ne s'utilisent pas pendant la grossesse ou l'allaitement : le médecin en tient compte et adapte le plan à votre situation, en commençant par une protection solaire rigoureuse.",
    },
    {
      q: 'Le laser fonctionne-t-il sur le mélasma ?',
      a: "C'est rarement une bonne idée en première intention. Sur un mélasma, le laser peut déclencher une inflammation qui aggrave la tache, surtout sur les phototypes foncés. Le médecin privilégie d'abord les bons actifs et la protection solaire, et n'envisage un geste que dans des cas précis, en connaissant votre peau.",
    },
    {
      q: 'Les crèmes dépigmentantes du commerce suffisent-elles ?',
      a: "Rarement sur un vrai mélasma. Les concentrations en vente libre sont faibles, et un actif mal choisi peut empirer la tache. Les actifs efficaces sont prescrits et préparés en pharmacie sur ordonnance, à des dosages adaptés à votre peau.",
    },
  ],
  related: [
    { href: '/hyperpigmentation/', label: 'Hyperpigmentation', teaser: "Taches solaires, marques d'acné et autres taches brunes." },
    { href: '/rosacee/', label: 'Rosacée', teaser: 'Rougeurs diffuses, sensations de chaleur et boutons.' },
  ],
};
