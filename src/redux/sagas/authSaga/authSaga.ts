import { put, call, select } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga/effects'
import {
  logInFail,
  registrationFail,
  logInSuccess,
  registrationSuccess,
  logOut,
} from '../../actions/userAction'
import { ACTIONS_USER } from '../../../constants'
import * as AuthAPI from '../../../api/AuthAPI'
import api from '../../../api/api'
import { getRefreshToken } from '../../selectors/userSelector'

type LoginUser = {
  type: string
  payload: {
    login: string
    password: string
  }
}

function* loginUser(action: LoginUser) {
  try {
    const response = yield call(
      AuthAPI.login,
      action.payload.login,
      action.payload.password
    )
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`
    localStorage.setItem('token', response.data.token)
    localStorage.setItem('refreshToken', response.data.refreshToken)
    yield put(
      logInSuccess({
        id: response.data.id,
        login: response.data.login,
        token: response.data.token,
        refreshToken: response.data.refreshToken,
      })
    )
  } catch {
    yield put(logInFail())
  }
}

type RegistrationUser = {
  type: string
  payload: {
    login: string
    password: string
  }
}

function* registrationUser(action: RegistrationUser) {
  try {
    const response = yield call(
      AuthAPI.registration,
      action.payload.login,
      action.payload.password
    )
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`
    localStorage.setItem('token', response.data.token)
    localStorage.setItem('refreshToken', response.data.refreshToken)
    yield put(
      logInSuccess({
        id: response.data.id,
        login: response.data.login,
        token: response.data.token,
        refreshToken: response.data.refreshToken,
      })
    )
    yield put(
      registrationSuccess({ id: response.data.id, login: response.data.login })
    )
  } catch {
    yield put(registrationFail())
  }
}

type RefreshToken = {
  type: string
  payload: {
    type: string
    payload: any
  }
}

function* refreshToken(action: RefreshToken) {
  try {
    const refreshToken = yield select(getRefreshToken)

    const response = yield call(AuthAPI.refreshToken, refreshToken)

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`
    localStorage.setItem('token', response.data.token)
    localStorage.setItem('refreshToken', response.data.refreshToken)

    yield put(
      logInSuccess({
        token: response.data.token,
        refreshToken: response.data.refreshToken,
      })
    )

    yield put({
      type: action.payload.type,
      payload: action.payload.payload,
    })
  } catch {
    yield put(logOut())
  }
}

export default function* authWatcher() {
  yield takeEvery(ACTIONS_USER.LOG_IN_REQUEST, loginUser)
  yield takeEvery(ACTIONS_USER.REGISTRATION_REQUEST, registrationUser)
  yield takeEvery(ACTIONS_USER.REFRESH_TOKENS_REQUEST, refreshToken)
}
