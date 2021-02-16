import { ACTIONS_USER } from '../../constants'
import { User } from '../../typescript/User'

type LogIn = {
  type: ACTIONS_USER.LOG_IN
  payload: User
}

export const logIn = (user: User): LogIn => ({
  type: ACTIONS_USER.LOG_IN,
  payload: user,
})

type LogOut = {
  type: ACTIONS_USER.LOG_OUT
}

export const logOut = (): LogOut => ({
  type: ACTIONS_USER.LOG_OUT,
})

type ClearError = {
  type: ACTIONS_USER.CLEAR_ERROR
}

export const clearError = (): ClearError => ({
  type: ACTIONS_USER.CLEAR_ERROR,
})

export type UserActions = LogIn | LogOut | ClearError
