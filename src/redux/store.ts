import { createStore, Store } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer'
import { TodosState } from '../typescript/Todos'
import { UserState } from '../typescript/User'

export type IStore = {
  todoReducer: TodosState
  userReducer: UserState
}

const store: Store<IStore> = createStore(rootReducer, devToolsEnhancer({}))

export default store
