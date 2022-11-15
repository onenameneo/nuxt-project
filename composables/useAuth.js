import { useCookie, useFetch } from '#app'
const baseUrl = process.env?.NUXT_PUBLIC_API_BASE || 'http://localhost:1337';

export const useAuthFetch = (url) => {
  const token = useCookie('token')
  return useFetch(`${baseUrl}/${url}`, {
    onRequest({ options }) {
      options.headers = options.headers || {}
      if (token.value) options.headers.authorization = `Bear ${token.value}`
    },
    onRequestError(error) {
      if (process.client) {
        alert(error.message)
      }
    },
    onResponse(res) {
      return res.data
    },
    onResponseError(error) {
      if (process.client) {
        alert(error.message)
      }
    }
  })
}
