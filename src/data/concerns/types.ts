export type Actif = {
  name: string;
  bold: string;
  rest?: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type RelatedLink = {
  href: string;
  label: string;
  teaser: string;
};

export type ProofPhoto = {
  src: string;
  alt: string;
  /** Optional zoom to reframe a tight crop, mirrors BeforeAfterReveal. */
  scale?: number;
  objectPosition?: string;
};

/** Real before/after testimonial, rendered when present. */
export type Proof = {
  name: string;
  /** e.g. "Hyperpigmentation · 4 mois" */
  meta: string;
  before: ProofPhoto;
  after: ProofPhoto;
  afterLabel: string;
  quote: string;
  context: string;
  legal: string;
};

export type Concern = {
  /** URL slug, also the route filename. */
  slug: string;
  /** Short label used in chips and nav. */
  chip: string;
  /** Pathologie décrite par la page (JSON-LD MedicalCondition). */
  condition: { name: string; alternateName?: string[] };
  seo: {
    title: string;
    description: string;
  };
  hero: {
    kicker: string;
    /** H1 split so the second part renders in the serif italic accent. */
    title: string;
    highlight: string;
    lead: string;
    /** Version mobile du lead : une phrase, lisible au-dessus de la ligne de flottaison. */
    leadShort: string;
    image: string;
    imageAlt: string;
    /** Cadrage de la photo hero (object-position CSS). */
    imagePosition?: string;
    /** Cadrage mobile (photo au format 4/5), si différent du desktop. */
    imagePositionMobile?: string;
  };
  /** Bande texture pleine largeur sous le hero, slogan blanc posé dessus. */
  band: {
    /** Slogan en encre sombre, pour une texture claire. */
    textDark?: boolean;
    image: string;
    slogan: string;
    imagePosition?: string;
  };
  /** Interstitiel : aplat de couleur + gros plan de peau + CTA blanc. */
  interstitial: {
    /** Couleur de l'aplat (bordeaux, prune ou encre de la charte). */
    color: string;
    eyebrow: string;
    slogan: string;
    image: string;
    imageAlt: string;
    imagePosition?: string;
  };
  /** Vous vous reconnaissez ? : verbatims patientes (Studio Mixt) + photo de situation. */
  voices: {
    title: string;
    quotes: string[];
    outro: string;
    image: string;
    imageAlt: string;
    imagePosition?: string;
  };
  /** Photo du bloc formule / actifs. */
  formulaImage: string;
  /** Empathy / why generic routines fail for this concern. */
  problem: {
    title: string;
    highlight: string;
    paras: string[];
  };
  /** The dermatology mechanism + named actives (the credibility core). */
  mechanism: {
    lede: string;
    body: string;
    actifs: Actif[];
    footer: string;
  };
  /** Optional honest "what to expect" timeline. Renders only when present. */
  expectations?: {
    title: string;
    /** Rendered in the serif italic accent, like the other section headings. */
    highlight: string;
    intro?: string;
    steps: { when: string; body: string }[];
    /** Small disclaimer line under the timeline (e.g. résultats non garantis). */
    footnote?: string;
  };
  /** Optional real before/after testimonial. Falls back to a cohort invite when absent. */
  proof?: Proof;
  /** Concern specific FAQ. Shared medical FAQ is appended by the layout. */
  faq: FaqItem[];
  related: RelatedLink[];
};
