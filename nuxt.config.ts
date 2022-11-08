// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    'nuxt-windicss',
    '@nuxtjs/strapi'
  ],
  strapi: {
    cookie: {},
    cookieName: 'strapi_jwt'
  }
})
