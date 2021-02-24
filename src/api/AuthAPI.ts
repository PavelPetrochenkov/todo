import api from './api'

export const login = (login: string, password: string) =>
  api({
    url: 'login/',
    data: {
      login,
      password,
    },
  })

export const loginToken = (refreshToken: string) =>
  api({
    url: 'login/token',
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

export const refreshToken = (refreshToken: string) =>
  api({
    url: 'refresh/',
    data: {
      refreshToken,
    },
  })
