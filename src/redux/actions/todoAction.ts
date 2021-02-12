import { ACTIONS_TODO } from '../../constants'

interface ICreateTodo{
    type:string,
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
    type:string,
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
    type:string,
    payload:number
}

export const changeCheckTodo = (id:number):IChangeCheckTodo => ({
    type: ACTIONS_TODO.CHANGE_CHECK_TODO,
    payload: id,
})

interface IDeleteTodo{
    type:string,
    payload:number
}

export const deleteTodo = (id:number):IDeleteTodo => ({
    type: ACTIONS_TODO.DELETE_TODO,
    payload: id,
})

interface IDefaultActionTodo{
    type:string,
}

export const deleteCompletedTodos = ():IDefaultActionTodo => ({
    type: ACTIONS_TODO.DELETE_COMPLETED_TODOS,
})

export const checkAllTodos = ():IDefaultActionTodo => ({
    type: ACTIONS_TODO.CHECK_ALL_TODOS,
})

interface IChangeType{
    type:string,
    payload:string
}

export const changeType = (type:string):IChangeType => ({
    type: ACTIONS_TODO.CHANGE_TYPE,
    payload: type,
})

export type ITodoActions = IDefaultActionTodo |ICreateTodo | IChangeTextTodo | IChangeCheckTodo 
| IDeleteTodo | IChangeType;