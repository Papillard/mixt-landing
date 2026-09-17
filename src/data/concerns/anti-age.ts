import type { Concern } from './types';

export const antiAge: Concern = {
  slug: 'anti-age',
  chip: 'Anti-âge',
  seo: {
    title: "Anti-âge : les actifs prescrits que la cosmétique ne peut pas égaler | Mixt",
    description:
      "L'actif anti-âge le plus étudié au monde ne s'achète pas en vente libre : il se prescrit. Un médecin construit votre protocole, dosé pour votre peau et ajusté chaque mois. Consultation 59 €.",
  },
  heroProof: { label: 'Avis vérifiés sur Trustpilot' },
  faqPosition: 'early',
  objectionsTitle: 'Ce que vous vous demandez',
  hero: {
    kicker: 'Anti-âge · rides & fermeté',
    title: 'Votre crème a fait',
    highlight: "ce qu'elle pouvait.",
    lead: "Ridules, fermeté, éclat : un médecin vous prescrit la trétinoïne dosée pour votre peau, et ajuste votre protocole chaque mois. Bilan gratuit, consultation sous 7 jours.",
    image: '/images/header-aging.webp',
    imageAlt: 'Femme de 40 ans à la peau naturelle et lumineuse',
    imagePosition: 'center 35%',
  },
  problem: {
    title: "La cosmétique s'arrête",
    highlight: "à la surface.",
    paras: [
      "Ce n'est pas un défaut de fabrication, c'est une contrainte réglementaire : un cosmétique n'a pas le droit de modifier durablement la structure de la peau. Les molécules qui stimulent le collagène et remodèlent le derme sont des principes actifs, donc prescrits.",
      "Ce qui compte n'est donc pas la concentration affichée sur un flacon, mais le dosage choisi par un médecin pour votre peau, et la rigueur du suivi.",
      "Un anti-âge sérieux n'est pas une accumulation de produits. C'est un protocole évalué, suivi et ajusté dans le temps.",
    ],
  },
  midCta: {
    kicker: 'Le vrai standard médical',
    title: 'Une peau plus ferme, plus lisse.',
    highlight: 'Prouvé, pas promis.',
  },
  contrast: {
    kicker: 'Ce qui sépare les deux',
    left: {
      value: 'Cosmétique',
      label: "sérums anti-âge en vente libre, même les plus coûteux.",
      items: [
        "actifs plafonnés par la réglementation cosmétique",
        "aucune évaluation clinique de votre peau",
        "aucun ajustement dans le temps",
      ],
    },
    right: {
      value: 'Trétinoïne',
      label: "l'actif anti-âge le plus étudié au monde, sur prescription.",
      items: [
        "40 ans de preuves sur rides, fermeté et éclat",
        "dosée et préparée pour votre peau",
        "un protocole suivi et ajusté par le médecin",
      ],
    },
    note: "La trétinoïne et les actifs anti-âge de niveau médical sont prescrits et préparés en pharmacie sur ordonnance : ils sont hors de portée de la cosmétique.",
  },
  mechanism: {
    lede: "La trétinoïne, c'est 40 ans de preuves cliniques.",
    body: "Les UV et le temps dégradent le collagène, le renouvellement ralentit, les ridules s'installent. Le médecin relance le renouvellement, stimule le collagène et protège votre capital peau. Dosé pour vous, préparé en pharmacie, ajusté chaque mois.",
    actifs: [
      { name: 'Trétinoïne', bold: 'Relance le renouvellement', rest: 'et stimule le collagène. Le gold standard anti-âge, sur prescription.' },
      { name: 'Vitamine C stabilisée', bold: 'Antioxydant et cofacteur du collagène', rest: 'pour la fermeté et l\'éclat.' },
      { name: 'Acides exfoliants', bold: 'Affinent le grain de peau', rest: 'et ravivent le teint terne.' },
      { name: 'Niacinamide', bold: 'Renforce la barrière cutanée', rest: 'et unifie le teint.' },
      { name: 'Protection solaire', bold: 'Le premier des anti-âge', rest: "elle prévient l'essentiel du vieillissement cutané." },
    ],
    footer:
      "Le médecin choisit les actifs et dosages adaptés à votre peau et à vos objectifs, selon son évaluation clinique. La trétinoïne demande un accompagnement : dosage progressif, gestion de la phase d'adaptation, ajustements.",
    image: null,
  },
  cohort: {
    image: '/images/agence-lifestyle-lit.webp',
    imageAlt: 'Femme à la peau nette et reposée au réveil',
  },
  expectations: {
    title: 'Le rythme',
    highlight: "d'un vrai protocole.",
    intro: "Les actifs prescrits agissent en profondeur : les résultats se construisent, ils ne s'achètent pas en un pot.",
    steps: [
      { when: 'Semaines 1 à 4', body: "La phase d'adaptation. La peau s'habitue à la trétinoïne : légères rougeurs ou desquamation possibles. Le médecin ajuste le dosage pour la passer sereinement." },
      { when: 'Semaine 8', body: "Le grain de peau s'affine, le teint devient plus lumineux. Les pores et les ridules commencent à répondre." },
      { when: 'Semaine 12', body: "Une peau plus ferme et plus lisse chez ceux qui répondent. Le médecin ajuste les actifs selon vos résultats." },
      { when: 'Au-delà', body: "L'entretien, sur le long terme. C'est la régularité qui construit et protège les résultats, année après année." },
    ],
    footnote: "Résultats individuels, non garantis. La protection solaire quotidienne conditionne l'efficacité de tout protocole anti-âge.",
  },
  authority: {
    kicker: 'Qui conçoit votre protocole',
    title: 'Une dermatologue',
    highlight: 'derrière chaque ordonnance.',
    image: '/images/besthabee-consult.webp',
    imageAlt: 'Dr Bethsabée Levy Garel, dermatologue fondatrice de Mixt',
    name: 'Dr Bethsabée Levy Garel',
    role: 'Dermatologue · Fondatrice',
    quote: "La trétinoïne fonctionne. Ce qui fait échouer les gens, c'est le dosage et l'absence de suivi pendant les premières semaines.",
    points: [
      'Dermatologue formée à la Sorbonne, ex-Cochin',
      'Définit les protocoles de traitement Mixt',
      'Supervise les médecins qui vous consultent',
      'Chaque ordonnance relève de la décision du médecin qui vous suit',
    ],
  },
  review: {
    quote: "La crème est plus efficace que tout ce que j'ai pu tester pour l'instant, et l'équipe Mixt est super disponible.",
    name: 'Sadie B.',
    tag: 'Formule sur-mesure',
  },
  faq: [
    {
      q: "La trétinoïne, qu'est-ce que c'est exactement ?",
      a: "C'est un rétinoïde délivré sur ordonnance, le principe actif anti-âge le plus étudié au monde. Contrairement aux rétinols cosmétiques, très dilués, la trétinoïne agit directement sur le renouvellement cellulaire et la production de collagène. C'est pour ça qu'elle est prescrite et non vendue en libre-service.",
    },
    {
      q: "Est-ce que c'est pour les hommes aussi ?",
      a: "Oui, entièrement. Le vieillissement cutané et les mécanismes de la peau sont les mêmes. Le médecin construit un protocole adapté à votre peau et à vos objectifs, sans distinction.",
    },
    {
      q: "À partir de quel âge commencer ?",
      a: "Il n'y a pas d'âge idéal unique : l'intérêt d'un protocole prescrit est justement d'agir tôt sur la prévention, ou plus tard sur la correction. Le médecin évalue votre peau et vous dit ce qui a du sens dans votre cas.",
    },
    {
      q: "Y a-t-il des effets secondaires ?",
      a: "La trétinoïne provoque souvent une phase d'adaptation au début (rougeurs, desquamation légère). C'est normal et transitoire : le rôle du médecin est justement de doser progressivement et d'ajuster pour que vous la passiez sans encombre. C'est ce suivi qui fait la différence avec une automédication.",
    },
  ],
  related: [
    { href: '/taches-brunes/', label: 'Taches brunes', teaser: 'Mélasma, taches de soleil et pigmentation.' },
    { href: '/hyperpigmentation/', label: 'Hyperpigmentation', teaser: "Taches solaires et marques d'acné." },
  ],
};
