import React, { useMemo } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import ItemTodo from './ItemTodo'
import { FilterTypes } from '../../../constants'
import {
  getTodosList,
  getTodosType,
} from '../../../redux/selectors/todoSelectors'
import { Todo } from '../../../typescript/Todos'

function List() {
  const todosList: Array<Todo> = useSelector(getTodosList)
  const todosType: string = useSelector(getTodosType)

  const filteredTodos = useMemo((): Array<Todo> => {
    switch (todosType) {
      case FilterTypes.ACTIVE: {
        return todosList.filter((item) => !item.check)
      }
      case FilterTypes.COMPLETED: {
        return todosList.filter((item) => item.check)
      }
      default: {
        return todosList
      }
    }
  }, [todosList, todosType])

  return (
    <StyledList>
      {filteredTodos.map((todo) => (
        <ItemTodo key={todo.id} todo={todo} />
      ))}
    </StyledList>
  )
}

const StyledList = styled.ul`
  list-style: none;
  padding-left: 5px;
  margin: 0;
`

export default React.memo(List)
