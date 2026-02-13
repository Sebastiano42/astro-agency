import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://yourdomain.com', // TODO: Replace with your actual domain
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