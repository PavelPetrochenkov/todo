import { put, call } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga/effects'
import { createBrowserHistory } from 'history'
import {
  logInAction,
  registrationAction,
  getUserInfoAction,
  resetPasswordAction,
  checkLoginAction,
} from '../../actions/userAction'
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

function* loginUser(action: LoginUser):any {
  try {
    const response = yield call(AuthAPI.login, action.payload) as any
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`
    localStorage.setItem('refreshToken', response.data.refreshToken)
    localStorage.setItem('token', response.data.token)
    yield put(
      logInAction.success({
        id: response.data.id,
        login: response.data.login,
      })
    )
    history.push('/')
  } catch {
    yield put(logInAction.fail())
  }
}

type LoginTokenUser = {
  type: string
  payload: string
}

function* getUserInfo(action: LoginTokenUser):any {
  try {
    const response = yield call(AuthAPI.getUserInfo, action.payload) as any
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`
    localStorage.setItem('refreshToken', response.data.refreshToken)
    localStorage.setItem('token', response.data.token)

    yield put(
      getUserInfoAction.success({
        id: response.data.id,
        login: response.data.login,
      })
    )
    history.push('/')
  } catch {
    localStorage.refreshToken = ''
    localStorage.token = ''
    yield put(getUserInfoAction.fail())
  }
}

type RegistrationUser = {
  type: string
  payload: {
    login: string
    password: string
  }
}

function* registrationUser(action: RegistrationUser):any {
  try {
    const response = yield call(AuthAPI.registration, action.payload)
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`
    localStorage.setItem('refreshToken', response.data.refreshToken)
    localStorage.setItem('token', response.data.token)

    yield put(
      registrationAction.success({
        id: response.data.id,
        login: response.data.login,
      })
    )
    history.push('/')
  } catch {
    yield put(registrationAction.fail())
  }
}

type FindLogin = {
  type: string
  payload: string
}

function* checkLogin(action: FindLogin):any {
  try {
    const response = yield call(AuthAPI.checkLogin, action.payload)

    yield put(
      checkLoginAction.success({
        login: response.data.login,
      })
    )
  } catch {
    yield put(checkLoginAction.fail())
  }
}

export default function* authWatcher() {
  yield takeEvery(logInAction.types.REQUEST, loginUser)
  yield takeEvery(getUserInfoAction.types.REQUEST, getUserInfo)
  yield takeEvery(registrationAction.types.REQUEST, registrationUser)
  yield takeEvery(resetPasswordAction.types.REQUEST, registrationUser)
  yield takeEvery(checkLoginAction.types.REQUEST, checkLogin)
}
