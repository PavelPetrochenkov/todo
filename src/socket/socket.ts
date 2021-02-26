import { Manager } from 'socket.io-client'
import { createTodoSuccess } from '../redux/actions/todoAction'
import store from '../redux/store'
const ENDPOINT = 'http://127.0.0.1:1328'

const manager: any = new Manager(ENDPOINT, {
  reconnectionDelayMax: 10000,
})

const socket = manager.socket('/')

socket.on('addTodoSuccess', (data: any) => {
  store.dispatch(createTodoSuccess(data))
  console.log(data)
})

socket.on('socketId', (socket: any) => {
  localStorage.socket = socket
  console.log(socket)
})

export default socket
