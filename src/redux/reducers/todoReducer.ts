import { FilterTypes } from '../../constants'
import { ACTIONS_TODO } from '../../constants'
import { TodoActions, TodosState } from '../../typescript/Todos'

const initialState : TodosState = {
    todos: [],
    type: FilterTypes.ALL,
    isAllCheck: false,
}

function todoReducer(state:TodosState = initialState, action: TodoActions):TodosState {
    switch (action.type) {
        case ACTIONS_TODO.ADD_TODO: {
            return {
                ...state,
                todos: [...state.todos, action.payload],
                isAllCheck: false,
            }
        }
        case ACTIONS_TODO.CHANGE_TEXT_TODO: {
            return {
                ...state,
                todos: state.todos.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, text: action.payload.text }
                        : item
                ),
            }
        }
        case ACTIONS_TODO.CHANGE_CHECK_TODO: {

            const changedTodos = state.todos.map((item) =>
                item.id === action.payload
                    ? { ...item, check: !item.check }
                    : item
            )

            return {
                ...state,
                todos: changedTodos,
                isAllCheck: !changedTodos.find((item) => !item.check),
            }
        }
        case ACTIONS_TODO.DELETE_TODO: {
            
            const changedTodos = state.todos.filter(
                (todo) => todo.id !== action.payload
            )

            return {
                ...state,
                todos: changedTodos,
                isAllCheck: !changedTodos.find((item) => !item.check),
            }
        }
        case ACTIONS_TODO.DELETE_COMPLETED_TODOS: {
            return {
                ...state,
                todos: state.todos.filter((item) => !item.check),
                isAllCheck: false,
            }
        }
        case ACTIONS_TODO.CHECK_ALL_TODOS: {
            return {
                ...state,
                todos: state.todos.map((item) => ({
                    ...item,
                    check: !state.isAllCheck,
                })),
                isAllCheck: !state.isAllCheck,
            }
        }
        case ACTIONS_TODO.CHANGE_TYPE: {
            return {
                ...state,
                type: action.payload,
            }
        }
    }
    return state;
}

export default todoReducer
