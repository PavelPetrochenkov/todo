import createActions, { createAction } from '.'
import { ACTIONS_TODO } from '../../constants'

export const getAllTodosAction = createActions(ACTIONS_TODO.GET_TODOS)

export const createTodoAction = createActions(ACTIONS_TODO.ADD_TODO)

export const changeTextTodoAction = createActions(ACTIONS_TODO.CHANGE_TEXT_TODO)

export const changeCheckTodoAction = createActions(
  ACTIONS_TODO.CHANGE_CHECK_TODO
)

export const deleteTodoAction = createActions(ACTIONS_TODO.DELETE_TODO)

export const deleteCompletedTodosAction = createActions(
  ACTIONS_TODO.DELETE_COMPLETED_TODOS
)

export const checkAllTodosAction = createActions(ACTIONS_TODO.CHECK_ALL_TODOS)

export const changeTypeAction = createAction(ACTIONS_TODO.CHANGE_TYPE)
