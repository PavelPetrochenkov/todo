import { ACTIONS_USER } from '../../constants'
import { User } from '../../typescript/User'

type LogInDefault = {
  type: ACTIONS_USER.LOG_IN_SUCCESS | ACTIONS_USER.LOG_IN_PENDING
  payload: User
}

export const logInSuccess = (user: User): LogInDefault => ({
  type: ACTIONS_USER.LOG_IN_SUCCESS,
  payload: user,
})

type AuthError = {
  type: ACTIONS_USER.AUTH_FAIL
}

export const logInPending = (user: User): LogInDefault => ({
  type: ACTIONS_USER.LOG_IN_PENDING,
  payload: user,
})

export const authFail = (): AuthError => ({
  type: ACTIONS_USER.AUTH_FAIL,
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

type Registration = {
  type: ACTIONS_USER.REGISTRATION_USER
  payload: User
}

export const registrationAction = (user: User): Registration => ({
  type: ACTIONS_USER.REGISTRATION_USER,
  payload: user,
})

export type UserActions = AuthError | LogInDefault | LogOut | ClearError
