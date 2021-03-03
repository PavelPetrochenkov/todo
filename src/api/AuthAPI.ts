import api from './api'

export const login = (data: { login: string; password: string }) =>
  api({
    url: 'login/',
    data: {
      ...data,
    },
  })

export const getUserInfo = (refreshToken: string) =>
  api({
    url: 'user/info',
    data: {
      refreshToken,
    },
  })

export const registration = (data: { login: string; password: string }) =>
  api({
    url: 'registration/',
    data: {
      ...data,
    },
  })
