import React, { useState, useCallback, memo } from 'react'
import { useDispatch } from 'react-redux'
import { changeCheckTodo, deleteTodo, changeTextTodo } from '../redux/actions/todoAction'

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
        <li className="li--todo">
            {todo.check ? (
                <div
                    htmlFor={todo.id}
                    onClick={handleChangeCheckbox}
                    className="li__checkbox--mdf--checked"
                />
            ) : (
                <div
                    htmlFor={todo.id}
                    onClick={handleChangeCheckbox}
                    className="li__checkbox--mdf"
                />
            )}

            {!isEditMode ? (
                <span
                    className="li__content"
                    onDoubleClick={handleDoubleClickText}
                >
                    {todo.text}
                </span>
            ) : (
                <input
                    className="li__content--change"
                    placeholder="..."
                    value={inputValue}
                    onChange={handleChangeInput}
                    onKeyPress={handleKeyPressInput}
                    onBlur={handleBlur}
                    autoFocus={true}
                />
            )}
            <span className="li__btn--delete" onClick={handleDelete} />
        </li>
    )
}

export default memo(ItemTodo)
