import { ACTIONS_TODO, FilterTypes } from '../../constants'
import { Todo } from '../../typescript/Todos'

type SetTodos = {
  type: ACTIONS_TODO.GET_TODOS_SUCCESS
  payload: Array<Todo>
}

export const setTodos = (todos: Array<Todo>): SetTodos => ({
  type: ACTIONS_TODO.GET_TODOS_SUCCESS,
  payload: todos,
})

type getAllTodosPending = {
  type: ACTIONS_TODO.GET_TODOS_PENDING
  payload: string | undefined
}

export const getAllTodosPending = (
  userId: string | undefined
): getAllTodosPending => ({
  type: ACTIONS_TODO.GET_TODOS_PENDING,
  payload: userId,
})

type CreateTodoPending = {
  type: ACTIONS_TODO.ADD_TODO_PENDING
  payload: {
    text: string
    userId: string | undefined
  }
}

export const createTodoPending = (
  userId: string | undefined,
  text: string
): CreateTodoPending => ({
  type: ACTIONS_TODO.ADD_TODO_PENDING,
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

type ChangeTextTodoPending = {
  type: ACTIONS_TODO.CHANGE_TEXT_TODO_PENDING
  payload: {
    id: string
    text: string
    userId: string | undefined
  }
}

export const changeTextTodoPending = (
  id: string,
  userId: string | undefined,
  text: string
): ChangeTextTodoPending => ({
  type: ACTIONS_TODO.CHANGE_TEXT_TODO_PENDING,
  payload: { id, userId, text },
})

type ChangeCheckTodoPending = {
  type: ACTIONS_TODO.CHANGE_CHECK_TODO_PENDING
  payload: { id: string; userId: string | undefined; check: boolean }
}

export const changeCheckTodoPending = (
  id: string,
  userId: string | undefined,
  check: boolean
): ChangeCheckTodoPending => ({
  type: ACTIONS_TODO.CHANGE_CHECK_TODO_PENDING,
  payload: { id, userId, check },
})

type ChangeTodoSuccess = {
  type: ACTIONS_TODO.CHANGE_TODO_SUCCESS
  payload: {
    id: string
    todo: Todo
  }
}

export const changeTodoSuccess = (
  id: string,
  todo: Todo
): ChangeTodoSuccess => ({
  type: ACTIONS_TODO.CHANGE_TODO_SUCCESS,
  payload: { id, todo },
})

type DeleteTodoPending = {
  type: ACTIONS_TODO.DELETE_TODO_PENDING
  payload: { id: string; userId: string | undefined }
}

export const deleteTodoPending = (
  id: string,
  userId: string | undefined
): DeleteTodoPending => ({
  type: ACTIONS_TODO.DELETE_TODO_PENDING,
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

type DeleteCompletedTodos = {
  type: ACTIONS_TODO.DELETE_COMPLETED_TODOS_PENDING
  payload: string | undefined
}

export const deleteCompletedTodos = (
  userId: string | undefined
): DeleteCompletedTodos => ({
  type: ACTIONS_TODO.DELETE_COMPLETED_TODOS_PENDING,
  payload: userId,
})

type CheckAllTodos = {
  type: ACTIONS_TODO.CHECK_ALL_TODOS_PENDING
  payload: { userId: string | undefined; check: boolean }
}

export const checkAllTodos = (
  userId: string | undefined,
  check: boolean
): CheckAllTodos => ({
  type: ACTIONS_TODO.CHECK_ALL_TODOS_PENDING,
  payload: { userId, check },
})

type ChangeType = {
  type: ACTIONS_TODO.CHANGE_TYPE_PENDING
  payload: FilterTypes
}

export const changeType = (type: FilterTypes): ChangeType => ({
  type: ACTIONS_TODO.CHANGE_TYPE_PENDING,
  payload: type,
})

export type TodoActions =
  | DeleteCompletedTodos
  | CheckAllTodos
  | SetTodos
  | CreateTodoSuccess
  | ChangeTodoSuccess
  | DeleteTodoSuccess
  | ChangeType
