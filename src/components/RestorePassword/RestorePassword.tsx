import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form } from 'formik'
import styled from 'styled-components'
import {
  getIsAuthError,
  getRestoreLogin,
} from '../../redux/selectors/userSelector'
import PasswordField from '../layout/Fields/PasswordField'
import InputField from '../layout/Fields/InputField'
import { registrationValidate } from '../../validates/FormValidates'
import {
  registrationAction,
  clearErrorAction,
} from '../../redux/actions/userAction'

type formValue = {
  email: string
  password: string
  passwordConfirm: string
}

function ForgotPassword() {
  const dispatch = useDispatch()

  const restoreLogin: string = useSelector(getRestoreLogin)

  const isError: boolean = useSelector(getIsAuthError)

  useEffect(() => {
    dispatch(clearErrorAction())
  }, [])

  useEffect(() => {
    console.log(restoreLogin)
  }, [restoreLogin])

  const handleSubmit = useCallback((values: formValue, actions: any) => {
    dispatch(
      registrationAction.request({
        login: values.email,
        password: values.password,
      })
    )
    actions.setSubmitting(false)
    actions.resetForm({
      values: {
        email: '',
        password: '',
        passwordConfirm: '',
      },
    })
  }, [])

  return (
    <StyledLogin>
      <Title>Reset Your Password</Title>
      {isError && <ErrorTitleSpan>Something went wrong</ErrorTitleSpan>}
      <Hr />
      <span>Please enter new password for your account.</span>
      <Hr />
      <Formik
        initialValues={{ email: '', password: '', passwordConfirm: '' }}
        validate={registrationValidate}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <PasswordField name="password" component="div" />
          <PasswordField name="passwordConfirm" component="div" />
          <RegistrationButton type="submit">Submit</RegistrationButton>
        </StyledForm>
      </Formik>
    </StyledLogin>
  )
}

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Title = styled.span`
  text-align: center;
  margin: 10px 0;
  font-size: 32px;
`

const Button = styled.button`
  width: 50%;
  align-items: center;
  font-size: 18px;
  color: white;
  outline: none;
  transition: 1s;
`

const RegistrationButton = styled(Button)`
  background-color: #3da529;
  border: none;
  border-radius: 6px;
  line-height: 32px;
  margin: 10px 0 30px 0;

  :hover {
    cursor: pointer;
    background: #409130;
  }
`

const Hr = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid black;
  opacity: 0.2;
`

const ErrorTitleSpan = styled.span`
  width: 90%;
  color: rgb(130, 0, 0);
  font-size: 28px;
`

export default ForgotPassword
