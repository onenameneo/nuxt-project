import http from '~/api/request'

export const getPosts = ({ pageNum }) => {
  return http.get('/api/posts', {
    params: { pageNum }
  })
}

export const getPost = (postId) => {
  return http.get(`/api/posts/${postId}`)
}

export const updatePost = (postId, post) => {
  return http.put(`/api/posts/${postId}`, {
    data: post
  })
}