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
    image: string;
    imageAlt: string;
    /** CSS object-position for the hero image. Defaults to 'center 25%'. */
    imagePosition?: string;
  };
  /**
   * Optional two-column contrast block (persona signature moment).
   * Renders the ad-style tension: price (600 € vs 59 €), access (6 mois vs 7j),
   * or cosmetics vs prescription. Left = status quo, right = Mixt.
   */
  contrast?: {
    kicker?: string;
    left: { value: string; label: string; items?: string[] };
    right: { value: string; label: string; items?: string[] };
    note?: string;
  };
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
    /**
     * Illustration for the mechanism section. Defaults to the pharmacy lab shot.
     * Pass `null` to render no photo at all: better an empty column than an
     * off-brand visual that does not serve the message.
     */
    image?: string | null;
    imageAlt?: string;
    /** Small overlay badge on the mechanism image. Defaults to "Préparé en pharmacie". */
    imageBadge?: string;
  };
  /**
   * Optional override of the hero reassurance bar. Defaults to speed / expertise /
   * risk-reversal, the three signals that move ad traffic.
   */
  trust?: { icon: 'stethoscope' | 'badgeCheck' | 'shieldCheck' | 'calendarCheck'; label: string }[];
  /**
   * Persona-matched Trustpilot verbatim, rendered just before the pricing table
   * (the moment the "is it worth 59 €" objection peaks).
   * Only ever use real published reviews.
   */
  review?: {
    quote: string;
    name: string;
    tag: string;
  };
  /** Optional benefit-led relance band. `image` adds a landscape visual beside it. */
  midCta?: {
    kicker?: string;
    title: string;
    highlight?: string;
    image?: string;
    imageAlt?: string;
  };
  /**
   * Optional override of the cohort-invite block (shown only when `proof` is absent).
   * Lets each persona show a relevant portrait instead of always recycling the founder.
   */
  cohort?: {
    /** `null` renders the invite without any portrait. */
    image: string | null;
    imageAlt?: string;
    /** Overlay name; omit to hide the name/role overlay entirely. */
    name?: string;
    role?: string;
    badge?: string;
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
