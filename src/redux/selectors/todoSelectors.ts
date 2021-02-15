import { Todo } from '../../interfaces/ITodos'
import { FilterTypes } from '../../constants'
import { IStore } from '../store'

export const getTodosLength = ({ todoReducer }:IStore):number => todoReducer.todos.length;

export const getTodosType = ({ todoReducer }:IStore):FilterTypes => todoReducer.type;

export const getFooterCounter = ({ todoReducer }:IStore):number => 
todoReducer.todos.filter((item) => !item.check).length;

export const getModeAllCheck =  ({ todoReducer }:IStore):boolean => todoReducer.isAllCheck;

export const getTodosList = ({ todoReducer }:IStore):Array<Todo> => todoReducer.todos;