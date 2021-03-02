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

  socket.on('addTodo', async (todo: Todo) => {
    dispatch(createTodoSuccess(todo))
  })

  socket.on('deleteTodo', async (id: string) => {
    dispatch(deleteTodoSuccess(id))
  })

  socket.on('changeTextTodo', async (todo: Todo) => {
    dispatch(changeTextTodoSuccess(todo))
  })

  socket.on('checkAllTodos', async (todos: Array<Todo>) => {
    dispatch(checkAllTodosSuccess(todos))
  })

  socket.on('deleteCompletedTodos', async (todos: Array<Todo>) => {
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
