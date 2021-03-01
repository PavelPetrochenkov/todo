import { createBrowserHistory } from 'history'
import {
  createTodoSuccess,
  deleteTodoSuccess,
  changeTextTodoSuccess,
  checkAllTodosSuccess,
  deleteCompletedTodosSuccess,
  getAllTodosSuccess,
} from './../redux/actions/todoAction'
import io from 'socket.io-client'
import { Todo } from '../typescript/Todos'
import { Dispatch } from 'react'

const ENDPOINT = 'http://localHost:1328'
const history = createBrowserHistory({ forceRefresh: true })
let socket = io({ autoConnect: false })

export const initSocket = (
  userId: string,
  token: string,
  refreshToken: string,
  dispatch: Dispatch<any>
) => {
  socket = io(ENDPOINT, {
    transportOptions: {
      polling: {
        extraHeaders: {
          userId,
          token,
          refreshToken,
        },
      },
    },
    autoConnect: false,
  })

  socket.connect()

  socket.on('getTodosSuccess', async (todos: Array<Todo>) => {
    dispatch(getAllTodosSuccess(todos))
  })

  socket.on('addTodoSuccess', async (todo: Todo) => {
    dispatch(createTodoSuccess(todo))
  })

  socket.on('deleteTodoSuccess', async (id: string) => {
    dispatch(deleteTodoSuccess(id))
  })

  socket.on('changeTodoSuccess', async (todo: Todo) => {
    dispatch(changeTextTodoSuccess(todo))
  })

  socket.on('checkAllTodosSuccess', async (todos: Array<Todo>) => {
    dispatch(checkAllTodosSuccess(todos))
  })

  socket.on('clearAllCompletedTodosSuccess', async (todos: Array<Todo>) => {
    dispatch(deleteCompletedTodosSuccess(todos))
  })

  socket.on('clearAuth', async () => {
    localStorage.token = ''
    localStorage.refreshToken = ''
    history.push('/')
  })

  socket.on(
    'refreshToken',
    async (data: { token: string; refreshToken: string }) => {
      localStorage.token = data.token
      localStorage.refreshToken = data.refreshToken
      await reconnectSocket(userId, data.token, data.refreshToken, dispatch)
    }
  )
}

export const getSocket = () => {
  return socket
}

export const disconnectSocket = () => {
  socket.disconnect()
}

export const reconnectSocket = (
  userId: string,
  token: string,
  refreshToken: string,
  dispatch: Dispatch<any>
) => {
  socket.disconnect()
  initSocket(userId, token, refreshToken, dispatch)
}
