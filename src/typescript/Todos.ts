import { FilterTypes } from '../constants'

export type Todo = {
  _id: string
  text: string
  check: boolean
}

export type TodosState = {
  todos: Array<Todo>
  type: FilterTypes
}
