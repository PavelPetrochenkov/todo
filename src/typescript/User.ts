export type User = {
  id?: string
  login: string
  password: string
}

export type UserState = {
  user: User
  isLogInError: boolean
  isAuthorized: boolean
}
