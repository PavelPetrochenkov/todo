import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer'

interface ITodoState{
    todos: Array<{id:number, text:string, check:boolean}>,
    type: string,
    isAllCheck: boolean
}

interface IStore{
    todoReducer:ITodoState
}

const store:IStore = createStore(rootReducer, devToolsEnhancer({}))

export default store
