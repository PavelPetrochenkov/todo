import { takeEvery } from 'redux-saga/effects'
import {
  addTodo,
  getTodos,
  changeTextTodo,
  changeCheckTodo,
  checkAllTodos,
  deleteTodo,
  deleteCompletedTodos,
} from './todoWorker'
import { ACTIONS_TODO } from '../../../constants'

export default function* todoWatcher() {
  yield takeEvery(ACTIONS_TODO.GET_TODOS_PENDING, getTodos)
  yield takeEvery(ACTIONS_TODO.ADD_TODO_PENDING, addTodo)
  yield takeEvery(ACTIONS_TODO.CHANGE_TEXT_TODO_PENDING, changeTextTodo)
  yield takeEvery(ACTIONS_TODO.CHANGE_CHECK_TODO_PENDING, changeCheckTodo)
  yield takeEvery(ACTIONS_TODO.CHECK_ALL_TODOS_PENDING, checkAllTodos)
  yield takeEvery(ACTIONS_TODO.DELETE_TODO_PENDING, deleteTodo)
  yield takeEvery(
    ACTIONS_TODO.DELETE_COMPLETED_TODOS_PENDING,
    deleteCompletedTodos
  )
}
