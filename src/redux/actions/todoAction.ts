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

type getAllTodosREQUESTED = {
  type: ACTIONS_TODO.GET_TODOS_REQUESTED
  payload: string | undefined
}

export const getAllTodosRequested = (
  userId: string | undefined
): getAllTodosREQUESTED => ({
  type: ACTIONS_TODO.GET_TODOS_REQUESTED,
  payload: userId,
})

type CreateTodoREQUESTED = {
  type: ACTIONS_TODO.ADD_TODO_REQUESTED
  payload: {
    text: string
    userId: string | undefined
  }
}

export const createTodoRequested = (
  userId: string | undefined,
  text: string
): CreateTodoREQUESTED => ({
  type: ACTIONS_TODO.ADD_TODO_REQUESTED,
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

type ChangeTextTodoREQUESTED = {
  type: ACTIONS_TODO.CHANGE_TEXT_TODO_REQUESTED
  payload: {
    id: string
    text: string
    userId: string | undefined
  }
}

export const changeTextTodoRequested = (
  id: string,
  userId: string | undefined,
  text: string
): ChangeTextTodoREQUESTED => ({
  type: ACTIONS_TODO.CHANGE_TEXT_TODO_REQUESTED,
  payload: { id, userId, text },
})

type ChangeCheckTodoREQUESTED = {
  type: ACTIONS_TODO.CHANGE_CHECK_TODO_REQUESTED
  payload: { id: string; userId: string | undefined; check: boolean }
}

export const changeCheckTodoRequested = (
  id: string,
  userId: string | undefined,
  check: boolean
): ChangeCheckTodoREQUESTED => ({
  type: ACTIONS_TODO.CHANGE_CHECK_TODO_REQUESTED,
  payload: { id, userId, check },
})

type ChangeCheckTodoSuccess = {
  type: ACTIONS_TODO.CHANGE_CHECK_TODO_SUCCESS
  payload: {
    id: string
    todo: Todo
  }
}

export const changeCheckTodoSuccess = (
  id: string,
  todo: Todo
): ChangeCheckTodoSuccess => ({
  type: ACTIONS_TODO.CHANGE_CHECK_TODO_SUCCESS,
  payload: { id, todo },
})

type ChangeTextTodoSuccess = {
  type: ACTIONS_TODO.CHANGE_TEXT_TODO_SUCCESS
  payload: {
    id: string
    todo: Todo
  }
}

export const changeTextTodoSuccess = (
  id: string,
  todo: Todo
): ChangeTextTodoSuccess => ({
  type: ACTIONS_TODO.CHANGE_TEXT_TODO_SUCCESS,
  payload: { id, todo },
})

type DeleteTodoREQUESTED = {
  type: ACTIONS_TODO.DELETE_TODO_REQUESTED
  payload: { id: string; userId: string | undefined }
}

export const deleteTodoRequested = (
  id: string,
  userId: string | undefined
): DeleteTodoREQUESTED => ({
  type: ACTIONS_TODO.DELETE_TODO_REQUESTED,
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

type DeleteCompletedTodosRequested = {
  type: ACTIONS_TODO.DELETE_COMPLETED_TODOS_REQUESTED
  payload: string | undefined
}

export const deleteCompletedTodosRequested = (
  userId: string | undefined
): DeleteCompletedTodosRequested => ({
  type: ACTIONS_TODO.DELETE_COMPLETED_TODOS_REQUESTED,
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

type CheckAllTodosRequested = {
  type: ACTIONS_TODO.CHECK_ALL_TODOS_SUCCESS
  payload: { userId: string | undefined; check: boolean }
}

export const checkAllTodosRequested = (
  userId: string | undefined,
  check: boolean
): CheckAllTodosRequested => ({
  type: ACTIONS_TODO.CHECK_ALL_TODOS_SUCCESS,
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
  type: ACTIONS_TODO.CHANGE_TYPE_REQUESTED
  payload: FilterTypes
}

export const changeType = (type: FilterTypes): ChangeType => ({
  type: ACTIONS_TODO.CHANGE_TYPE_REQUESTED,
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
