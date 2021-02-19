import { all } from 'redux-saga/effects'
import authWatcher from './authSaga/authWatcher'

export default function* rootWatcher() {
  yield all([authWatcher()])
}
