import { getSocket } from './../index'

export const getTodos = (userId:string) => {
  getSocket().emit('getTodos', userId);
}

export const addTodo = (text:string) => {
  getSocket().emit('addTodo', text);
}

export const deleteTodo = (id:string) => {
  getSocket().emit('deleteTodo', id);
}

export const changeTodoCheck = (id:string,userId:string, check:boolean) => {
  getSocket().emit('changeTodo', id,userId, check);
}

export const changeTodoText = (id:string,userId:string, text:string) => {
  getSocket().emit('changeTodo', id,userId, text);
}

export const checkAllTodos = (userId:string, check:boolean) => {
  getSocket().emit('checkAllTodos', userId, check);
}

export const clearAllCompletedTodos = (userId:string) => {
  getSocket().emit('clearAllCompletedTodos', userId);
}

