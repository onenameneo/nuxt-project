import { useCookie, useFetch } from '#app'

export const useAuthFetch = (url) => {
  const token = useCookie('token')
  return useFetch(url, {
    onRequest({ options }) {
      options.headers = options.headers || {}
      options.headers.authorization = `Bear ${token.value}`
    }
  })
}
