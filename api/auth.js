import { useCookie, useState } from "#app"
import http from '~/api/request'
import { useUser } from '~/composables/states'

export const useLogin = ({ identifier, password }) => {
  useAuthFetch('/api/auth/local', {
    method: 'post',
    body: { identifier, password }
  }).then(res => {
    console.log('res', res.data)
    const token = useCookie('token')
    token.value = res.data.value?.jwt
    useState('user', res.data.value?.user)
  }).catch(error => {
    if (process.client) {
      alert('error')
    }
  })
}


export const login = ({ identifier, password }) => {
  return http.post('/api/auth/local', {
    data: { identifier, password }
  }).then(res => {
    console.log('res', res)
    const token = useCookie('token')
    token.value = res.jwt
    const user = useUser()
    user.value = res.user
    localStorage.setItem('user', JSON.stringify(res.user))
  })
}