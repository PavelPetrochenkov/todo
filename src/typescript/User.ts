export type User = {
  id?: string
  login?: string
  password?: string
  token?: string
  refreshToken?: string
}

export type LastAction = {
  type: string
  payload: any
}

export type UserState = {
  user: User
  isAuthError: boolean
  isAuthorized: boolean
  lastAction?: LastAction
}
