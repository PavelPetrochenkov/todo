export type User = {
  id?: string
  login?: string
  password?: string
}

export type UserState = {
  user: User
  isAuthError: boolean
  restoreLogin?: string
}
