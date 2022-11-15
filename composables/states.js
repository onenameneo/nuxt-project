let userInfo = {}
if (process.client) {
  userInfo = JSON.parse(localStorage.getItem('user'))
}
export const useUser = () => useState('user', () => userInfo)