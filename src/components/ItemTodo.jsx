import React, { useState, useCallback, memo } from 'react'
import { useDispatch } from 'react-redux'
import { changeCheckTodo, deleteTodo, changeTextTodo } from '../redux/actions/todoAction'
import { StyledItemTodo, CheckedTodo,  UncheckedTodo, StyledText, InputEditMode, DeleteButton} from "../styled-components/ItemTodo";

function ItemTodo({ todo }) {
    
    const dispatch = useDispatch()

    const [inputValue, setInputValue] = useState(todo.text)
    const [isEditMode, setEditMode] = useState(false)

    const handleChangeCheckbox = useCallback(() => {
        dispatch(changeCheckTodo(todo.id))
    }, [todo])

    const handleDelete = useCallback(() => {
        dispatch(deleteTodo(todo.id))
    }, [todo])

    const handleChangeInput = useCallback((e) => {
        setInputValue(e.target.value)
    }, [])

    const handleKeyPressInput = useCallback(
        (e) => {
            if (e.key === 'Enter' && inputValue) {
                dispatch(changeTextTodo(todo.id, inputValue))
                setEditMode(false)
            }
        },
        [inputValue, todo]
    )

    const handleDoubleClickText = useCallback(() => {
        setEditMode(true)
    }, [])

    const handleBlur = useCallback(() => {
        setEditMode(false)
    }, [])

    return (
        <StyledItemTodo>
            {todo.check 
            ? <CheckedTodo onClick={handleChangeCheckbox}/>
            : <UncheckedTodo onClick={handleChangeCheckbox}/>
            }

            {
            !isEditMode 
            ?   <StyledText onDoubleClick={handleDoubleClickText}>
                    {todo.text}
                </StyledText>
            :   <InputEditMode
                    value={inputValue}
                    onChange={handleChangeInput}
                    onKeyPress={handleKeyPressInput}
                    onBlur={handleBlur}
                    autoFocus={true}
                />
            }
            <DeleteButton onClick={handleDelete} />
        </StyledItemTodo>
    )
}

export default memo(ItemTodo)
