import { all } from 'redux-saga/effects'
import authWatcher from './authSaga/authWatcher'
import todoWatcher from './todoSaga/todoWatcher'

export default function* rootWatcher() {
  yield all([authWatcher(), todoWatcher()])
}
