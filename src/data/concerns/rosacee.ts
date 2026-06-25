import type { Concern } from './types';

export const rosacee: Concern = {
  slug: 'rosacee',
  chip: 'Rosacée',
  seo: {
    title: 'Traitement de la rosacée et des rougeurs du visage | Mixt',
    description:
      "Rougeurs diffuses, sensations de chaleur, boutons : la rosacée se traite. Un médecin expert de votre peau, supervisé par un dermatologue, construit un plan sur-mesure et vous suit dans la durée.",
  },
  hero: {
    kicker: 'Rosacée',
    title: 'Apaiser la rosacée,',
    highlight: 'durablement.',
    lead: "Rougeurs diffuses, sensations de chaleur, parfois des boutons : la rosacée évolue par poussées et s'épuise à coups d'essais cosmétiques. Un médecin expert de votre peau, supervisé par un dermatologue, cible ses mécanismes et vous accompagne dans la durée.",
    image: '/images/woman-rosacea-closeup-vertical.jpg',
    imageAlt: 'Femme avec des rougeurs de rosacée sur les joues',
  },
  problem: {
    title: 'Pourquoi la rosacée',
    highlight: 'est si déroutante.',
    paras: [
      "La rosacée se confond facilement avec une simple sensibilité ou une poussée d'acné. Du coup on l'attaque avec les mauvais produits : gommages, actifs irritants, routines trop riches, qui enflamment encore plus la peau.",
      "Derrière les rougeurs, plusieurs mécanismes se combinent : des vaisseaux hyperréactifs, une inflammation chronique, parfois des micro-organismes. Un seul produit ne peut pas tout couvrir.",
      "La rosacée ne se guérit pas en une cure, elle se contrôle. Il faut les bons traitements, l'identification de vos facteurs déclenchants, et un suivi qui ajuste au fil des poussées. Une peau suivie, pas juste traitée.",
    ],
  },
  mechanism: {
    lede: "La rosacée, c'est une peau qui rougit et s'enflamme facilement.",
    body: "Des vaisseaux hyperréactifs, une inflammation chronique, parfois des boutons : plusieurs mécanismes se combinent. La dermatologie cible chacun pour apaiser durablement la peau.",
    actifs: [
      { name: 'Métronidazole', bold: "Réduit l'inflammation", rest: 'et les boutons. Référence de première intention.' },
      { name: 'Acide azélaïque', bold: 'Anti-inflammatoire', rest: 'parmi les plus efficaces sur les lésions.' },
      { name: 'Ivermectine', bold: "Cible l'inflammation", rest: 'et les micro-organismes de la peau.' },
      { name: 'Niacinamide', bold: 'Renforce la barrière', rest: 'et apaise les rougeurs.' },
    ],
    footer:
      'Le médecin choisit les actifs et dosages adaptés à votre cas, selon son évaluation clinique.',
  },
  faq: [
    {
      q: 'Rosacée ou simple sensibilité, comment faire la différence ?',
      a: "C'est l'un des rôles de la consultation. À partir de votre dossier et de vos photos, le médecin distingue une rosacée d'une peau réactive ou d'une autre condition, et propose le traitement adapté.",
    },
    {
      q: 'La rosacée se guérit-elle ?',
      a: "La rosacée est une condition chronique : elle ne disparaît pas définitivement, mais elle se contrôle très bien. Avec le bon traitement et un suivi régulier, les rougeurs et les poussées s'espacent nettement.",
    },
    {
      q: 'Mes rougeurs reviennent dès que je change de produit, est-ce normal ?',
      a: "Oui, la peau rosacée est très réactive. Une partie du travail consiste à identifier vos facteurs déclenchants et à construire une routine simple et tolérée, que le médecin ajuste dans le temps.",
    },
  ],
  related: [
    { href: '/acne/', label: 'Acné', teaser: 'Boutons, points noirs et inflammation.' },
    { href: '/hyperpigmentation/', label: 'Hyperpigmentation', teaser: 'Taches brunes, marques et taches solaires.' },
  ],
};
