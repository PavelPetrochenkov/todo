import { createStore, Store } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer'
import { ITodosState } from '../interfaces/ITodos'


interface IStore{
    todoReducer:ITodosState
}

const store:Store<IStore> = createStore(rootReducer, devToolsEnhancer({}))

export default store
