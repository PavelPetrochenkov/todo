import createActions from '.'
import { ACTIONS_TODO, FilterTypes } from '../../constants'
import { Todo } from '../../typescript/Todos'

type GetAllTodos = {
  request: (
    payload: string
  ) => {
    type: string
    payload: string
  }
  success: (
    payload: Array<Todo>
  ) => {
    type: string
    payload: Array<Todo>
  }
  fail: () => {
    type: string
  }
  types: {
    REQUEST: string
    SUCCESS: string
    FAIL: string
  }
}

export const getAllTodosAction: GetAllTodos = createActions(
  ACTIONS_TODO.GET_TODOS
)

type CreateTodo = {
  request: (payload: {
    userId: string
    text: string
  }) => {
    type: string
    payload: {
      userId: string
      text: string
    }
  }
  success: (
    payload: Todo
  ) => {
    type: string
    payload: Todo
  }
  fail: () => {
    type: string
  }
  types: {
    REQUEST: string
    SUCCESS: string
    FAIL: string
  }
}

export const createTodoAction: CreateTodo = createActions(ACTIONS_TODO.ADD_TODO)

type ChangeTextTodo = {
  request: (payload: {
    id: string
    userId: string
    text: string
  }) => {
    type: string
    payload: {
      id: string
      userId: string
      text: string
    }
  }
  success: (
    payload: Todo
  ) => {
    type: string
    payload: Todo
  }
  fail: () => {
    type: string
  }
  types: {
    REQUEST: string
    SUCCESS: string
    FAIL: string
  }
}

export const changeTextTodoAction: ChangeTextTodo = createActions(
  ACTIONS_TODO.CHANGE_TEXT_TODO
)

type ChangeCheckTodo = {
  request: (payload: {
    id: string
    userId: string
    check: boolean
  }) => {
    type: string
    payload: {
      id: string
      userId: string
      check: boolean
    }
  }
  success: (
    payload: Todo
  ) => {
    type: string
    payload: Todo
  }
  fail: () => {
    type: string
  }
  types: {
    REQUEST: string
    SUCCESS: string
    FAIL: string
  }
}

export const changeCheckTodoAction: ChangeCheckTodo = createActions(
  ACTIONS_TODO.CHANGE_CHECK_TODO
)

type DeleteTodo = {
  request: (payload: {
    id: string
    userId: string
  }) => {
    type: string
    payload: {
      id: string
      userId: string
    }
  }
  success: (
    payload: string
  ) => {
    type: string
    payload: string
  }
  fail: () => {
    type: string
  }
  types: {
    REQUEST: string
    SUCCESS: string
    FAIL: string
  }
}

export const deleteTodoAction: DeleteTodo = createActions(
  ACTIONS_TODO.DELETE_TODO
)

type DeleteCompletedTodos = {
  request: (
    payload: string
  ) => {
    type: string
    payload: string
  }
  success: (
    payload: Array<Todo>
  ) => {
    type: string
    payload: Array<Todo>
  }
  fail: () => {
    type: string
  }
  types: {
    REQUEST: string
    SUCCESS: string
    FAIL: string
  }
}

export const deleteCompletedTodosAction: DeleteCompletedTodos = createActions(
  ACTIONS_TODO.DELETE_COMPLETED_TODOS
)

type CheckAllTodos = {
  request: (payload: {
    userId: string
    check: boolean
  }) => {
    type: string
    payload: { userId: string; check: boolean }
  }
  success: (
    payload: Array<Todo>
  ) => {
    type: string
    payload: Array<Todo>
  }
  fail: () => {
    type: string
  }
  types: {
    REQUEST: string
    SUCCESS: string
    FAIL: string
  }
}

export const checkAllTodosAction: CheckAllTodos = createActions(
  ACTIONS_TODO.CHECK_ALL_TODOS
)

type ChangeType = {
  type: ACTIONS_TODO.CHANGE_TYPE
  payload: FilterTypes
}

export const changeType = (type: FilterTypes): ChangeType => ({
  type: ACTIONS_TODO.CHANGE_TYPE,
  payload: type,
})
