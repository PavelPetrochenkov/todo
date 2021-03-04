import { FilterTypes } from '../constants'

export type Todo = {
  id: string
  text: string
  ischeck: boolean
}

export type TodosState = {
  todos: Array<Todo>
  type: FilterTypes
}
