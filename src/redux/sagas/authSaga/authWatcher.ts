import { takeEvery } from 'redux-saga/effects'
import { loginUser } from './authWorker'

export default function* authWatcher() {
  yield takeEvery('LOGIN_USER', loginUser)
}
