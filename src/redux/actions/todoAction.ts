import createActions, { createAction } from '.'

export const getAllTodosAction = createActions('GET_TODOS')

export const createTodoAction = createActions('ADD_TODO')

export const changeTextTodoAction = createActions('CHANGE_TEXT_TODO')

export const changeCheckTodoAction = createActions('CHANGE_CHECK_TODO')

export const deleteTodoAction = createActions('DELETE_TODO')

export const deleteCompletedTodosAction = createActions(
  'DELETE_COMPLETED_TODOS'
)

export const checkAllTodosAction = createActions('CHECK_ALL_TODOS')

export const changeTypeAction = createAction('CHANGE_TYPE')
