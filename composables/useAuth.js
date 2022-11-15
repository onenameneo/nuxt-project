import { useCookie, useFetch } from '#app'
const baseURL = process.env?.NUXT_PUBLIC_API_BASE || 'http://localhost:1337';

export const useAuthFetch = (url, opts) => {
  const token = useCookie('token')
  return useFetch(url, {
    ...opts,
    baseURL,
    immediate: false,
    initialCache: false,
    onRequest({ options }) {
      if (opts.headers) {
        options.headers = { ...opts.headers }
      } else {
        options.headers = options.headers || {}
      }
      if (token.value) options.headers.authorization = `Bear ${token.value}`
    },
    onRequestError(error) {
      if (process.client) {
        alert('Network Error!')
      }
    },
    onResponse(res) {
      console.log('res', res)
      return res.data
    },
    onResponseError(error) {
      if (process.client) {
        console.log('error', error.error)
        alert(error.message)
      }
    }
  })
}
