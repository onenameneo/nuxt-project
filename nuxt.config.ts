// https://v3.nuxtjs.org/api/configuration/nuxt.config
import svgLoader from "vite-svg-loader"

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page' }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://localhost:1337/api',
        changeOrigin: true
      },
      '/uploads': {
        target: 'http://localhost:1337/uploads',
        changeOrigin: true
      }
    },
  },
  css: [
    '@/assets/style/main.css'
  ],
  vite: {
    plugins: [svgLoader()]
  },
  plugins: [
    // { src: '~/plugins/vue-lazyload.client.js', mode: 'client' }
  ]
})
