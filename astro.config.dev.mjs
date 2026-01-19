// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Development config without Cloudflare adapter
// https://astro.build/config
export default defineConfig({
  site: 'https://nailedopierdla.pages.dev', // Update with your actual domain
  
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date(),
    })
  ],
  
  vite: {
    plugins: [tailwindcss()]
  }
});
