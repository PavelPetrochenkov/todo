import { IStore } from '../store'

export const isUserAuthorized = ({ userReducer }:IStore):boolean => userReducer.isAuthorized;