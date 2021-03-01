import { Field, ErrorMessage } from 'formik'
import React, { useState, InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import Show from '../../../icon/Show.png'
import Hide from '../../../icon/Hide.png'

type Props = {
  name: string
  component: string
  placeholder?: string
} & InputHTMLAttributes<HTMLInputElement>

function PasswordField({ name, component, placeholder }: Props) {
  const [isHideMode, setIsHideMode] = useState<boolean>(false)

  const handleClickHideEye = () => {
    setIsHideMode(!isHideMode)
  }

  return (
    <>
      <ErrorSpan name={name} component={component} />
      <InputArea>
        <Input
          type={!isHideMode ? 'password' : 'text'}
          name={name}
          placeholder={placeholder || 'Password'}
        />
        <HideEye onClick={handleClickHideEye} show={isHideMode} />
      </InputArea>
    </>
  )
}

const InputArea = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const HideEye = styled.div<{ show?: boolean }>`
  position: absolute;
  right: 7%;
  height: 30px;
  width: 30px;
  background-image: url(${(props) => (props.show ? Show : Hide)});
  background-size: 30px 30px;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 2;

  :hover {
    cursor: pointer;
  }
`
const Input = styled(Field)`
  margin: 5px;
  font-size: 18px;
  line-height: 36px;
  outline: none;
  width: 85%;
  box-sizing: border;
  opacity: 0.6;
  padding: 0 15px;

  ::first-letter {
    margin-left: 5px;
  }

  ::placeholder {
    opacity: 0.6;
  }

  :focus {
    opacity: 1;
  }
`
const ErrorSpan = styled(ErrorMessage)`
  width: 90%;
  color: rgb(130, 0, 0);
`

export default PasswordField
