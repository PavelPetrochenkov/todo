import { ACTIONS_USER } from '../../constants'
import { IUser } from '../../interfaces/IUser'

interface ILogIn{
    type:ACTIONS_USER.LOG_IN,
    payload:IUser
}

export const logIn = (user:IUser):ILogIn => ({
    type: ACTIONS_USER.LOG_IN,
    payload: user
})

interface ILogOut{
    type:ACTIONS_USER.LOG_OUT,
}

export const logOut = ():ILogOut => ({
    type: ACTIONS_USER.LOG_OUT,
})

export type IUserActions = ILogIn | ILogOut;