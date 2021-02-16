import { ACTIONS_TODO, FilterTypes } from '../../constants'

type CreateTodo = {
  type: ACTIONS_TODO.ADD_TODO
  payload: {
    id: number
    text: string
    check: boolean
  }
}

export const createTodo = (text: string): CreateTodo => ({
  type: ACTIONS_TODO.ADD_TODO,
  payload: {
    id: Date.now(),
    text,
    check: false,
  },
})

type ChangeTextTodo = {
  type: ACTIONS_TODO.CHANGE_TEXT_TODO
  payload: {
    id: number
    text: string
  }
}

export const changeTextTodo = (id: number, text: string): ChangeTextTodo => ({
  type: ACTIONS_TODO.CHANGE_TEXT_TODO,
  payload: { id, text },
})

type ChangeCheckTodo = {
  type: ACTIONS_TODO.CHANGE_CHECK_TODO
  payload: number
}

export const changeCheckTodo = (id: number): ChangeCheckTodo => ({
  type: ACTIONS_TODO.CHANGE_CHECK_TODO,
  payload: id,
})

type DeleteTodo = {
  type: ACTIONS_TODO.DELETE_TODO
  payload: number
}

export const deleteTodo = (id: number): DeleteTodo => ({
  type: ACTIONS_TODO.DELETE_TODO,
  payload: id,
})

type DeleteCompletedTodos = {
  type: ACTIONS_TODO.DELETE_COMPLETED_TODOS
}

export const deleteCompletedTodos = (): DeleteCompletedTodos => ({
  type: ACTIONS_TODO.DELETE_COMPLETED_TODOS,
})

type CheckAllTodos = {
  type: ACTIONS_TODO.CHECK_ALL_TODOS
}

export const checkAllTodos = (): CheckAllTodos => ({
  type: ACTIONS_TODO.CHECK_ALL_TODOS,
})

type ChangeType = {
  type: ACTIONS_TODO.CHANGE_TYPE
  payload: FilterTypes
}

export const changeType = (type: FilterTypes): ChangeType => ({
  type: ACTIONS_TODO.CHANGE_TYPE,
  payload: type,
})

export type TodoActions =
  | DeleteCompletedTodos
  | CheckAllTodos
  | CreateTodo
  | ChangeTextTodo
  | ChangeCheckTodo
  | DeleteTodo
  | ChangeType
