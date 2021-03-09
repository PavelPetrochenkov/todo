import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form } from 'formik'
import styled from 'styled-components'
import {
  getIsAuthError,
  getRestoreLogin,
} from '../../redux/selectors/userSelector'
import InputField from '../layout/Fields/InputField'
import { checkLoginValidate } from '../../validates/FormValidates'
import {
  clearErrorAction,
  checkLoginAction,
} from '../../redux/actions/userAction'
import { useHistory } from 'react-router-dom'
import PasswordField from '../layout/Fields/PasswordField'
import { resetPassword } from '../../api/AuthAPI'

type formValueCheck = {
  email: string
}

type formValueReset = {
  password: string
  passwordConfirm: string
}

function ForgotPassword() {
  const dispatch = useDispatch()

  const history = useHistory()

  const restoreLogin: string = useSelector(getRestoreLogin)

  const isError: boolean = useSelector(getIsAuthError)

  useEffect(() => {
    dispatch(clearErrorAction())
  }, [])

  useEffect(() => {
    if (restoreLogin) {
    }
  }, [restoreLogin])

  const handleSubmitCheckLogin = useCallback(
    (values: formValueCheck, actions: any) => {
      dispatch(
        checkLoginAction.request({
          login: values.email,
        })
      )
      actions.setSubmitting(false)
      actions.resetForm({
        values: {
          email: '',
        },
      })
    },
    []
  )

  const handleSubmitResetPassword = useCallback(
    (values: formValueReset, actions: any) => {
      dispatch(
        checkLoginAction.request({
          password: values.password,
          passwordConfirm: values.passwordConfirm,
        })
      )
      actions.setSubmitting(false)
      actions.resetForm({
        values: {
          email: '',
        },
      })
    },
    []
  )

  return (
    <StyledLogin>
      <Title>Find Your Account</Title>
      {isError && <ErrorTitleSpan>Something went wrong</ErrorTitleSpan>}
      <Hr />
      <span>Please enter your email to search for your account.</span>
      <Hr />
      {restoreLogin ? (
        <Formik
          initialValues={{ password: '', passwordConfirm: '' }}
          validate={resetPassword}
          onSubmit={handleSubmitResetPassword}
        >
          <StyledForm>
            <PasswordField name="password" component="div" />
            <PasswordField name="passwordConfirm" component="div" />
            <RegistrationButton type="submit">Submit</RegistrationButton>
          </StyledForm>
        </Formik>
      ) : (
        <Formik
          initialValues={{ email: '' }}
          validate={checkLoginValidate}
          onSubmit={handleSubmitCheckLogin}
        >
          <StyledForm>
            <InputField name="email" component="div" placeholder="Email" />
            <RegistrationButton type="submit">Search</RegistrationButton>
            <RegistrationButton>Cancel</RegistrationButton>
          </StyledForm>
        </Formik>
      )}
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

const LogInButton = styled(Button)`
  background: #4267b2;
  border: none;
  border-radius: 6px;
  line-height: 36px;
  width: 90%;
  margin: 15px 0 10px 0;

  :hover {
    cursor: pointer;
    background: #2b4d91;
  }
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
