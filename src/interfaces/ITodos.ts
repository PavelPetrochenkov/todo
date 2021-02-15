import { FilterTypes } from '../constants';
export type { ITodoActions } from '../redux/actions/todoAction';

export interface ITodo{
    id:number,
    text:string,
    check:boolean
}

export interface ITodosState{
    todos: Array<ITodo>,
    type: FilterTypes,
    isAllCheck: boolean
}