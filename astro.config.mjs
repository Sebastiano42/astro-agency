import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yourdomain.com', // TODO: Replace with your actual domain
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'load'
  },
  integrations: [
    tailwind(),
    sitemap()
  ],
});