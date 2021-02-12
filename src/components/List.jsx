import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import ItemTodo from './ItemTodo'
import { ACTIVE, COMPLETED } from '../constants'

function List() {
    
    const todos = useSelector(({ todoReducer }) => ({ list:todoReducer.todos, type:todoReducer.type}))

    const getFilteredTodos = useCallback((todos, type) => {
        switch (type) {
            case ACTIVE: {
                return todos.filter((item) => !item.check)
            }
            case COMPLETED: {
                return todos.filter((item) => item.check)
            }
            default: {
                return todos
            }
        }
    }, [todos])

    return (
        <ul id="ul--list-of-todo">
            {getFilteredTodos(todos.list, todos.type).map((todo) => (
                <ItemTodo key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}

export default React.memo(List)
