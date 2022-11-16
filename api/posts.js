import http from '~/api/request'

export const getPosts = ({ pageNum }) => {
  return http.get('/api/posts', {
    params: { pageNum }
  })
}