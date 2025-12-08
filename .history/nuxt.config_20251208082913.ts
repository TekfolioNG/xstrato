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
    // Add this to fix the double slash issue
    replace: {
      'import.meta.env': 'process.env'
    }
  },
  experimental: {
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
  // Add this to prevent the double-slash path issue
  hooks: {
    'build:before': () => {
      console.log('Starting fresh build...')
    }
  }
});