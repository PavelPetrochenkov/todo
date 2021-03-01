import axios from 'axios'
import { createBrowserHistory } from 'history'

const api = axios
const history = createBrowserHistory({ forceRefresh: true })

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
  try {
    const response = await api({
      url: 'refresh',
      data: {
        refreshToken: localStorage.refreshToken,
      },
    })

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`
    localStorage.setItem('refreshToken', response.data.refreshToken)
    localStorage.setItem('token', response.data.token)
  } catch (err) {
    if (err.response.status === 401) {
      localStorage.refreshToken = ''
      localStorage.token = ''
      history.push('/login')
    }
    return Promise.reject(err)
  }
}

export default api
