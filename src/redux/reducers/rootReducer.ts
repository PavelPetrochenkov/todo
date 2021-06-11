import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import userReducer from './userReducer'
import fileReducer from './fileReducer'

const rootReducer = combineReducers({
  todoReducer,
  userReducer,
  fileReducer,
})

export default rootReducer
