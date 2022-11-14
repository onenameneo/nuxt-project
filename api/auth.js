import { useFetch, useCookie, useState } from "#app"

export const login = ({ identifier, password }) => {
  return useFetch('/api/auth/local', {
    method: 'post',
    body: { identifier, password }
  }).then(res => {
    console.log('res', res.data)
    const token = useCookie('token')
    token.value = res.data.value.jwt
    useState('user', res.data.value.user)
  })
}