import React, { useCallback, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ALL, COMPLETED, ACTIVE } from '../constants'
import { changeType, deleteCompletedTodos } from '../redux/actions/todoAction'
import { getTodosType, getFooterCounter } from '../redux/selectors/todoSelectors'
import { StyledFooter, Counter, FilterButton } from '../styled-components/Footer'

function Footer() {
    const dispatch = useDispatch()

    const filterType = useSelector(getTodosType)

    const counter = useSelector(getFooterCounter)

    const handleClickChangeType = (type) => () => {
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

export default memo(Footer)
