// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Production config for Cloudflare Pages
// https://astro.build/config
export default defineConfig({
  site: 'https://nailedopierdla.pages.dev', // Update with your actual domain
  
  adapter: cloudflare({
    mode: 'directory'
  }),

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