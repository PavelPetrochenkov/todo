import React, { useCallback, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Types } from '../constants'
import { changeType, deleteCompletedTodos } from '../redux/actions/todoAction'
import { getTodosType, getFooterCounter } from '../redux/selectors/todoSelectors'

function Footer() {
    const dispatch = useDispatch()

    const filterType:Types = useSelector(getTodosType)

    const counter:number = useSelector(getFooterCounter)

    const handleClickChangeType = (type:Types) => () => {
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
                active={ filterType === Types.ALL }
                onClick={handleClickChangeType(Types.ALL)}
            >
                All
            </FilterButton>
            <FilterButton
                active={ filterType === Types.ACTIVE }
                onClick={handleClickChangeType(Types.ACTIVE)}
            >
                Active
            </FilterButton>
            <FilterButton
                active={ filterType === Types.COMPLETED }
                onClick={handleClickChangeType(Types.COMPLETED)}
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
