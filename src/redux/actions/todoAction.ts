import { ACTIONS_TODO, FilterTypes } from '../../constants'
import { Todo } from '../../typescript/Todos'

type GetAllTodosSuccess = {
  type: ACTIONS_TODO.GET_TODOS_SUCCESS
  payload: Array<Todo>
}

export const getAllTodosSuccess = (todos: Array<Todo>): GetAllTodosSuccess => ({
  type: ACTIONS_TODO.GET_TODOS_SUCCESS,
  payload: todos,
})

type CreateTodoSuccess = {
  type: ACTIONS_TODO.ADD_TODO_SUCCESS
  payload: Todo
}

export const createTodoSuccess = (todo: Todo): CreateTodoSuccess => ({
  type: ACTIONS_TODO.ADD_TODO_SUCCESS,
  payload: todo,
})

type ChangeCheckTodoSuccess = {
  type: ACTIONS_TODO.CHANGE_CHECK_TODO_SUCCESS
  payload: Todo
}

export const changeCheckTodoSuccess = (todo: Todo): ChangeCheckTodoSuccess => ({
  type: ACTIONS_TODO.CHANGE_CHECK_TODO_SUCCESS,
  payload: todo,
})

type ChangeTextTodoSuccess = {
  type: ACTIONS_TODO.CHANGE_TEXT_TODO_SUCCESS
  payload: Todo
}

export const changeTextTodoSuccess = (todo: Todo): ChangeTextTodoSuccess => ({
  type: ACTIONS_TODO.CHANGE_TEXT_TODO_SUCCESS,
  payload: todo,
})

type DeleteTodoSuccess = {
  type: ACTIONS_TODO.DELETE_TODO_SUCCESS
  payload: string
}

export const deleteTodoSuccess = (id: string): DeleteTodoSuccess => ({
  type: ACTIONS_TODO.DELETE_TODO_SUCCESS,
  payload: id,
})

type DeleteCompletedTodosSuccess = {
  type: ACTIONS_TODO.DELETE_COMPLETED_TODOS_SUCCESS
  payload: Array<Todo>
}

export const deleteCompletedTodosSuccess = (
  todos: Array<Todo>
): DeleteCompletedTodosSuccess => ({
  type: ACTIONS_TODO.DELETE_COMPLETED_TODOS_SUCCESS,
  payload: todos,
})

type CheckAllTodosSuccess = {
  type: ACTIONS_TODO.CHECK_ALL_TODOS_SUCCESS
  payload: Array<Todo>
}

export const checkAllTodosSuccess = (
  todos: Array<Todo>
): CheckAllTodosSuccess => ({
  type: ACTIONS_TODO.CHECK_ALL_TODOS_SUCCESS,
  payload: todos,
})

type ChangeType = {
  type: ACTIONS_TODO.CHANGE_TYPE_REQUEST
  payload: FilterTypes
}

export const changeType = (type: FilterTypes): ChangeType => ({
  type: ACTIONS_TODO.CHANGE_TYPE_REQUEST,
  payload: type,
})

export type TodoActions =
  | DeleteCompletedTodosSuccess
  | CheckAllTodosSuccess
  | GetAllTodosSuccess
  | CreateTodoSuccess
  | ChangeCheckTodoSuccess
  | ChangeTextTodoSuccess
  | DeleteTodoSuccess
  | ChangeType
