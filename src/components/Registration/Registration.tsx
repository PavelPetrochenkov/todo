import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form } from 'formik'
import styled from 'styled-components'
import { getIsAuthError } from '../../redux/selectors/userSelector'
import PasswordField from '../layout/Fields/PasswordField'
import InputField from '../layout/Fields/InputField'
import { registrationValidate } from '../../validates/FormValidates'
import { registrationAction, clearError } from '../../redux/actions/userAction'

type formValue = {
  email: string
  password: string
  passwordConfirm: string
}

function Registration() {
  const dispatch = useDispatch()

  const isError: boolean = useSelector(getIsAuthError)

  useEffect(() => {
    dispatch(clearError())
  }, [])

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
    <StyledRegistration>
      <Title>Registration</Title>
      {isError && <ErrorTitleSpan>Registration was failed</ErrorTitleSpan>}
      <Formik
        initialValues={{ email: '', password: '', passwordConfirm: '' }}
        validate={registrationValidate}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <InputField name="email" component="div" placeholder="Email" />
          <PasswordField name="password" component="div" />
          <PasswordField name="passwordConfirm" component="div" />
          <RegistrationButton type="submit">Submit</RegistrationButton>
        </StyledForm>
      </Formik>
      <Hr />
      <LogInButton>Log In</LogInButton>
    </StyledRegistration>
  )
}

const StyledRegistration = styled.div`
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
  line-height: 32px;
  margin: 10px 0 30px 0;

  :hover {
    cursor: pointer;
    background: #2b4d91;
  }
`

const RegistrationButton = styled(Button)`
  background-color: #3da529;
  border: none;
  border-radius: 6px;
  line-height: 36px;
  width: 90%;
  margin: 15px 0 10px 0;

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

export default Registration
