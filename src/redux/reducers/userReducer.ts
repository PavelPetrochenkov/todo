import { ACTIONS_USER } from '../../constants'
import { IUserActions } from '../actions/userAction'
import { IUserState } from '../../interfaces/IUser'

const initialState : IUserState = {
    isAuthorized:false,
}

function userReducer(state:IUserState = initialState, action:IUserActions):IUserState {
    switch (action.type) {
        case ACTIONS_USER.LOG_IN: {
            return {
                ...state,
                user:action.payload,
                isAuthorized:true,
            }
        }
        case ACTIONS_USER.LOG_OUT: {
            return {
                ...state,
                isAuthorized:false,
            }
        }
    }
    return state;
}

export default userReducer
