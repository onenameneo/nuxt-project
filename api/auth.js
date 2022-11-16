import { useCookie } from "#app"
import http from '~/api/request'
import { useUser } from '~/composables/states'

export const login = ({ identifier, password }) => {
  return http.post('/api/auth/local', {
    data: { identifier, password }
  }).then(res => {
    const token = useCookie('token')
    token.value = res.jwt
    const user = useUser()
    user.value = res.user
    localStorage.setItem('user', JSON.stringify(res.user))
  })
}