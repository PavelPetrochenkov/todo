import axios from 'axios'
import { put } from 'redux-saga/effects'
import { Todo } from '../../../typescript/Todos'
import {
  setTodos,
  createTodoSuccess,
  changeTodoSuccess,
  deleteTodoSuccess,
} from '../../actions/todoAction'

export function* addTodo(action: any) {
  try {
    const response = yield axios({
      method: 'POST',
      url: 'http://localhost:1328/api/todo/',
      data: {
        userId: action.payload.userId,
        text: action.payload.text,
      },
    })

    const todo: Todo = response.data.todo

    yield put(createTodoSuccess(todo))
  } catch (err) {
    console.log(err)
  }
}

export function* changeTextTodo(action: any) {
  try {
    const response = yield axios({
      method: 'POST',
      url: 'http://localhost:1328/api/todo/change',
      data: {
        id: action.payload.id,
        userId: action.payload.userId,
        text: action.payload.text,
      },
    })

    const todo: Todo = response.data.todo
    yield put(changeTodoSuccess(todo._id, todo))
  } catch (err) {
    console.log(err)
  }
}

export function* changeCheckTodo(action: any) {
  try {
    const response = yield axios({
      method: 'POST',
      url: 'http://localhost:1328/api/todo/change',
      data: {
        id: action.payload.id,
        userId: action.payload.userId,
        check: !action.payload.check,
      },
    })

    const todo: Todo = response.data.todo
    yield put(changeTodoSuccess(todo._id, todo))
  } catch (err) {
    console.log(err)
  }
}

export function* deleteTodo(action: any) {
  try {
    const response = yield axios({
      method: 'POST',
      url: 'http://localhost:1328/api/todo/delete',
      data: {
        userId: action.payload.userId,
        id: action.payload.id,
      },
    })
    const id: string = response.data.id
    yield put(deleteTodoSuccess(id))
  } catch (err) {
    console.log(err)
  }
}

export function* getTodos(action: any) {
  try {
    const response = yield axios({
      method: 'POST',
      url: 'http://localhost:1328/api/todo/all',
      data: {
        userId: action.payload,
      },
    })

    const todos: Array<Todo> = response.data.todos

    yield put(setTodos(todos))
  } catch (err) {
    console.log(err)
  }
}

export function* checkAllTodos(action: any) {
  try {
    const response = yield axios({
      method: 'POST',
      url: 'http://localhost:1328/api/todo/all/check',
      data: {
        userId: action.payload.userId,
        check: !action.payload.check,
      },
    })
    const todos: Array<Todo> = response.data.todos
    yield put(setTodos(todos))
  } catch (err) {
    console.log(err)
  }
}

export function* deleteCompletedTodos(action: any) {
  try {
    const response = yield axios({
      method: 'POST',
      url: 'http://localhost:1328/api/todo/all/delete',
      data: {
        userId: action.payload,
      },
    })
    const todos: Array<Todo> = response.data.todos
    yield put(setTodos(todos))
  } catch (err) {
    console.log(err)
  }
}
