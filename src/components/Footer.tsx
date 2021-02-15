import React, { useCallback, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { ALL, COMPLETED, ACTIVE } from '../constants'
import { changeType, deleteCompletedTodos } from '../redux/actions/todoAction'
import { getTodosType, getFooterCounter } from '../redux/selectors/todoSelectors'

function Footer() {
    const dispatch = useDispatch()

    const filterType:string = useSelector(getTodosType)

    const counter:number = useSelector(getFooterCounter)

    const handleClickChangeType = (type:string) => () => {
        dispatch(changeType(type))
    }

    const handleRemoveAllCompletedTodos = useCallback(() => {
        dispatch(deleteCompletedTodos())
    }, [])

    return (
        <StyledFooter>
            <Counter>
                {counter} items left
            </Counter>
            <FilterButton
                active={ filterType === ALL }
                onClick={handleClickChangeType(ALL)}
            >
                All
            </FilterButton>
            <FilterButton
                active={ filterType === ACTIVE }
                onClick={handleClickChangeType(ACTIVE)}
            >
                Active
            </FilterButton>
            <FilterButton
                active={ filterType === COMPLETED }
                onClick={handleClickChangeType(COMPLETED)}
            >
                Completed
            </FilterButton>
            <FilterButton
                className="controller__btn"
                onClick={handleRemoveAllCompletedTodos}
            >
                Clear completed
            </FilterButton>
        </StyledFooter>
    )
}

const StyledFooter = styled.ul`
    display: flex;
    align-items: center;
    padding: 0 15px 15px 15px;
    color: rgb(156, 156, 156);
    font-size: 16px;
`

const Counter = styled.div`
    padding-right: 20px;
`

const FilterButton = styled.div<{active?:boolean}>`
    color: ${props => props.active ? "rgb(66, 66, 66)" : "rgb(156, 156, 156)"};
    padding: 4px 8px;
    margin: 0 10px;
    border: 1px solid ${props => props.active ? "rgb(66, 66, 66)" : "rgb(233, 233, 233)"};
    border-radius: 2px;
    box-shadow: 2px 2px 5px whitesmoke;
    outline: none;

    &:hover{
        border: 1px solid ${props => props.active ? "rgb(66, 66, 66)" : "rgb(194, 194, 194)"};
        cursor: pointer;
    }
`

export default memo(Footer)
