import styled from 'styled-components'

import checkedIcon from '../icon/Ok.png'
import deleteIcon from '../icon/Delete.png'

export const UncheckedTodo = styled.div`
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

export const CheckedTodo = styled(UncheckedTodo)`

  background-image: url(${checkedIcon});
  background-size: 20px 20px;
  background-position: center;
  background-repeat: no-repeat;

`

export const StyledText = styled.span`
  margin: 0 50px;
  display: flex;
  align-items: center;
  word-wrap: break-word;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const InputEditMode = styled.input`
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

export const DeleteButton = styled.span`
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

export const StyledItemTodo = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 24px;
  width: 100%;
  height: 55px;
  border-bottom: 1px solid whitesmoke;

  &:hover > span${DeleteButton}{
    opacity:0.8;
  }
`