import { ACTIONS_USER } from '../../constants'
import { UserActions } from '../actions/userAction'
import { UserState } from '../../typescript/User'

const initialState: UserState = {
  isAuthError: false,
  user: {
    login: '',
    password: '',
  },
}

function userReducer(
  state: UserState = initialState,
  action: UserActions
): UserState {
  switch (action.type) {
    case ACTIONS_USER.GET_USER_SUCCESS:
    case ACTIONS_USER.LOG_IN_SUCCESS: {
      return {
        ...state,
        user: { ...state.user, ...action.payload },
        isAuthError: false,
      }
    }
    case ACTIONS_USER.REGISTRATION_FAIL:
    case ACTIONS_USER.LOG_IN_FAIL: {
      return {
        ...state,
        isAuthError: true,
      }
    }
    case ACTIONS_USER.LOG_OUT:
    case ACTIONS_USER.GET_USER_FAIL: {
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
