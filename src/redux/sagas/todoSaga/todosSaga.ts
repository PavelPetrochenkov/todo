import { takeEvery } from 'redux-saga/effects'
import { put } from 'redux-saga/effects'
import { Todo } from '../../../typescript/Todos'
import {
  setTodos,
  createTodoSuccess,
  deleteTodoSuccess,
  changeTextTodoSuccess,
  changeCheckTodoSuccess,
  checkAllTodosSuccess,
  deleteCompletedTodosSuccess,
} from '../../actions/todoAction'
import { ACTIONS_TODO } from '../../../constants'
import * as TodosAPI from '../../../api/TodosAPI'

export default function* todosSaga() {
  yield takeEvery(ACTIONS_TODO.GET_TODOS_REQUESTED, getTodos)
  yield takeEvery(ACTIONS_TODO.ADD_TODO_REQUESTED, addTodo)
  yield takeEvery(ACTIONS_TODO.CHANGE_TEXT_TODO_REQUESTED, changeTextTodo)
  yield takeEvery(ACTIONS_TODO.CHANGE_CHECK_TODO_REQUESTED, changeCheckTodo)
  yield takeEvery(ACTIONS_TODO.CHECK_ALL_TODOS_REQUESTED, checkAllTodos)
  yield takeEvery(ACTIONS_TODO.DELETE_TODO_REQUESTED, deleteTodo)
  yield takeEvery(
    ACTIONS_TODO.DELETE_COMPLETED_TODOS_REQUESTED,
    deleteCompletedTodos
  )
}

function* addTodo(action: any) {
  try {
    const response = yield TodosAPI.addTodo(
      action.payload.userId,
      action.payload.text
    )

    const todo: Todo = response.data.todo

    yield put(createTodoSuccess(todo))
  } catch (err) {
    console.log(err)
  }
}

function* changeTextTodo(action: any) {
  try {
    const response = yield TodosAPI.changeTodoText(
      action.payload.id,
      action.payload.userId,
      action.payload.text
    )

    const todo: Todo = response.data.todo

    yield put(changeTextTodoSuccess(todo._id, todo))
  } catch (err) {
    console.log(err)
  }
}

function* changeCheckTodo(action: any) {
  try {
    const response = yield TodosAPI.changeTodoCheck(
      action.payload.id,
      action.payload.userId,
      !action.payload.check
    )

    const todo: Todo = response.data.todo

    yield put(changeCheckTodoSuccess(todo._id, todo))
  } catch (err) {
    console.log(err)
  }
}

function* deleteTodo(action: any) {
  try {
    const response = yield TodosAPI.deleteTodo(
      action.payload.id,
      action.payload.userId
    )

    const id: string = response.data.id

    yield put(deleteTodoSuccess(id))
  } catch (err) {
    console.log(err)
  }
}

function* getTodos(action: any) {
  try {
    const response = yield TodosAPI.getTodos(action.payload)

    const todos: Array<Todo> = response.data.todos

    yield put(setTodos(todos))
  } catch (err) {
    console.log(err)
  }
}

function* checkAllTodos(action: any) {
  try {
    const response = yield TodosAPI.checkAllTodos(
      action.payload.userId,
      !action.payload.check
    )

    const todos: Array<Todo> = response.data.todos

    yield put(checkAllTodosSuccess(todos))
  } catch (err) {
    console.log(err)
  }
}

function* deleteCompletedTodos(action: any) {
  try {
    const response = yield TodosAPI.deleteCompletedTodos(action.payload)

    const todos: Array<Todo> = response.data.todos

    yield put(deleteCompletedTodosSuccess(todos))
  } catch (err) {
    console.log(err)
  }
}
