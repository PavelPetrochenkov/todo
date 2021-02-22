import axios from 'axios'
import { put } from 'redux-saga/effects'
import { authFail, logInSuccess } from '../../actions/userAction'

export function* loginUser(action: any) {
  try {
    const { data } = yield axios({
      method: 'post',
      url: 'http://localhost:1328/api/login',
      data: {
        login: action.payload.login,
        password: action.payload.password,
      },
    })

    yield put(logInSuccess({ id: data.id, login: data.login }))
  } catch {
    yield put(authFail())
  }
}

export function* registrationUser(action: any) {
  try {
    yield axios({
      method: 'post',
      url: 'http://localhost:1328/api/registration',
      data: {
        login: action.payload.login,
        password: action.payload.password,
      },
    })
  } catch {
    yield put(authFail())
  }
}
