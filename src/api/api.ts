import axios from 'axios'

const api = axios

api.defaults.baseURL = 'http://localhost:1328/api/'
api.defaults.method = 'POST'

export default api
