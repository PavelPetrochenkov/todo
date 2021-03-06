import { takeEvery } from 'redux-saga/effects'
import { put, call } from 'redux-saga/effects'
import {
  getAllTodosSuccess,
  createTodoSuccess,
  deleteTodoSuccess,
  changeTextTodoSuccess,
  changeCheckTodoSuccess,
  checkAllTodosSuccess,
  deleteCompletedTodosSuccess,
} from '../../actions/todoAction'
import { ACTIONS_TODO } from '../../../constants'
import * as TodosAPI from '../../../api/TodosAPI'
import { logOut } from '../../actions/userAction'

type AddTodo = {
  type: string
  payload: {
    userId: string
    text: string
  }
}

function* addTodo(action: AddTodo) {
  try {
    const response:any = yield call(
      TodosAPI.addTodo,
      action.payload.userId,
      action.payload.text
    )

    yield put(createTodoSuccess(response.data.todo))
  } catch (err) {
    console.log(err)
  }
}

type ChangeTextTodo = {
  type: string
  payload: {
    id: string
    userId: string
    text: string
  }
}

function* changeTextTodo(action: ChangeTextTodo) {
  try {
    const response:any = yield call(
      TodosAPI.changeTodoText,
      action.payload.id,
      action.payload.userId,
      action.payload.text
    )

    yield put(changeTextTodoSuccess(response.data.todo))
  } catch (err) {
    console.log(err)
  }
}

type ChangeCheckTodo = {
  type: string
  payload: {
    id: string
    userId: string
    check: boolean
  }
}

function* changeCheckTodo(action: ChangeCheckTodo) {
  try {
    const response:any = yield call(
      TodosAPI.changeTodoCheck,
      action.payload.id,
      action.payload.userId,
      !action.payload.check
    )

    yield put(changeCheckTodoSuccess(response.data.todo))
  } catch (err) {
    console.log(err)
  }
}

type DeleteTodo = {
  type: string
  payload: {
    id: string
    userId: string
  }
}

function* deleteTodo(action: DeleteTodo) {
  try {
    const response:any = yield call(
      TodosAPI.deleteTodo,
      action.payload.id,
      action.payload.userId
    )

    yield put(deleteTodoSuccess(response.data.id))
  } catch (err) {
    console.log(err)
  }
}

type GetTodos = {
  type: string
  payload: string
}

function* getTodos(action: GetTodos) {
  try {
    const response:any = yield call(TodosAPI.getTodos, action.payload)

    yield put(getAllTodosSuccess(response.data.todos))
  } catch (err) {
    console.log(err)
  }
}

type CheckAllTodos = {
  type: string
  payload: {
    userId: string
    check: boolean
  }
}

function* checkAllTodos(action: CheckAllTodos) {
  try {
    const response:any = yield call(
      TodosAPI.checkAllTodos,
      action.payload.userId,
      !action.payload.check
    )

    yield put(checkAllTodosSuccess(response.data.todos))
  } catch (err) {
    console.log(err)
  }
}

type DeleteCompletedTodos = {
  type: string
  payload: string
}

function* deleteCompletedTodos(action: DeleteCompletedTodos) {
  try {
    const response:any = yield call(TodosAPI.deleteCompletedTodos, action.payload)

    yield put(deleteCompletedTodosSuccess(response.data.todos))
  } catch (err) {
    console.log(err)
  }
}

export default function* todosSaga() {
  yield takeEvery(ACTIONS_TODO.GET_TODOS_REQUEST, getTodos)
  yield takeEvery(ACTIONS_TODO.ADD_TODO_REQUEST, addTodo)
  yield takeEvery(ACTIONS_TODO.CHANGE_TEXT_TODO_REQUEST, changeTextTodo)
  yield takeEvery(ACTIONS_TODO.CHANGE_CHECK_TODO_REQUEST, changeCheckTodo)
  yield takeEvery(ACTIONS_TODO.CHECK_ALL_TODOS_REQUEST, checkAllTodos)
  yield takeEvery(ACTIONS_TODO.DELETE_TODO_REQUEST, deleteTodo)
  yield takeEvery(
    ACTIONS_TODO.DELETE_COMPLETED_TODOS_REQUEST,
    deleteCompletedTodos
  )
}
