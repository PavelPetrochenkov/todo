import { IStore } from '../store'
import { User } from '../../typescript/User'

export const getIsUserAuthorized = ({ userReducer }: IStore): boolean =>
  userReducer.isAuthorized

export const getUser = ({ userReducer }: IStore): User => userReducer.user

export const getUserId = ({ userReducer }: IStore): string =>
  userReducer.user.id as string

export const getIsAuthError = ({ userReducer }: IStore): boolean =>
  userReducer.isAuthError
