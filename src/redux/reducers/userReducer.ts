import { ACTIONS_USER } from '../../constants'
import { UserActions } from '../actions/userAction'
import { UserState } from '../../typescript/User'

const initialState: UserState = {
  isAuthorized: false,
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
    case ACTIONS_USER.LOG_IN_SUCCESS: {
      return {
        ...state,
        user: { ...state.user, ...action.payload },
        isAuthorized: true,
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
    case ACTIONS_USER.REFRESH_TOKENS_FAIL: {
      return {
        ...state,
        user: {
          login: 'Guest',
          password: '',
        },
        isAuthorized: false,
        isAuthError: false,
      }
    }
    case ACTIONS_USER.SAVE_LAST_ACTION: {
      return {
        ...state,
        lastAction: action.payload,
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
