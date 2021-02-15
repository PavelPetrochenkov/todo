interface ITodoState{
    todos: Array<{id:number, text:string, check:boolean}>,
    type: string,
    isAllCheck: boolean
}

interface ITodoReducer{
    todoReducer:ITodoState
}

export const getTodosLength = ({ todoReducer }:ITodoReducer) => todoReducer.todos.length;

export const getTodosType = ({ todoReducer }:ITodoReducer) => todoReducer.type;

export const getFooterCounter = ({ todoReducer }:ITodoReducer) => 
todoReducer.todos.filter((item) => !item.check).length;

export const getModeAllCheck =  ({ todoReducer }:ITodoReducer) => todoReducer.isAllCheck;

export const getTodosList = ({ todoReducer }:ITodoReducer) => todoReducer.todos;