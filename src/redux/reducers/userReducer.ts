import { ACTIONS_USER } from '../../constants'
import { UserActions } from '../actions/userAction'
import { UserState } from '../../interfaces/IUser'

const initialState : UserState = {
    isAuthorized:false,
}

function userReducer(state:UserState = initialState, action:UserActions):UserState {
    switch (action.type) {
        case ACTIONS_USER.LOG_IN: {
            return {
                user:action.payload,
                isAuthorized:true,
            }
        }
        case ACTIONS_USER.LOG_OUT: {
            return {
                isAuthorized:false,
            }
        }
    }
    return state;
}

export default userReducer
