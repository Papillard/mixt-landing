import type { Concern } from './types';

export const rosacee: Concern = {
  slug: 'rosacee',
  chip: 'Rosacée',
  condition: { name: 'Rosacée', alternateName: ['Couperose', 'Acné rosacée', 'Rougeurs du visage'] },
  seo: {
    title: "Rosacée et couperose : un médecin en ligne pour vos rougeurs | Mixt",
    description:
      "Rosacée, couperose, rougeurs du visage : un médecin partenaire cherche ce qui déclenche vos poussées et personnalise votre traitement. Bilan gratuit, visio sous 7 jours.",
  },
  hero: {
    kicker: "Rosacée · Couperose · Rougeurs",
    title: "Rosacée et couperose :",
    highlight: "un protocole médical, pas un soin de plus",
    lead: "Rougeurs, sensations de chaleur, boutons : faites le point avec un médecin pour comprendre ces symptômes et construire une prise en charge adaptée.",
    leadShort: "Un médecin vous voit en visio, cherche ce qui déclenche vos rougeurs et construit un plan de traitement adapté à votre peau.",
    image: "/images/real/patiente-elise-rosacee-portrait-face-01.webp",
    imageAlt: "Femme avec des rougeurs sur les joues et le nez",
    imagePosition: "center 30%",
  },
  band: {
    image: "/images/real/texture-rouge-goutte-gel-01.webp",
    slogan: "Un diagnostic avant les actifs",
    imagePosition: "center 50%",
  },
  interstitial: {
    color: "#292627",
    eyebrow: "Le protocole part du diagnostic",
    slogan: "Traiter les symptômes. Respecter la tolérance",
    image: "/images/real/gros-plan-rosacee-joue-01.webp",
    imageAlt: "Gros plan de rougeurs diffuses sur la joue",
    imagePosition: "center",
  },
  voices: {
    title: "Rougeurs qui vont et viennent, peau qui chauffe",
    quotes: ["Des crèmes apaisantes, qui calment un jour et pas le lendemain", "Des produits qui piquent et font rougir encore plus", "Des avis contradictoires : rosacée, irritation, allergie ?"],
    outro: "Avant les actifs, un médecin pose le diagnostic et construit un plan qui respecte votre tolérance.",
    image: "/images/real/texture-gel-transparent-doigt-01.webp",
    imageAlt: "Gel apaisant transparent sur le bout du doigt",
    imagePosition: "center",
  },
  formulaImage: "/images/real/produit-tube-main-fond-brun-01.webp",
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
      'Votre médecin personnalise actifs et dosages selon votre cas, selon son évaluation clinique.',
  },
  faq: [
    {
      q: "Rosacée et couperose : quelle différence ?",
      a: "La couperose désigne les petits vaisseaux visibles sur les joues et le nez. C'est souvent une des formes de la rosacée, qui peut aussi donner des rougeurs diffuses, des sensations de chaleur ou des boutons. Le médecin fait la différence à partir de vos photos et de la visio.",
    },
    {
      q: 'Rosacée ou simple sensibilité, comment faire la différence ?',
      a: "C'est l'un des rôles de la consultation. À partir de votre dossier et de vos photos, le médecin distingue une rosacée d'une peau réactive ou d'une autre condition, et propose le traitement adapté.",
    },
    {
      q: 'La rosacée se guérit-elle ?',
      a: "La rosacée est une condition chronique : elle ne disparaît pas définitivement, mais elle se contrôle très bien. Avec le bon traitement et un suivi régulier, les rougeurs et les poussées s'espacent nettement.",
    },
    {
      q: "Qu'est-ce qui déclenche une poussée de rosacée ?",
      a: "Les déclencheurs varient d'une personne à l'autre : soleil, chaleur, effort, alcool, plats épicés, boissons chaudes, stress, certains cosmétiques. Repérer les vôtres fait partie du suivi, pour éviter ce qui vous fait réagir sans vous priver de tout.",
    },
    {
      q: 'La rosacée peut-elle toucher les yeux ?',
      a: "Oui, on parle de rosacée oculaire : yeux secs, rouges, qui piquent ou paupières irritées. Signalez-le pendant la consultation. En cas de douleur ou de baisse de la vision, consultez rapidement un ophtalmologiste.",
    },
    {
      q: 'Crème contre la rosacée : avec ou sans ordonnance ?',
      a: "Les soins apaisants vendus en pharmacie améliorent le confort, mais n'agissent pas sur l'inflammation de fond. Les traitements qui la ciblent sont délivrés sur prescription médicale. Après la consultation, votre médecin peut en prescrire un si c'est indiqué.",
    },
    {
      q: 'Le laser, ça marche sur la couperose ?',
      a: "Le laser vasculaire peut atténuer les petits vaisseaux visibles. Il ne traite pas l'inflammation, les boutons ni les poussées de la rosacée, et se pratique en cabinet. Le médecin peut vous dire si c'est pertinent dans votre cas, en complément d'un traitement local.",
    },
    {
      q: 'Mes rougeurs reviennent dès que je change de produit, est-ce normal ?',
      a: "Oui, la peau rosacée est très réactive. Une partie du travail consiste à identifier vos facteurs déclenchants et à construire une routine simple et tolérée, que le médecin ajuste dans le temps.",
    },
  ],
  related: [
    { href: '/acne/', label: 'Acné adulte', teaser: 'Boutons, points noirs et inflammation.' },
    { href: '/taches/', label: 'Masque de grossesse et taches brunes', teaser: 'Mélasma, taches brunes et marques.' },
  ],
};
