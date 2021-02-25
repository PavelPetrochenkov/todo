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

export const logInRequest = (user: User): LogInDefault => ({
  type: ACTIONS_USER.LOG_IN_REQUEST,
  payload: user,
})

type RegistrationDefault = {
  type: ACTIONS_USER.REGISTRATION_REQUEST | ACTIONS_USER.REGISTRATION_SUCCESS
  payload: User
}

export const registrationRequest = (user: User): RegistrationDefault => ({
  type: ACTIONS_USER.REGISTRATION_REQUEST,
  payload: user,
})

export const registrationSuccess = (user: User): RegistrationDefault => ({
  type: ACTIONS_USER.REGISTRATION_SUCCESS,
  payload: user,
})

type GetUserRequest = {
  type: ACTIONS_USER.GET_USER_REQUEST
  payload: string
}

export const getUserRequest = (refreshToken: string): GetUserRequest => ({
  type: ACTIONS_USER.GET_USER_REQUEST,
  payload: refreshToken,
})

type GetUserSuccess = {
  type: ACTIONS_USER.GET_USER_SUCCESS
  payload: User
}

export const getUserSuccess = (user: User): GetUserSuccess => ({
  type: ACTIONS_USER.GET_USER_SUCCESS,
  payload: user,
})

type AuthFail = {
  type:
    | ACTIONS_USER.LOG_IN_FAIL
    | ACTIONS_USER.REGISTRATION_FAIL
    | ACTIONS_USER.LOG_OUT
    | ACTIONS_USER.CLEAR_ERROR
    | ACTIONS_USER.GET_USER_FAIL
}

export const logInFail = (): AuthFail => ({
  type: ACTIONS_USER.LOG_IN_FAIL,
})

export const registrationFail = (): AuthFail => ({
  type: ACTIONS_USER.REGISTRATION_FAIL,
})

export const logOut = (): AuthFail => ({
  type: ACTIONS_USER.LOG_OUT,
})

export const clearError = (): AuthFail => ({
  type: ACTIONS_USER.CLEAR_ERROR,
})

export const getUserFail = (): AuthFail => ({
  type: ACTIONS_USER.GET_USER_FAIL,
})

export type UserActions =
  | AuthFail
  | LogInDefault
  | GetUserSuccess
  | RegistrationDefault
