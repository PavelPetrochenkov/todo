import api from './api'

export const addTodo = (userId: string, text: string, socketId: string) =>
  api({
    url: 'todo/',
    data: {
      userId,
      text,
      socketId,
    },
  })

export const changeTodoText = (
  id: string,
  userId: string,
  text: string,
  socketId: string
) =>
  api({
    url: 'todo/change',
    data: {
      id,
      userId,
      text,
      socketId,
    },
  })

export const changeTodoCheck = (
  id: string,
  userId: string,
  check: boolean,
  socketId: string
) =>
  api({
    url: 'todo/change',
    data: {
      id,
      userId,
      check,
      socketId,
    },
  })

export const deleteTodo = (id: string, userId: string, socketId: string) =>
  api({
    url: 'todo/delete',
    data: {
      userId,
      id,
      socketId,
    },
  })

export const getTodos = (userId: string) => {
  return api({
    url: 'todo/all',
    data: {
      userId,
    },
  })
}

export const checkAllTodos = (
  userId: string,
  check: boolean,
  socketId: string
) =>
  api({
    url: 'todo/all/check',
    data: {
      userId,
      check,
      socketId,
    },
  })

export const deleteCompletedTodos = (userId: string, socketId: string) =>
  api({
    url: 'todo/all/delete',
    data: {
      userId,
      socketId,
    },
  })

export const resendTodo = (url: string, data: string) =>
  api({
    url,
    data,
  })
