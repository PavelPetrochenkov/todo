import { FilterTypes } from '../../constants'
import { ACTIONS_TODO } from '../../constants'
import { TodoActions, TodosState, Todo } from '../../typescript/Todos'

const initialState: TodosState = {
  todos: [],
  type: FilterTypes.ALL,
  isAllCheck: false,
}

function todoReducer(
  state: TodosState = initialState,
  action: TodoActions
): TodosState {
  switch (action.type) {
    case ACTIONS_TODO.GET_TODOS_SUCCESS: {
      const todos: Array<Todo> = [...action.payload]

      return {
        type: FilterTypes.ALL,
        todos: todos,
        isAllCheck: !todos.find((item) => !item.check),
      }
    }
    case ACTIONS_TODO.ADD_TODO_SUCCESS: {
      return {
        ...state,
        todos: [...state.todos, action.payload],
        isAllCheck: false,
      }
    }
    case ACTIONS_TODO.CHANGE_CHECK_TODO_SUCCESS:
    case ACTIONS_TODO.CHANGE_TEXT_TODO_SUCCESS: {
      const todos: Array<Todo> = state.todos.map((item) =>
        item._id === action.payload.id.toString()
          ? { ...action.payload.todo }
          : item
      )

      return {
        ...state,
        todos: todos,
        isAllCheck: !todos.find((item) => !item.check),
      }
    }
    case ACTIONS_TODO.DELETE_TODO_SUCCESS: {
      const changedTodos = state.todos.filter(
        (todo) => todo._id !== action.payload.toString()
      )

      return {
        ...state,
        todos: changedTodos,
        isAllCheck: !changedTodos.find((item) => !item.check),
      }
    }
    case ACTIONS_TODO.CHANGE_TYPE_REQUESTED: {
      return {
        ...state,
        type: action.payload,
      }
    }
  }
  return state
}

export default todoReducer
