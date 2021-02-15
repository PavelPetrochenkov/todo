import { ACTIONS_TODO, Types } from '../../constants'

interface ICreateTodo{
    type: ACTIONS_TODO.ADD_TODO,
    payload:{
        id:number,
        text:string,
        check:boolean
    }
}

export const createTodo = (text:string):ICreateTodo => ({
    type: ACTIONS_TODO.ADD_TODO,
    payload: {
        id: Date.now(),
        text,
        check: false,
    },
})

interface IChangeTextTodo{
    type: ACTIONS_TODO.CHANGE_TEXT_TODO,
    payload: {
        id:number,
        text:string
    }
}

export const changeTextTodo = (id:number, text:string):IChangeTextTodo => ({
    type: ACTIONS_TODO.CHANGE_TEXT_TODO,
    payload: { id, text },
})

interface IChangeCheckTodo{
    type: ACTIONS_TODO.CHANGE_CHECK_TODO,
    payload:number
}

export const changeCheckTodo = (id:number):IChangeCheckTodo => ({
    type: ACTIONS_TODO.CHANGE_CHECK_TODO,
    payload: id,
})

interface IDeleteTodo{
    type: ACTIONS_TODO.DELETE_TODO,
    payload:number
}

export const deleteTodo = (id:number):IDeleteTodo => ({
    type: ACTIONS_TODO.DELETE_TODO,
    payload: id,
})

interface IDeleteCompletedTodos{
    type: ACTIONS_TODO.DELETE_COMPLETED_TODOS,
}

export const deleteCompletedTodos = ():IDeleteCompletedTodos => ({
    type: ACTIONS_TODO.DELETE_COMPLETED_TODOS,
})

interface ICheckAllTodos{
    type: ACTIONS_TODO.CHECK_ALL_TODOS,
}

export const checkAllTodos = ():ICheckAllTodos => ({
    type: ACTIONS_TODO.CHECK_ALL_TODOS,
})

interface IChangeType{
    type: ACTIONS_TODO.CHANGE_TYPE,
    payload:Types
}

export const changeType = (type:Types):IChangeType => ({
    type: ACTIONS_TODO.CHANGE_TYPE,
    payload: type,
})

export type ITodoActions = IDeleteCompletedTodos | ICheckAllTodos |ICreateTodo | IChangeTextTodo | IChangeCheckTodo 
| IDeleteTodo | IChangeType;