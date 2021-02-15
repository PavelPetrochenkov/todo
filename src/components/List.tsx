import React, { useMemo } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import ItemTodo from './ItemTodo'
import { Types } from '../constants'
import { getTodosList, getTodosType } from '../redux/selectors/todoSelectors'
import { ITodo } from '../interfaces/ITodos'

function List() {
    
    const todosList:Array<ITodo> = useSelector(getTodosList);
    const todosType:string = useSelector(getTodosType);

    const filteredTodos = useMemo(():Array<ITodo> => {
        switch (todosType) {
            case Types.ACTIVE: {
                return todosList.filter((item) => !item.check)
            }
            case Types.COMPLETED: {
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
