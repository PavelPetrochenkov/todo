import axios from 'axios'

const api = axios

api.defaults.baseURL = 'http://localhost:1328/api/'
api.defaults.method = 'POST'

api.interceptors.response.use(
  (response) => {
    return response
  },
  async function (error) {
    const originalRequest = error.config
    if (error.response.status === 403) {
      await refreshAccessToken()
      return api({
        url: originalRequest.url,
        data: JSON.parse(originalRequest.data),
      })
    }
    return Promise.reject(error)
  }
)

const refreshAccessToken = async () => {
  const response: any = await api({
    url: 'login/token',
    data: {
      refreshToken: localStorage.refreshToken,
    },
  })
  api.defaults.headers.Authorization = `Bearer ${response.data.token}`
  localStorage.setItem('refreshToken', response.data.refreshToken)
}

export default api
