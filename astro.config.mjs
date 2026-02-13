import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://yourdomain.com', // TODO: Replace with your actual domain
  adapter: node({ mode: 'standalone' }),
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover'
  },
  integrations: [
    tailwind(),
    sitemap()
  ],
});