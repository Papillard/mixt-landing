// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mixt.care',
  integrations: [
    react(),
    // Exclut /vos-donnees du sitemap : page accessible uniquement par URL
    // (non indexée) tant qu'elle n'est pas relue et liée depuis le site.
    sitemap({ filter: (page) => !page.includes('/vos-donnees') }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
