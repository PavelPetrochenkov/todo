import createActions, { createAction } from '.'

export const logInAction = createActions('LOG_IN')

export const registrationAction = createActions('REGISTRATION')

export const getUserInfoAction = createActions('GET_USER')

export const logOutAction = createAction('LOG_OUT')

export const clearErrorAction = createAction('CLEAR_ERROR')
