import { useCookie } from '#app';

export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('token');
  console.log('token', token.value)
  if (!token.value) {
    return '/login';
  }
});