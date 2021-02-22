import { put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga/effects'
import { authFail, logInSuccess } from '../../actions/userAction'
import { ACTIONS_USER } from '../../../constants'
import * as AuthAPI from '../../../api/AuthAPI'

export default function* authWatcher() {
  yield takeEvery(ACTIONS_USER.LOG_IN_REQUESTED, loginUser)
  yield takeEvery(ACTIONS_USER.REGISTRATION_USER, registrationUser)
}

function* loginUser(action: any) {
  try {
    const { data } = yield AuthAPI.login(
      action.payload.login,
      action.payload.password
    )

    yield put(logInSuccess({ id: data.id, login: data.login }))
  } catch {
    yield put(authFail())
  }
}

function* registrationUser(action: any) {
  try {
    yield AuthAPI.registration(action.payload.login, action.payload.password)
  } catch {
    yield put(authFail())
  }
}
