import { put, call } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga/effects'
import {
  logInFail,
  registrationFail,
  logInSuccess,
  registrationSuccess,
} from '../../actions/userAction'
import { ACTIONS_USER } from '../../../constants'
import * as AuthAPI from '../../../api/AuthAPI'
import api from '../../../api/api'

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
    yield put(
      registrationSuccess({ id: response.data.id, login: response.data.login })
    )
  } catch {
    yield put(registrationFail())
  }
}

export default function* authWatcher() {
  yield takeEvery(ACTIONS_USER.LOG_IN_REQUEST, loginUser)
  yield takeEvery(ACTIONS_USER.REGISTRATION_REQUEST, registrationUser)
}
