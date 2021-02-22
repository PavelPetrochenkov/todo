import { fork } from 'redux-saga/effects'
import authSaga from './authSaga/authSaga'
import todosSaga from './todoSaga/todosSaga'

export default function* rootWatcher() {
  yield fork(authSaga)
  yield fork(todosSaga)
}
