import { useCookie } from '#app'
const baseURL = process.env?.NUXT_PUBLIC_API_BASE || 'http://localhost:1337'
const TOKEN_KEY = 'token'

enum methods {
  get = 'get',
  post = 'post',
  put = 'put',
  delete = 'delete'
}

interface requestOpts {
  params?: object,
  data?: object,
  headers?: {
    authorization?: string
  }
}

const createFetch = (method: methods) => {
  return (url: string, opts: requestOpts) => {
    const token = useCookie(TOKEN_KEY)
    console.log('token', token.value)
    const headers = opts?.headers || {}
    if (token.value) headers.authorization = `Bearer ${token.value}`
    console.log('headers', headers)
    return $fetch(url, {
      baseURL,
      method,
      headers,
      params: opts?.params,
      body: opts?.data,
      onRequestError(error) {
        if (process.client) {
          alert('Network Error!')
        }
      },
      onResponse({ response }) {
        console.log('response', response)
        return response._data
      },
      onResponseError({ response }) {
        if (process.client) {
          const msg = response._data.error.message
          alert(msg)
        }
      }
    })
  }
}

export default {
  get: createFetch(methods.get),
  post: createFetch(methods.post),
  put: createFetch(methods.put),
  delete: createFetch(methods.delete),
}