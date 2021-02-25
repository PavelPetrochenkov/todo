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

type GetAllTodosRequest = {
  type: ACTIONS_TODO.GET_TODOS_REQUEST
  payload: string
}

export const getAllTodosRequest = (userId: string): GetAllTodosRequest => ({
  type: ACTIONS_TODO.GET_TODOS_REQUEST,
  payload: userId,
})

type CreateTodoRequest = {
  type: ACTIONS_TODO.ADD_TODO_REQUEST
  payload: {
    text: string
    userId: string
  }
}

export const createTodoRequest = (
  userId: string,
  text: string
): CreateTodoRequest => ({
  type: ACTIONS_TODO.ADD_TODO_REQUEST,
  payload: {
    text,
    userId,
  },
})

type CreateTodoSuccess = {
  type: ACTIONS_TODO.ADD_TODO_SUCCESS
  payload: Todo
}

export const createTodoSuccess = (todo: Todo): CreateTodoSuccess => ({
  type: ACTIONS_TODO.ADD_TODO_SUCCESS,
  payload: todo,
})

type ChangeTextTodoRequest = {
  type: ACTIONS_TODO.CHANGE_TEXT_TODO_REQUEST
  payload: {
    id: string
    text: string
    userId: string
  }
}

export const changeTextTodoRequest = (
  id: string,
  userId: string,
  text: string
): ChangeTextTodoRequest => ({
  type: ACTIONS_TODO.CHANGE_TEXT_TODO_REQUEST,
  payload: { id, userId, text },
})

type ChangeCheckTodoRequest = {
  type: ACTIONS_TODO.CHANGE_CHECK_TODO_REQUEST
  payload: { id: string; userId: string; check: boolean }
}

export const changeCheckTodoRequest = (
  id: string,
  userId: string,
  check: boolean
): ChangeCheckTodoRequest => ({
  type: ACTIONS_TODO.CHANGE_CHECK_TODO_REQUEST,
  payload: { id, userId, check },
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

type DeleteTodoRequest = {
  type: ACTIONS_TODO.DELETE_TODO_REQUEST
  payload: { id: string; userId: string }
}

export const deleteTodoRequest = (
  id: string,
  userId: string
): DeleteTodoRequest => ({
  type: ACTIONS_TODO.DELETE_TODO_REQUEST,
  payload: { id, userId },
})

type DeleteTodoSuccess = {
  type: ACTIONS_TODO.DELETE_TODO_SUCCESS
  payload: string
}

export const deleteTodoSuccess = (id: string): DeleteTodoSuccess => ({
  type: ACTIONS_TODO.DELETE_TODO_SUCCESS,
  payload: id,
})

type DeleteCompletedTodosRequest = {
  type: ACTIONS_TODO.DELETE_COMPLETED_TODOS_REQUEST
  payload: string
}

export const deleteCompletedTodosRequest = (
  userId: string
): DeleteCompletedTodosRequest => ({
  type: ACTIONS_TODO.DELETE_COMPLETED_TODOS_REQUEST,
  payload: userId,
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

type CheckAllTodosRequest = {
  type: ACTIONS_TODO.CHECK_ALL_TODOS_REQUEST
  payload: { userId: string; check: boolean }
}

export const checkAllTodosRequest = (
  userId: string,
  check: boolean
): CheckAllTodosRequest => ({
  type: ACTIONS_TODO.CHECK_ALL_TODOS_REQUEST,
  payload: { userId, check },
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
