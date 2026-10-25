// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rostislavnagimov.github.io',
  integrations: [svelte(), sitemap()],
  compressHTML: true,
  prefetch: { defaultStrategy: 'hover' },
  image: { service: passthroughImageService() },
  build: { inlineStylesheets: 'auto' },
  vite: {
    build: {
      cssMinify: 'lightningcss',
      // minify: 'terser', terserOptions: { ... }  // включите после сравнения размеров
    },
  },
});