import { IStore } from '../store'
import { LastAction, User } from '../../typescript/User'

export const getIsUserAuthorized = ({ userReducer }: IStore): boolean =>
  userReducer.isAuthorized

export const getUser = ({ userReducer }: IStore): User => userReducer.user

export const getUserId = ({ userReducer }: IStore): string =>
  userReducer.user.id as string

export const getIsAuthError = ({ userReducer }: IStore): boolean =>
  userReducer.isAuthError

export const getToken = ({ userReducer }: IStore): string =>
  userReducer.user.token as string

export const getRefreshToken = ({ userReducer }: IStore): string =>
  userReducer.user.refreshToken as string
