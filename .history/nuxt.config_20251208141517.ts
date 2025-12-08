export default defineNuxtConfig({

  ssr: true,
  
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  modules: [
    "nuxt-icon",
    "@nuxt/ui"
  ],
  ui: {
    fonts: true
  },
  // Tell Nuxt UI not to look for external tailwind config
  tailwindcss: {
    exposeConfig: false,
    viewer: false
  },
  nitro: {
    preset: "cloudflare-pages",
    output: {
      publicDir: ".output/public",
      serverDir: '.output/server'
    },
    prerender: {
      failOnError: false,
      crawlLinks: true,
    },
    moduleSideEffects: ['unenv/runtime/fetch/index'],
    replace: {
      'import.meta.env': 'process.env'
    }
  },
  compatibilityDate: "2025-01-25",
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    }
  },
  hooks: {
    'build:before': () => {
      console.log('Starting fresh build...')
    }
  }
});