// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge'
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
})
