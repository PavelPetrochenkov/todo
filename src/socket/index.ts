import { Dispatch } from 'react'
import io from 'socket.io-client'
import {
  createTodoSuccess,
  deleteTodoSuccess,
  changeTextTodoSuccess,
  checkAllTodosSuccess,
  deleteCompletedTodosSuccess,
  getAllTodosSuccess,
} from './../redux/actions/todoAction'
import { Todo } from '../typescript/Todos'

const ENDPOINT = 'http://localhost:1328'
let socket = io({ autoConnect: false })

export const initSocket = async (
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

  console.log(socket.id)
  socket.on('getTodosSuccess', async (todos: Array<Todo>) => {
    dispatch(getAllTodosSuccess(todos))
  })

  socket.on('addTodoSuccess', async (todo: Todo) => {
    dispatch(createTodoSuccess(todo))
  })

  socket.on('deleteTodoSuccess', async (id: string) => {
    dispatch(deleteTodoSuccess(id))
  })

  socket.on('changeTextTodoSuccess', async (todo: Todo) => {
    dispatch(changeTextTodoSuccess(todo))
  })

  socket.on('checkAllTodosSuccess', async (todos: Array<Todo>) => {
    dispatch(checkAllTodosSuccess(todos))
  })

  socket.on('deleteCompletedTodosSuccess', async (todos: Array<Todo>) => {
    dispatch(deleteCompletedTodosSuccess(todos))
  })
}

export const getSocket = () => {
  return socket
}

export const getSocketId = (): string => {
  return socket.id
}

export const disconnectSocket = () => {
  socket.disconnect()
}
