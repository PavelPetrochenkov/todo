import React, { useState, useCallback, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {
  changeCheckTodoRequest,
  deleteTodoRequest,
  changeTextTodoRequest,
} from '../../../redux/actions/todoAction'
import checkedIcon from '../../../icon/Ok.png'
import deleteIcon from '../../../icon/Delete.png'
import { Todo } from '../../../typescript/Todos'
import { getUserId } from '../../../redux/selectors/userSelector'

type ItemTodoProps = {
  todo: Todo
}

function ItemTodo({ todo }: ItemTodoProps) {
  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState<string>(todo.text)
  const [isEditMode, setEditMode] = useState<boolean>(false)

  const userId: string = useSelector(getUserId)

  const handleChangeCheckbox = useCallback(() => {
    dispatch(changeCheckTodoRequest(todo._id, userId, todo.check))
  }, [todo])

  const handleDelete = useCallback(() => {
    dispatch(deleteTodoRequest(todo._id, userId))
  }, [todo])

  const handleChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value)
    },
    []
  )

  const handleKeyPressInput = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && inputValue) {
        dispatch(changeTextTodoRequest(todo._id, userId, inputValue))
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
      {todo.check ? (
        <CheckedTodo onClick={handleChangeCheckbox} />
      ) : (
        <UncheckedTodo onClick={handleChangeCheckbox} />
      )}

      {!isEditMode ? (
        <StyledText onDoubleClick={handleDoubleClickText}>
          {todo.text}
        </StyledText>
      ) : (
        <InputEditMode
          value={inputValue}
          onChange={handleChangeInput}
          onKeyPress={handleKeyPressInput}
          onBlur={handleBlur}
          autoFocus={true}
        />
      )}
      <DeleteButton onClick={handleDelete} />
    </StyledItemTodo>
  )
}

const StyledText = styled.span`
  margin: 0 50px;
  display: flex;
  align-items: center;
  word-wrap: break-word;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const UncheckedTodo = styled.div`
  cursor: pointer;
  position: absolute;
  left: 15px;
  height: 25px;
  width: 25px;
  border: 1px solid rgb(117, 117, 117);
  background-color: rgb(243, 243, 243);
  border-radius: 50%;
  opacity: 0.6;

  &:hover {
    background-color: rgb(224, 224, 224);
    opacity: 0.8;
  }
`

const CheckedTodo = styled(UncheckedTodo)`
  background-image: url(${checkedIcon});
  background-size: 20px 20px;
  background-position: center;
  background-repeat: no-repeat;

  & + span${StyledText} {
    opacity: 0.6;
    text-decoration: line-through;
  }
`

const InputEditMode = styled.input`
  margin-left: 50px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  z-index: 2;
  border: 1px solid rgb(129, 129, 129);
  outline-style: none;
  border-radius: 0%;
  font-size: 24px;
  box-shadow: inset -1px -1px 5px rgb(218, 218, 218);
`

const DeleteButton = styled.span`
  position: absolute;
  right: 20px;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-image: url(${deleteIcon});
  background-size: 30px 30px;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

const StyledItemTodo = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 24px;
  width: 100%;
  height: 55px;
  border-bottom: 1px solid whitesmoke;

  &:hover > span${DeleteButton} {
    opacity: 0.8;
  }
`

export default memo(ItemTodo)
