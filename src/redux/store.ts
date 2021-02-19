import { applyMiddleware, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/rootReducer'
import { TodosState } from '../typescript/Todos'
import { UserState } from '../typescript/User'
import rootWatcher from './sagas'

export type IStore = {
  todoReducer: TodosState
  userReducer: UserState
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<IStore> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootWatcher)

export default store
