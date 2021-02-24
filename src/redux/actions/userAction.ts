import { ACTIONS_USER } from '../../constants'
import { User } from '../../typescript/User'

type LogInDefault = {
  type: ACTIONS_USER.LOG_IN_SUCCESS | ACTIONS_USER.LOG_IN_REQUEST
  payload: User
}

export const logInSuccess = (user: User): LogInDefault => ({
  type: ACTIONS_USER.LOG_IN_SUCCESS,
  payload: user,
})

type RegistrationSuccess = {
  type: ACTIONS_USER.REGISTRATION_SUCCESS
  payload: User
}

export const registrationSuccess = (user: User): RegistrationSuccess => ({
  type: ACTIONS_USER.REGISTRATION_SUCCESS,
  payload: user,
})

export const logInRequest = (user: User): LogInDefault => ({
  type: ACTIONS_USER.LOG_IN_REQUEST,
  payload: user,
})

type AuthError = {
  type: ACTIONS_USER.LOG_IN_FAIL | ACTIONS_USER.REGISTRATION_FAIL
}

export const logInFail = (): AuthError => ({
  type: ACTIONS_USER.LOG_IN_FAIL,
})

export const registrationFail = (): AuthError => ({
  type: ACTIONS_USER.REGISTRATION_FAIL,
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

type RegistrationRequest = {
  type: ACTIONS_USER.REGISTRATION_REQUEST
  payload: User
}

export const registrationRequest = (user: User): RegistrationRequest => ({
  type: ACTIONS_USER.REGISTRATION_REQUEST,
  payload: user,
})

type LogInTokenRequest = {
  type: ACTIONS_USER.GET_USER_REQUEST
  payload: string
}

export const logInTokenRequest = (refreshToken: string): LogInTokenRequest => ({
  type: ACTIONS_USER.GET_USER_REQUEST,
  payload: refreshToken,
})

type LogInTokenSuccess = {
  type: ACTIONS_USER.GET_USER_SUCCESS
  payload: User
}

export const logInTokenSuccess = (user: User): LogInTokenSuccess => ({
  type: ACTIONS_USER.GET_USER_SUCCESS,
  payload: user,
})

type LogInTokenFail = {
  type: ACTIONS_USER.GET_USER_FAIL
}

export const logInTokenFail = (): LogInTokenFail => ({
  type: ACTIONS_USER.GET_USER_FAIL,
})

export type UserActions =
  | AuthError
  | LogInDefault
  | LogOut
  | ClearError
  | LogInTokenFail
  | LogInTokenSuccess
