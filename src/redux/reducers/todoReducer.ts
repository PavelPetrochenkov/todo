import { FilterTypes } from '../../constants'
import { ACTIONS_TODO } from '../../constants'
import { TodosState, Todo } from '../../typescript/Todos'
import {
  changeCheckTodoAction,
  changeTextTodoAction,
  checkAllTodosAction,
  createTodoAction,
  deleteCompletedTodosAction,
  deleteTodoAction,
  getAllTodosAction,
} from '../actions/todoAction'

const initialState: TodosState = {
  todos: [],
  type: FilterTypes.ALL,
  isAllCheck: false,
}

function todoReducer(
  state: TodosState = initialState,
  action: any
): TodosState {
  switch (action.type) {
    case getAllTodosAction.types.SUCCESS:
    case checkAllTodosAction.types.SUCCESS:
    case deleteCompletedTodosAction.types.SUCCESS: {
      const todos: Array<Todo> = [...action.payload]

      return {
        type: FilterTypes.ALL,
        todos: todos,
        isAllCheck: !todos.find((item) => !item.check),
      }
    }
    case createTodoAction.types.SUCCESS: {
      return {
        ...state,
        todos: [...state.todos, action.payload],
        isAllCheck: false,
      }
    }
    case changeCheckTodoAction.types.SUCCESS:
    case changeTextTodoAction.types.SUCCESS: {
      const todos: Array<Todo> = state.todos.map((item) =>
        item._id === action.payload._id.toString()
          ? { ...action.payload }
          : item
      )

      return {
        ...state,
        todos: todos,
        isAllCheck: !todos.find((item) => !item.check),
      }
    }
    case deleteTodoAction.types.SUCCESS: {
      const changedTodos = state.todos.filter(
        (todo) => todo._id !== action.payload.toString()
      )

      return {
        ...state,
        todos: changedTodos,
        isAllCheck: !changedTodos.find((item) => !item.check),
      }
    }
    case ACTIONS_TODO.CHANGE_TYPE: {
      return {
        ...state,
        type: action.payload,
      }
    }
  }
  return state
}

export default todoReducer
