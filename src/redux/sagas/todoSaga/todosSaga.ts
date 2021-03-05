import { takeEvery } from 'redux-saga/effects'
import { put, call } from 'redux-saga/effects'
import {
  getAllTodosAction,
  createTodoAction,
  deleteTodoAction,
  changeTextTodoAction,
  changeCheckTodoAction,
  checkAllTodosAction,
  deleteCompletedTodosAction,
} from '../../actions/todoAction'
import * as TodosAPI from '../../../api/TodosAPI'
import { getSocketId } from '../../../socket'

type AddTodo = {
  type: string
  payload: {
    userId: string
    text: string
  }
}

function* addTodo(action: AddTodo) {
  try {
    const response: any = yield call(
      TodosAPI.addTodo,
      action.payload,
      getSocketId()
    )

    yield put(createTodoAction.success(response.data.todo))
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
    const response: any = yield call(
      TodosAPI.changeTodoText,
      action.payload,
      getSocketId()
    )

    yield put(changeTextTodoAction.success(response.data.todo))
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
    const response: any = yield call(
      TodosAPI.changeTodoCheck,
      action.payload,
      getSocketId()
    )

    yield put(changeCheckTodoAction.success(response.data.todo))
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
    const response: any = yield call(
      TodosAPI.deleteTodo,
      action.payload,
      getSocketId()
    )

    yield put(deleteTodoAction.success(response.data.id))
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
    const response: any = yield call(TodosAPI.getTodos, action.payload)

    const isAllTodosCheck = !response.data.todos.find(
      (item: any) => !item.check
    )

    yield put(
      getAllTodosAction.success({ todos: response.data.todos, isAllTodosCheck })
    )
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
    const response: any = yield call(
      TodosAPI.checkAllTodos,
      action.payload,
      getSocketId()
    )

    const isAllTodosCheck = !response.data.todos.find(
      (item: any) => !item.check
    )

    yield put(
      checkAllTodosAction.success({
        todos: response.data.todos,
        isAllTodosCheck,
      })
    )
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
    const response: any = yield call(
      TodosAPI.deleteCompletedTodos,
      action.payload,
      getSocketId()
    )

    const isAllTodosCheck = !response.data.todos.find(
      (item: any) => !item.check
    )

    yield put(
      deleteCompletedTodosAction.success({
        todos: response.data.todos,
        isAllTodosCheck,
      })
    )
  } catch (err) {
    console.log(err)
  }
}

export default function* todosSaga() {
  yield takeEvery(getAllTodosAction.types.REQUEST, getTodos)
  yield takeEvery(createTodoAction.types.REQUEST, addTodo)
  yield takeEvery(changeTextTodoAction.types.REQUEST, changeTextTodo)
  yield takeEvery(changeCheckTodoAction.types.REQUEST, changeCheckTodo)
  yield takeEvery(checkAllTodosAction.types.REQUEST, checkAllTodos)
  yield takeEvery(deleteTodoAction.types.REQUEST, deleteTodo)
  yield takeEvery(
    deleteCompletedTodosAction.types.REQUEST,
    deleteCompletedTodos
  )
}
