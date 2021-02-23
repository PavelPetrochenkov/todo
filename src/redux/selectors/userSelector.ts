import { IStore } from '../store'
import { User } from '../../typescript/User'

export const isUserAuthorized = ({ userReducer }: IStore): boolean =>
  userReducer.isAuthorized

export const getUser = ({ userReducer }: IStore): User => userReducer.user

export const getUserId = ({ userReducer }: IStore): string =>
  userReducer.user.id || ''

export const isAuthError = ({ userReducer }: IStore): boolean =>
  userReducer.isAuthError
