// Données structurées communes (JSON-LD), siteGraph est injecté sur toutes les pages par BaseLayout.
// Uniquement des faits visibles sur le site : ne rien ajouter qui n'y figure pas.
export const SITE = 'https://mixt.care';

export const ORG_ID = `${SITE}/#organization`;
export const WEBSITE_ID = `${SITE}/#website`;
export const DERMATO_ID = `${SITE}/#bethsabee`;

export const siteGraph = [
  {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE}/`,
    name: 'Mixt',
    inLanguage: 'fr-FR',
    publisher: { '@id': ORG_ID },
  },
  {
    '@type': 'MedicalOrganization',
    '@id': ORG_ID,
    name: 'Mixt',
    url: `${SITE}/`,
    logo: { '@type': 'ImageObject', url: `${SITE}/favicons/android-chrome-512x512.png` },
    image: `${SITE}/images/og-home.png`,
    description:
      'Service français de soin de la peau en ligne : bilan gratuit, téléconsultation avec un médecin partenaire supervisé par un dermatologue, formule magistrale préparée en pharmacie si prescrite, et suivi dans la durée.',
    medicalSpecialty: 'Dermatology',
    areaServed: { '@type': 'Country', name: 'France' },
    knowsAbout: ['Acné adulte', 'Rosacée', 'Taches brunes', 'Mélasma'],
  },
];

// Dermatologue co-fondatrice : à inclure sur les pages qui la présentent (home, pathologies).
export const dermatologist = {
  '@type': ['Person', 'Physician'],
  '@id': DERMATO_ID,
  name: 'Dr Bethsabée Levy Garel',
  jobTitle: 'Dermatologue, co-fondatrice',
  medicalSpecialty: 'Dermatology',
  worksFor: { '@id': ORG_ID },
  image: `${SITE}/images/shoot-dermatologue.webp`,
};

export const breadcrumb = (url: string, name: string) => ({
  '@type': 'BreadcrumbList',
  '@id': `${url}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name, item: url },
  ],
});
