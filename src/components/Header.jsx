import React, { useState, useCallback, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTodo, checkAllTodos } from '../redux/actions/todoAction'

function Header() {
    const dispatch = useDispatch()

    const isArrayEmpty = useSelector(
        ({ todoReducer }) => !!todoReducer.todos.length
    )

    const isAllCheck = useSelector(
        ({ todoReducer }) => todoReducer.isAllCheck
    )

    const [inputValue, setInputValue] = useState('')

    const handleChangeInput = useCallback((e) => {
        setInputValue(e.target.value)
    }, [])

    const handleKeyPress = useCallback((e) => {
        if (e.key === 'Enter' && inputValue) {
            dispatch(createTodo(inputValue))
            setInputValue('')
        }
    },[inputValue])

    const handleCheckAll = useCallback(() => {
        dispatch(checkAllTodos())
    }, [])

    return (
        <div className="add-todo" id="header">
            {isArrayEmpty && (
                <div
                    className={
                        isAllCheck
                            ? 'complete-all complete-all--active'
                            : 'complete-all'
                    }
                >
                    <span
                        id="btn--complete-all"
                        onClick={handleCheckAll}
                    />
                </div>
            )}
            <input
                id="inp--add-todo"
                type="text"
                placeholder="What need to be done?"
                value={inputValue}
                onChange={handleChangeInput}
                onKeyPress={handleKeyPress}
            />
        </div>
    )
}

export default memo(Header)
