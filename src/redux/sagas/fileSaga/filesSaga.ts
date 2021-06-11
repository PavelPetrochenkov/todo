import { takeEvery } from 'redux-saga/effects'
import { put, call } from 'redux-saga/effects'
import { createBrowserHistory } from 'history'
import {
  getAllTodosAction,
  createTodoAction,
  deleteTodoAction,
  changeTextTodoAction,
  changeCheckTodoAction,
  checkAllTodosAction,
  deleteCompletedTodosAction,
} from '../../actions/todoAction'
import * as FilesAPI from '../../../api/FilesAPI'
import { getSocketId } from '../../../socket'
import { createFileAction, getAllFilesAction } from '../../actions/fileAction'

const history = createBrowserHistory()

function* addFile(action: any):any {
  try {
    const response: any = yield call(
      FilesAPI.addFile,
      action.payload,
    )

    yield put(createTodoAction.success(response.data.file))
    // history.push('/')
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

function* changeTextTodo(action: ChangeTextTodo):any {
  try {
    const response: any = yield call(
      FilesAPI.changeTodoText,
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

function* changeCheckTodo(action: ChangeCheckTodo):any {
  try {
    const response: any = yield call(
      FilesAPI.changeTodoCheck,
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

function* deleteTodo(action: DeleteTodo):any {
  try {
    const response: any = yield call(
      FilesAPI.deleteTodo,
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

function* getFiles(action: GetTodos):any {
  try {
    const response: any = yield call(FilesAPI.getFiles, action.payload)

    yield put(
      getAllFilesAction.success({ files: response.data.files })
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

function* checkAllTodos(action: CheckAllTodos):any {
  try {
    const response: any = yield call(
      FilesAPI.checkAllTodos,
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

function* deleteCompletedTodos(action: DeleteCompletedTodos):any {
  try {
    const response: any = yield call(
      FilesAPI.deleteCompletedTodos,
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

export default function* filesSaga() {
  yield takeEvery(getAllFilesAction.types.REQUEST, getFiles)
  yield takeEvery(createFileAction.types.REQUEST, addFile)
  yield takeEvery(changeTextTodoAction.types.REQUEST, changeTextTodo)
  yield takeEvery(changeCheckTodoAction.types.REQUEST, changeCheckTodo)
  yield takeEvery(checkAllTodosAction.types.REQUEST, checkAllTodos)
  yield takeEvery(deleteTodoAction.types.REQUEST, deleteTodo)
  yield takeEvery(
    deleteCompletedTodosAction.types.REQUEST,
    deleteCompletedTodos
  )
}
