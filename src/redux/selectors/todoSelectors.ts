import { ITodo, ITodosState } from '../../interfaces/ITodos'
import { FilterTypes } from '../../constants'
import { IUserState } from '../../interfaces/IUser';

export interface IState {
    todoReducer:ITodosState,
    userReducer:IUserState
}

export const getTodosLength = ({ todoReducer }:IState):number => todoReducer.todos.length;

export const getTodosType = ({ todoReducer }:IState):FilterTypes => todoReducer.type;

export const getFooterCounter = ({ todoReducer }:IState):number => 
todoReducer.todos.filter((item) => !item.check).length;

export const getModeAllCheck =  ({ todoReducer }:IState):boolean => todoReducer.isAllCheck;

export const getTodosList = ({ todoReducer }:IState):Array<ITodo> => todoReducer.todos;