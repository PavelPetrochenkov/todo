import createActions from '.'
import { ACTIONS_USER } from '../../constants'
import { User } from '../../typescript/User'

type LogIn = {
  request: (
    payload: User
  ) => {
    type: string
    payload: User
  }
  success: (
    payload: User
  ) => {
    type: string
    payload: User
  }
  fail: () => {
    type: string
  }
  types: {
    REQUEST: string
    SUCCESS: string
    FAIL: string
  }
}

export const logInAction = createActions(ACTIONS_USER.LOG_IN)

type Registration = {
  request: (
    payload: User
  ) => {
    type: string
    payload: User
  }
  success: (
    payload: User
  ) => {
    type: string
    payload: User
  }
  fail: () => {
    type: string
  }
  types: {
    REQUEST: string
    SUCCESS: string
    FAIL: string
  }
}

export const registrationAction: Registration = createActions(
  ACTIONS_USER.REGISTRATION
)

type GetUserInfo = {
  request: (
    payload: User
  ) => {
    type: string
    payload: string
  }
  success: (
    payload: User
  ) => {
    type: string
    payload: User
  }
  fail: () => {
    type: string
  }
  types: {
    REQUEST: string
    SUCCESS: string
    FAIL: string
  }
}

export const getUserInfoAction: GetUserInfo = createActions(
  ACTIONS_USER.GET_USER
)

type AuthFail = {
  type: string
}

export const logOut = (): AuthFail => ({
  type: ACTIONS_USER.LOG_OUT,
})

export const clearError = (): AuthFail => ({
  type: ACTIONS_USER.CLEAR_ERROR,
})
