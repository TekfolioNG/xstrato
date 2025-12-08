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
  // Add Tailwind config to fix the compilation loop
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
  experimental: {
  },
  compatibilityDate: "2025-01-25",
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 1000
      }
    },
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