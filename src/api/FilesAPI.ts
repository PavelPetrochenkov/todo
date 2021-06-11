import api from './api'

export const addFile = (
  data: any
) =>
  api({
    url: 'file/',
    data: {
      ...data,
    },
  })

export const changeTodoText = (
  data: { id: string; userId: string; text: string },
  socketId: string
) =>
  api({
    url: 'todo/change',
    data: {
      ...data,
      socketId,
    },
  })

export const changeTodoCheck = (
  data: { id: string; userId: string; check: boolean },
  socketId: string
) =>
  api({
    url: 'todo/change',
    data: {
      ...data,
      socketId,
    },
  })

export const deleteTodo = (
  data: { id: string; userId: string },
  socketId: string
) =>
  api({
    url: 'todo/delete',
    data: {
      ...data,
      socketId,
    },
  })

export const getFiles = (userId: string) => {
  return api({
    url: 'file/all',
    data: {
      userId,
    },
  })
}

export const checkAllTodos = (
  data: { userId: string; check: boolean },
  socketId: string
) => {
  return api({
    url: 'todo/all/check',
    data: {
      ...data,
      socketId,
    },
  })
}

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
