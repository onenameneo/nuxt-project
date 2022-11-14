// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    'nuxt-windicss',
    '@nuxtjs/strapi',
    '@sidebase/nuxt-auth'
  ],
  strapi: {
    url: 'http://localhost:3000',
    cookie: {},
    cookieName: 'strapi_jwt'
  },
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
    }
  }
})
