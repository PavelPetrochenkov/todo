import React, { useCallback, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { FilterTypes } from '../../constants'
import { device } from '../../device'
import {
  changeTypeAction,
  deleteCompletedTodosAction,
} from '../../redux/actions/todoAction'
import {
  getTodosType,
  getFooterCounter,
} from '../../redux/selectors/todoSelectors'
import { getUserId } from '../../redux/selectors/userSelector'

function Footer() {
  const dispatch = useDispatch()

  const userId: string = useSelector(getUserId)

  const filterType: FilterTypes = useSelector(getTodosType)

  const counter: number = useSelector(getFooterCounter)

  const handleClickChangeType = (type: FilterTypes) => () => {
    dispatch(changeTypeAction(type))
  }

  const handleRemoveAllCompletedTodos = useCallback(() => {
    dispatch(deleteCompletedTodosAction.request(userId))
  }, [])

  return (
    <StyledFooter>
      <Counter>{counter} items left</Counter>
      <FilterButton
        active={filterType === FilterTypes.ALL}
        onClick={handleClickChangeType(FilterTypes.ALL)}
      >
        All
      </FilterButton>
      <FilterButton
        active={filterType === FilterTypes.ACTIVE}
        onClick={handleClickChangeType(FilterTypes.ACTIVE)}
      >
        Active
      </FilterButton>
      <FilterButton
        active={filterType === FilterTypes.COMPLETED}
        onClick={handleClickChangeType(FilterTypes.COMPLETED)}
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

  @media ${device.mobileS},
    ${device.mobileM},
    ${device.mobileL},
    ${device.tablet} {
    flex-direction: column;
  }
`

const Counter = styled.div`
  padding-right: 20px;

  @media ${device.mobileS},
    ${device.mobileM},
    ${device.mobileL},
    ${device.tablet} {
    padding: 0 0 5px 0;
    font-size: 20px;
  }
`

const FilterButton = styled.div<{ active?: boolean }>`
  color: ${(props) =>
    props.active ? 'rgb(66, 66, 66)' : 'rgb(156, 156, 156)'};
  padding: 4px 8px;
  margin: 0 10px;
  border: 1px solid
    ${(props) => (props.active ? 'rgb(66, 66, 66)' : 'rgb(233, 233, 233)')};
  border-radius: 2px;
  box-shadow: 2px 2px 5px whitesmoke;
  outline: none;

  &:hover {
    ${(props) => !props.active && 'border: 1px solid rgb(194, 194, 194);'}
    cursor: pointer;
  }

  @media ${device.mobileS},
    ${device.mobileM},
    ${device.mobileL},
    ${device.tablet} {
    width: 90%;
    margin: 3px 0;
    display: flex;
    justify-content: center;
  }
`

export default memo(Footer)
