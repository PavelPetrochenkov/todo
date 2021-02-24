import api from './api'

export const addTodo = (userId: string, text: string) =>
  api({
    url: 'todo/',
    data: {
      userId,
      text,
    },
  })

export const changeTodoText = (id: string, userId: string, text: string) =>
  api({
    url: 'todo/change',
    data: {
      id,
      userId,
      text,
    },
  })

export const changeTodoCheck = (id: string, userId: string, check: boolean) =>
  api({
    url: 'todo/change',
    data: {
      id,
      userId,
      check,
    },
  })

export const deleteTodo = (id: string, userId: string) =>
  api({
    url: 'todo/delete',
    data: {
      userId,
      id,
    },
  })

export const getTodos = (userId: string) =>
  api({
    url: 'todo/all',
    data: {
      userId,
    },
  })

export const checkAllTodos = (userId: string, check: boolean) =>
  api({
    url: 'todo/all/check',
    data: {
      userId,
      check,
    },
  })

export const deleteCompletedTodos = (userId: string) =>
  api({
    url: 'todo/all/delete',
    data: {
      userId,
    },
  })

export const resendTodo = (url: string, data: string) =>
  api({
    url,
    data,
  })
