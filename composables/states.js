let user = {}
if (process.client) {
  user = JSON.parse(localStorage.getItem('user'))
}
export const useUser = () => useState('user', () => user)

let app = {
  locale: 'tc'
}
export const useApp = () => useState('app', () => app)