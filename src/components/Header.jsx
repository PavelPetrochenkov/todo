import React, { useState, useCallback, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTodo, checkAllTodos } from '../redux/actions/todoAction'
import { getTodosLength, getModeAllCheck } from "../redux/selectors/todoSelectors"
import { StyledHeader, InputAddTodo, CheckAllButton } from '../styled-components/Header'

function Header() {
    const dispatch = useDispatch()

    const isArrayEmpty = !!useSelector(getTodosLength)

    const isAllCheck = useSelector(getModeAllCheck)

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
        <StyledHeader>
            {
            isArrayEmpty && <CheckAllButton onClick={handleCheckAll} active={isAllCheck}/>
            }
            <InputAddTodo
                placeholder="What need to be done?"
                value={inputValue}
                onChange={handleChangeInput}
                onKeyPress={handleKeyPress}
            />
        </StyledHeader>
    )
}

export default memo(Header)
