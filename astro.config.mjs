// @ts-check
import {defineConfig, passthroughImageService} from 'astro/config'
import svelte from '@astrojs/svelte'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://rostislavnagimov.github.io',
  integrations: [svelte(), sitemap()],
  compressHTML: true,
  prefetch: {prefetchAll: true, defaultStrategy: 'hover'},
  image: {service: passthroughImageService()},
  build: {inlineStylesheets: 'auto'},
  vite: {
    build: {
      cssMinify: 'lightningcss',
      minify: 'terser',
      terserOptions: {
        compress: {
          passes: 3,
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.info', 'console.debug', 'console.warn'],
          unsafe: true,
          unsafe_arrows: true,
          unsafe_comps: true,
          unsafe_math: true,
          unsafe_methods: true,
          unsafe_proto: true,
          toplevel: true
        },
        mangle: {
          toplevel: true
        },
        format: {
          comments: false
        }
      }
    }
  }
})