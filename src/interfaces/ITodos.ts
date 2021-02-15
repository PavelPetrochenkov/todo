import { Types } from '../constants';
export type { ITodoActions } from '../redux/actions/todoAction';

export interface ITodo{
    id:number,
    text:string,
    check:boolean
}

export interface ITodosState{
    todos: Array<{id:number, text:string, check:boolean}>,
    type: Types,
    isAllCheck: boolean
}

export interface ITodosReducer{
    todoReducer:ITodosState
}
