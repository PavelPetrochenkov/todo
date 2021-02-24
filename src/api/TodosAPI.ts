import api from './api'

export const addTodo = (userId: string, text: string) =>
  api({
    url: 'todo/',
    data: {
      userId,
      text,
    },
  }).catch((err) => {
    throw err.response
  })

export const changeTodoText = (id: string, userId: string, text: string) =>
  api({
    url: 'todo/change',
    data: {
      id,
      userId,
      text,
    },
  }).catch((err) => {
    throw err.response
  })

export const changeTodoCheck = (id: string, userId: string, check: boolean) =>
  api({
    url: 'todo/change',
    data: {
      id,
      userId,
      check,
    },
  }).catch((err) => {
    throw err.response
  })

export const deleteTodo = (id: string, userId: string) =>
  api({
    url: 'todo/delete',
    data: {
      userId,
      id,
    },
  }).catch((err) => {
    throw err.response
  })

export const getTodos = (userId: string) =>
  api({
    url: 'todo/all',
    data: {
      userId,
    },
  }).catch((err) => {
    throw err.response
  })

export const checkAllTodos = (userId: string, check: boolean) =>
  api({
    url: 'todo/all/check',
    data: {
      userId,
      check,
    },
  }).catch((err) => {
    throw err.response
  })

export const deleteCompletedTodos = (userId: string) =>
  api({
    url: 'todo/all/delete',
    data: {
      userId,
    },
  }).catch((err) => {
    throw err.response
  })

export const resendTodo = (url: string, data: string) =>
  api({
    url,
    data,
  }).catch((err) => {
    throw err.response
  })
