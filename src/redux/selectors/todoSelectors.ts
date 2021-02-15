import { ITodosReducer } from '../../interfaces/ITodos'

export const getTodosLength = ({ todoReducer }:ITodosReducer) => todoReducer.todos.length;

export const getTodosType = ({ todoReducer }:ITodosReducer) => todoReducer.type;

export const getFooterCounter = ({ todoReducer }:ITodosReducer) => 
todoReducer.todos.filter((item) => !item.check).length;

export const getModeAllCheck =  ({ todoReducer }:ITodosReducer) => todoReducer.isAllCheck;

export const getTodosList = ({ todoReducer }:ITodosReducer) => todoReducer.todos;