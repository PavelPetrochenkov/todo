import { ACTIONS_USER } from '../../constants'
import { UserActions } from '../actions/userAction'
import { UserState } from '../../typescript/User'

const initialState : UserState = {
    isAuthorized:false,
    isLogInError:false,
    user:{
        login:'Guest',
        password:''
    }
}

const users = [
    { id:1, login:'123@123.123', password:'123123'}, 
    { id:2, login:'pavel@gmail.com', password:'123123'}
];

function userReducer(state:UserState = initialState, action:UserActions):UserState {
    switch (action.type) {
        case ACTIONS_USER.LOG_IN: {
            const logState:UserState = !!users.find((user)=>(user.login === action.payload.login 
            && user.password === action.payload.password))
            ?{
                user:action.payload,
                isAuthorized:true,
                isLogInError:false,
            }
            : {
                ...state,
                isLogInError:true
            }

            return {
                ...logState
            }
        }
        case ACTIONS_USER.LOG_OUT: {
            return {
                user:{
                    login:'Guest',
                    password:''
                },
                isAuthorized:false,
                isLogInError:false
            }
        }
        case ACTIONS_USER.CLEAR_ERROR: {
            return {
                ...state,
                isLogInError:false
            }
        }
    }
    return state;
}

export default userReducer
