import { UserState } from '../../typescript/User'
import {
  clearErrorAction,
  getUserInfoAction,
  logInAction,
  logOutAction,
  registrationAction,
  checkLoginAction,
  resetPasswordAction,
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
    case resetPasswordAction.types.SUCCESS:
    case logInAction.types.SUCCESS: {
      return {
        ...state,
        user: { ...state.user, ...action.payload },
        isAuthError: false,
      }
    }
    case checkLoginAction.types.SUCCESS: {
      return {
        ...state,
        restoreLogin: action.payload.login,
      }
    }
    case checkLoginAction.types.FAIL:
    case registrationAction.types.FAIL:
    case resetPasswordAction.types.FAIL:
    case logInAction.types.FAIL: {
      return {
        ...state,
        isAuthError: true,
      }
    }
    case logOutAction.type:
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
    case clearErrorAction.type: {
      return {
        ...state,
        isAuthError: false,
      }
    }
  }
  return state
}

export default userReducer
