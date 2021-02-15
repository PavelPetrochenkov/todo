import { FilterTypes } from '../constants';
export type { TodoActions } from '../redux/actions/todoAction';

export type Todo = {
    id:number,
    text:string,
    check:boolean
}

export type TodosState = {
    todos: Array<Todo>,
    type: FilterTypes,
    isAllCheck: boolean
}