import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import ItemTodo from './ItemTodo'
import { ACTIVE, COMPLETED } from '../constants'
import { getTodosList } from '../redux/selectors/todoSelectors'

function List() {
    
    const todos = useSelector(getTodosList)

    const filteredTodos = useMemo(() => {
        switch (todos.type) {
            case ACTIVE: {
                return todos.list.filter((item) => !item.check)
            }
            case COMPLETED: {
                return todos.list.filter((item) => item.check)
            }
            default: {
                return todos.list
            }
        }
    }, [todos])

    return (
        <ul id="ul--list-of-todo">
            {filteredTodos.map((todo) => (
                <ItemTodo key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}

export default React.memo(List)
