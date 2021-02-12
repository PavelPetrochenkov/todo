import { ACTIONS_TODO } from '../../constants'

export const createTodo = (text) => ({
    type: ACTIONS_TODO.ADD_TODO,
    payload: {
        id: Date.now(),
        text,
        check: false,
    },
})

export const changeTextTodo = (id, text) => ({
    type: ACTIONS_TODO.CHANGE_TEXT_TODO,
    payload: { id, text },
})

export const changeCheckTodo = (id) => ({
    type: ACTIONS_TODO.CHANGE_CHECK_TODO,
    payload: id,
})

export const deleteTodo = (id) => ({
    type: ACTIONS_TODO.DELETE_TODO,
    payload: id,
})

export const deleteCompletedTodos = () => ({
    type: ACTIONS_TODO.DELETE_COMPLETED_TODOS,
})

export const checkAllTodos = () => ({
    type: ACTIONS_TODO.CHECK_ALL_TODOS,
})

export const changeType = (type) => ({
    type: ACTIONS_TODO.CHANGE_TYPE,
    payload: type,
})
