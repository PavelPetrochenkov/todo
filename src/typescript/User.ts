export type User = {
  id?: string
  login: string
  password?: string
  token?: string
}

export type UserState = {
  user: User
  isAuthError: boolean
  isAuthorized: boolean
}
