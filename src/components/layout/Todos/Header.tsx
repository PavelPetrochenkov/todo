import React, { useState, useCallback, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { createTodo, checkAllTodos } from '../../../redux/actions/todoAction'
import { getTodosLength, getModeAllCheck } from "../../../redux/selectors/todoSelectors"
import arrow from '../../../icon/ArrowDown.png'

function Header() {
    
    const dispatch = useDispatch()

    const isArrayHaveTodo:boolean = !!useSelector(getTodosLength)

    const isAllCheck:boolean = useSelector(getModeAllCheck)

    const [inputValue, setInputValue] = useState<string>('')

    const handleChangeInput = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }, [])

    const handleKeyPress = useCallback((e:React.KeyboardEvent<HTMLInputElement>) => {
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
            isArrayHaveTodo && <CheckAllButton onClick={handleCheckAll} active={isAllCheck}/>
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

const InputAddTodo = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1 px solid black;
    outline: none;
    font-size: 24px;
    
    ::placeholder {
        opacity:0.6;
    }
`

const CheckAllButton = styled.span<{active:boolean}>`
    margin: 0 5px;
    height: 25px;
    min-width: 25px;
    border: 1px solid rgb(150, 150, 150);
    border-radius: 50%;
    background-image: url(${arrow});
    background-size: 25px 25px;
    background-position: center;
    background-position-y: 1px;
    background-repeat: no-repeat;
    opacity: ${props => props.active ? "0.8" : "0.4"};
   
    &:hover{
        cursor: pointer;
        opacity:0.8
    }
`

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid whitesmoke;
    box-shadow: 2px 0 10px whitesmoke;
`

export default memo(Header)
