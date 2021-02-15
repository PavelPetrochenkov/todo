import { ITodosState } from "../../interfaces/ITodos";
import { IUserState } from "../../interfaces/IUser";

export interface IState {
    todoReducer:ITodosState,
    userReducer:IUserState
}

export const isUserAuthorized = ({ userReducer }:IState):boolean => userReducer.isAuthorized;