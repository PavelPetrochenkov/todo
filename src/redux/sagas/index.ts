import { fork } from 'redux-saga/effects'
import authSaga from './authSaga/authSaga'

export default function* rootWatcher() {
  yield fork(authSaga)
}
