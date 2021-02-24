import api from './api'

export const login = (login: string, password: string) =>
  api({
    url: 'login/',
    data: {
      login,
      password,
    },
  })

export const getUserInfo = (refreshToken: string) =>
  api({
    url: 'user/info',
    data: {
      refreshToken,
    },
  })

export const registration = (login: string, password: string) =>
  api({
    url: 'registration/',
    data: {
      login,
      password,
    },
  })
