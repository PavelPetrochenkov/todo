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

export const checkLogin = (login: string) =>
  api({
    url: 'login/check/',
    data: {
      login,
    },
  })

export const resetPassword = (data: {
  passwordConfirm: string
  password: string
}) =>
  api({
    url: 'registration/',
    data: {
      ...data,
    },
  })
