import { IStore } from '../store'
import { User } from '../../typescript/User'

export const isUserAuthorized = ({ userReducer }: IStore): boolean =>
  userReducer.isAuthorized

export const getUser = ({ userReducer }: IStore): User => userReducer.user

export const isLogInError = ({ userReducer }: IStore): boolean =>
  userReducer.isLogInError
