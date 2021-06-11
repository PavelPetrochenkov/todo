import { Todo } from '../../typescript/Todos'
import { FilterTypes } from '../../constants'
import { IStore } from '../store'

export const getIsTodosNotEmpty = ({ todoReducer }: IStore): boolean =>
  !!todoReducer.todos.length

export const getTodosType = ({ todoReducer }: IStore): FilterTypes =>
  todoReducer.type

export const getFooterCounter = ({ todoReducer }: IStore): number =>
  todoReducer.todos.filter((item) => !item.ischeck).length

export const getFilesList = ({ fileReducer }: IStore): Array<any> =>
fileReducer.files
