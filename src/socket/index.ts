import { createTodoSuccess, deleteTodoSuccess, changeTextTodoSuccess, checkAllTodosSuccess, deleteCompletedTodosSuccess, getAllTodosSuccess } from './../redux/actions/todoAction';
import io from 'socket.io-client'
const ENDPOINT = 'http://localHost:1328'

let socket = io({ autoConnect: false })

export const initSocket = (userId: string, token: string, refreshToken:string, dispatch:any) => {
  socket = io(ENDPOINT, {
    transportOptions: {
      polling: {
        extraHeaders: {
          userId,
          token,
          refreshToken
        },
      },
    },
     autoConnect: false 
  })

  socket.connect()

  socket.on('getTodosSuccess', async(data:any)=>{
    dispatch(getAllTodosSuccess(data))
  })

  socket.on('addTodoSuccess', async(data:any)=>{
    dispatch(createTodoSuccess(data))
  })

  socket.on('deleteTodoSuccess', async(data:any)=>{
    dispatch(deleteTodoSuccess(data))
  })

  socket.on('changeTodoSuccess', async(data:any)=>{
    dispatch(changeTextTodoSuccess(data))
  })

  socket.on('checkAllTodosSuccess', async(data:any)=>{
    dispatch(checkAllTodosSuccess(data))
  })

  socket.on('clearAllCompletedTodosSuccess', async(data:any)=>{
    dispatch(deleteCompletedTodosSuccess(data))
  })
}

export const getSocket = () => {
  return socket
}


export const disconnectSocket = () => {
  socket.disconnect()
}
