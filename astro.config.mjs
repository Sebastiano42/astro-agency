import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://sebastianomoniaci.it',
  adapter: vercel(),
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover'
  },
  integrations: [
    tailwind(),
    sitemap()
  ],
});