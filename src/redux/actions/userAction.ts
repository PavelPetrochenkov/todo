import { ACTIONS_USER } from '../../constants'
import { User } from '../../interfaces/IUser'

type LogIn = {
    type:ACTIONS_USER.LOG_IN,
    payload:User
}

export const logIn = (user:User):LogIn => ({
    type: ACTIONS_USER.LOG_IN,
    payload: user
})

type LogOut = {
    type:ACTIONS_USER.LOG_OUT,
}

export const logOut = ():LogOut => ({
    type: ACTIONS_USER.LOG_OUT,
})

export type UserActions = LogIn | LogOut;