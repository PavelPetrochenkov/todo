import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import ItemTodo from './ItemTodo'
import { ACTIVE, COMPLETED } from '../constants'
import { getTodosList, getTodosType } from '../redux/selectors/todoSelectors'
import { StyledList } from '../styled-components/List'

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

export default React.memo(List)
