import { ACTIONS_USER } from '../../constants'
import { UserState } from '../../typescript/User'
import {
  getUserInfoAction,
  logInAction,
  registrationAction,
} from '../actions/userAction'

const initialState: UserState = {
  isAuthError: false,
  user: {
    login: '',
    password: '',
  },
}

function userReducer(state: UserState = initialState, action: any): UserState {
  switch (action.type) {
    case getUserInfoAction.types.SUCCESS:
    case logInAction.types.SUCCESS: {
      return {
        ...state,
        user: { ...state.user, ...action.payload },
        isAuthError: false,
      }
    }
    case registrationAction.types.FAIL:
    case logInAction.types.FAIL: {
      return {
        ...state,
        isAuthError: true,
      }
    }
    case ACTIONS_USER.LOG_OUT:
    case getUserInfoAction.types.FAIL: {
      localStorage.refreshToken = ''
      localStorage.token = ''
      return {
        ...state,
        user: {
          id: '',
          login: 'Guest',
          password: '',
        },
        isAuthError: false,
      }
    }
    case ACTIONS_USER.CLEAR_ERROR: {
      return {
        ...state,
        isAuthError: false,
      }
    }
  }
  return state
}

export default userReducer
