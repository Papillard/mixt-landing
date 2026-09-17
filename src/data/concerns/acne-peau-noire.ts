import type { Concern } from './types';

export const acnePeauNoire: Concern = {
  slug: 'acne-peau-noire',
  chip: 'Acné',
  seo: {
    title: "Acné sur peau noire et métissée : traiter sans laisser de marques | Mixt",
    description:
      "Sur les peaux foncées, chaque bouton peut laisser une tache. Un médecin expert des peaux noires traite l'acné et l'hyperpigmentation en même temps, avec des actifs adaptés. Consultation 49 €.",
  },
  heroProof: { label: 'Avis vérifiés sur Trustpilot' },
  faqPosition: 'early',
  objectionsTitle: 'Ce que vous vous demandez',
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
    image: null,
    imageBrief: 'Macro joue, phototype V',
    imageDesc: "Gros plan sur une joue peau foncée montrant à la fois des boutons actifs et des marques brunes post-inflammatoires. Lumière naturelle chaude, fond clair, texture de peau réelle.",
  },
  midCta: {
    kicker: 'Sans attendre six mois',
    title: 'Une peau nette,',
    highlight: 'sans les taches qui restent.',
    imageBrief: 'Portrait paysage, phototype V',
    imageDesc: "Femme noire 25-30 ans, teint net et uniforme, regard vers une fenêtre, lumière naturelle, fond neutre chaud. Sujet décalé à droite.",
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
    imageBrief: 'Application du soin, peau foncée',
    imageDesc: "Mains appliquant une formule sur le visage, peau foncée, salle de bain en lumière du jour. Geste du quotidien, cadrage vertical.",
  },
  cohort: {
    image: null,
    imageBrief: 'Portrait "après", phototype V',
    imageDesc: "Femme noire 25-35 ans, peau nette et uniforme, sourire discret, fond clair chaud. Expression calme et confiante, sans retouche lissante.",
  },
  authority: {
    kicker: 'Qui conçoit votre protocole',
    title: 'Une dermatologue',
    highlight: 'derrière chaque ordonnance.',
    image: '/images/besthabee-consult.webp',
    imageAlt: 'Dr Bethsabée Levy Garel, dermatologue fondatrice de Mixt',
    name: 'Dr Bethsabée Levy Garel',
    role: 'Dermatologue · Fondatrice',
    quote: "Sur une peau foncée, l'erreur classique est de taper trop fort sur l'acné. On gagne le bouton et on perd le teint.",
    points: [
      'Dermatologue formée à la Sorbonne, ex-Cochin',
      'Définit les protocoles de traitement Mixt',
      'Supervise les médecins qui vous consultent',
      'Chaque ordonnance relève de la décision du médecin qui vous suit',
    ],
  },
  review: {
    quote: "Les premiers résultats sont arrivés très rapidement, en même pas 1 mois, ma peau était plus uniforme et les rougeurs avaient nettement diminué.",
    name: 'Marie D.',
    tag: 'Acné',
  },
  treatment: {
    kicker: 'Votre traitement',
    title: 'Une formule préparée',
    highlight: "pour votre phototype.",
    lead: "Si le médecin la prescrit, votre formule est préparée en pharmacie : des actifs et des dosages choisis pour une peau qui marque, pour traiter sans créer de nouvelles taches.",
    benefits: [
      { label: 'Sur-mesure', body: "Pas la même formule pour tout le monde : les actifs et leurs concentrations sont décidés pour votre peau, à partir de votre dossier et de vos photos." },
      { label: 'Une seule application', body: "Les actifs sont combinés dans une formule unique, à appliquer le soir. Pas une routine à sept étapes qu'on abandonne au bout d'un mois." },
      { label: 'Ajustée dans le temps', body: "Le dosage évolue avec votre peau. On monte en puissance quand elle est prête, on lève le pied quand elle réagit." },
    ],
    footnote: "Préparation en pharmacie de 30 à 60 € selon la formule, avec remboursement partiel possible. Toute prescription relève de la seule appréciation du médecin : selon votre cas, il peut aussi recommander un traitement classique ou une approche cosmétique.",
    image: null,
    imageBrief: 'Flacon de préparation magistrale',
    imageDesc: "Le flacon Mixt sur un plan clair, lumière naturelle rasante, étiquette lisible. Sobre et premium, jamais packshot e-commerce sur fond blanc.",
  },
  expectations: {
    title: 'Le rythme réel',
    highlight: 'du bouton, puis de la tache.',
    intro: "Deux horloges différentes : l'acné se calme en quelques semaines, la pigmentation met plusieurs mois. Le savoir évite de croire que ça ne marche pas.",
    steps: [
      { when: 'Semaines 1 à 4', body: "Phase d'adaptation. La peau s'habitue aux actifs, avec un dosage prudent choisi pour votre phototype pour ne pas créer de nouvelles marques." },
      { when: 'Semaine 8', body: "L'acné active recule nettement. Les taches, elles, commencent à peine à s'éclaircir : c'est le rythme normal de la pigmentation." },
      { when: 'Semaine 12', body: "Le teint s'unifie visiblement chez celles qui répondent. Le médecin ajuste les dépigmentants selon ce qu'il observe." },
      { when: 'Au-delà', body: "On entretient. Tant que l'acné est contrôlée, aucune nouvelle marque ne se forme, et les anciennes continuent de s'estomper." },
    ],
    footnote: "Résultats individuels, non garantis. Sur peau foncée, la protection solaire quotidienne conditionne l'effacement des marques.",
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
