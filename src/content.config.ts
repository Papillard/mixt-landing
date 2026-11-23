// Collections de contenu. Le blog SEO : un fichier .md par article dans src/content/blog/.
// Mode d'emploi : docs/seo/sprints/blog-howto.md
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    /** <title> SEO, 60 caractères environ, requête cible en tête */
    title: z.string(),
    /** meta description, 150 caractères environ */
    description: z.string(),
    /** H1 visible (peut différer du title) */
    h1: z.string(),
    /** sur-titre en DM Mono au-dessus du H1 */
    kicker: z.string(),
    /** chapô du hero, 2 ou 3 phrases */
    intro: z.string(),
    /** photo approuvée uniquement (public/images/real/…), sinon laisser vide et nommer le placeholder */
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    /** nom du placeholder gris affiché si pas de photo : PH-<slug>-hero */
    heroPlaceholder: z.string().optional(),
    /** landing pilier liée */
    pillar: z.enum(['rosacee', 'taches', 'acne', 'hyperpigmentation']),
    /** mot du CTA « Parler de votre … à un médecin » (défaut : selon le pilier) */
    ctaTopic: z.string().optional(),
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date(),
    reviewedBy: z.string().default('Relecture médicale en cours'),
    /** encadré « Quand consulter » : une ligne par signe */
    whenToConsult: z.array(z.string()).default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    related: z.array(z.object({ href: z.string(), label: z.string() })).default([]),
    /** brouillon : exclu du build */
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
