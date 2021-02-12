import React, { useCallback, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ALL, COMPLETED, ACTIVE } from '../constants'
import { changeType, deleteCompletedTodos } from '../redux/actions/todoAction'
import { getTodosType, getFooterCounter } from '../redux/selectors/todoSelectors'

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
        <div className="controller">
            <div className="span--counter">
                <span>{counter}</span> items left
            </div>
            <button
                className={`controller__btn ${
                    filterType === ALL && 'btn--active'
                }`}
                onClick={handleClickChangeType(ALL)}
            >
                All
            </button>
            <button
                className={`controller__btn ${
                    filterType === ACTIVE && 'btn--active'
                }`}
                onClick={handleClickChangeType(ACTIVE)}
            >
                Active
            </button>
            <button
                className={`controller__btn ${
                    filterType === COMPLETED && 'btn--active'
                }`}
                onClick={handleClickChangeType(COMPLETED)}
            >
                Completed
            </button>
            <div>
                <button
                    className="controller__btn"
                    id="btn--f-clear-all"
                    onClick={handleRemoveAllCompletedTodos}
                >
                    Clear completed
                </button>
            </div>
        </div>
    )
}

export default memo(Footer)
