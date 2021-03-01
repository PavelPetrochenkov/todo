import { Field, ErrorMessage } from 'formik'
import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

type Props = {
  name: string
  component: string
  placeholder?: string
} & InputHTMLAttributes<HTMLInputElement>

function PasswordField({ component, name, placeholder }: Props) {
  return (
    <>
      <ErrorSpan name={name} component={component} />
      <InputArea>
        <Input
          type="text"
          name={name}
          placeholder={placeholder || 'Enter this field'}
        />
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
