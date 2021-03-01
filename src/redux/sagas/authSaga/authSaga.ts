import { put, call } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga/effects'
import { createBrowserHistory } from 'history'
import {
  logInFail,
  registrationFail,
  logInSuccess,
  getUserSuccess,
  getUserFail,
} from '../../actions/userAction'
import { ACTIONS_USER } from '../../../constants'
import * as AuthAPI from '../../../api/AuthAPI'
import api from '../../../api/api'

const history = createBrowserHistory()

type LoginUser = {
  type: string
  payload: {
    login: string
    password: string
  }
}

type loginUserResponse = {
  data: {
    token:string
    refreshToken:string
    id:string
    login:string
  }
}

function* loginUser(action: LoginUser) {
  try {
    const response:loginUserResponse = yield call(
      AuthAPI.login,
      action.payload.login,
      action.payload.password
    )
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`
    localStorage.setItem('refreshToken', response.data.refreshToken)
    localStorage.setItem('token', response.data.token)
    yield put(
      logInSuccess({
        id: response.data.id,
        login: response.data.login,
      })
    )
    history.push('/')
  } catch {
    yield put(logInFail())
  }
}

type LoginTokenUser = {
  type: string
  payload: string
}

type getUserInfoResponse = {
  data: {
    token:string
    refreshToken:string
    id:string
    login:string
  }
}

function* getUserInfo(action: LoginTokenUser) {
  try {
    const response:getUserInfoResponse = yield call(AuthAPI.getUserInfo, action.payload)
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`
    localStorage.setItem('refreshToken', response.data.refreshToken)
    localStorage.setItem('token', response.data.token)

    yield put(
      getUserSuccess({
        id: response.data.id,
        login: response.data.login,
      })
    )
    history.push('/')
  } catch {
    localStorage.refreshToken = ''
    localStorage.token = ''
    yield put(getUserFail())
  }
}

type RegistrationUser = {
  type: string
  payload: {
    login: string
    password: string
  }
}

type registrationUserResponse = {
  data: {
    token:string
    refreshToken:string
    id:string
    login:string
  }
}

function* registrationUser(action: RegistrationUser) {
  try {
    const response:registrationUserResponse = yield call(
      AuthAPI.registration,
      action.payload.login,
      action.payload.password
    )
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`
    localStorage.setItem('refreshToken', response.data.refreshToken)
    localStorage.setItem('token', response.data.token)

    yield put(
      logInSuccess({
        id: response.data.id,
        login: response.data.login,
      })
    )
    history.push('/')
  } catch {
    yield put(registrationFail())
  }
}

export default function* authWatcher() {
  yield takeEvery(ACTIONS_USER.LOG_IN_REQUEST, loginUser)
  yield takeEvery(ACTIONS_USER.GET_USER_REQUEST, getUserInfo)
  yield takeEvery(ACTIONS_USER.REGISTRATION_REQUEST, registrationUser)
}
