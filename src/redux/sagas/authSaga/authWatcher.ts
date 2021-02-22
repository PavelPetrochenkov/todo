import { takeEvery } from 'redux-saga/effects'
import { loginUser, registrationUser } from './authWorker'
import { ACTIONS_USER } from '../../../constants'

export default function* authWatcher() {
  yield takeEvery(ACTIONS_USER.LOG_IN_PENDING, loginUser)
  yield takeEvery(ACTIONS_USER.REGISTRATION_USER, registrationUser)
}
