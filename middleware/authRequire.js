import { useCookie } from '#app';

export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('token')
  if (!token.value) {
    if (process.client) alert('test: not login')
    return '/login';
  }
});