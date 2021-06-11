import { fork } from 'redux-saga/effects'
import authSaga from './authSaga/authSaga'
import todosSaga from './todoSaga/todosSaga'
import filesSaga from './fileSaga/filesSaga'

export default function* rootWatcher() {
  yield fork(authSaga)
  yield fork(todosSaga)
  yield fork(filesSaga)
}
