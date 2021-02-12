import React, { useMemo } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import ItemTodo from './ItemTodo'
import { ACTIVE, COMPLETED } from '../constants'
import { getTodosList, getTodosType } from '../redux/selectors/todoSelectors'

function List() {
    
    const todosList = useSelector(getTodosList);
    const todosType = useSelector(getTodosType);

    const filteredTodos = useMemo(() => {
        switch (todosType) {
            case ACTIVE: {
                return todosList.filter((item) => !item.check)
            }
            case COMPLETED: {
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
