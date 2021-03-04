import { FilterTypes } from '../../constants'
import { TodosState, Todo } from '../../typescript/Todos'
import {
  changeCheckTodoAction,
  changeTextTodoAction,
  changeTypeAction,
  checkAllTodosAction,
  createTodoAction,
  deleteCompletedTodosAction,
  deleteTodoAction,
  getAllTodosAction,
} from '../actions/todoAction'

const initialState: TodosState = {
  todos: [],
  type: FilterTypes.ALL,
}

function todoReducer(
  state: TodosState = initialState,
  action: any
): TodosState {
  switch (action.type) {
    case getAllTodosAction.types.SUCCESS:
    case checkAllTodosAction.types.SUCCESS:
    case deleteCompletedTodosAction.types.SUCCESS: {
      return {
        ...state,
        todos: action.payload.todos,
      }
    }
    case createTodoAction.types.SUCCESS: {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    }
    case changeCheckTodoAction.types.SUCCESS:
    case changeTextTodoAction.types.SUCCESS: {
      return {
        ...state,
        todos: state.todos.map((item) =>
          item._id === action.payload._id.toString()
            ? { ...action.payload }
            : item
        ),
      }
    }
    case deleteTodoAction.types.SUCCESS: {
      return {
        ...state,
        todos: state.todos.filter(
          (todo) => todo._id !== action.payload.toString()
        ),
      }
    }
    case changeTypeAction.type: {
      return {
        ...state,
        type: action.payload,
      }
    }
  }
  return state
}

export default todoReducer
