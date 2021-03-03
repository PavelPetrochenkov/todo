import createActions, { createAction } from '.'
import { ACTIONS_USER } from '../../constants'

export const logInAction = createActions(ACTIONS_USER.LOG_IN)

export const registrationAction = createActions(ACTIONS_USER.REGISTRATION)

export const getUserInfoAction = createActions(ACTIONS_USER.GET_USER)

export const logOutAction = createAction(ACTIONS_USER.LOG_OUT)

export const clearErrorAction = createAction(ACTIONS_USER.CLEAR_ERROR)
