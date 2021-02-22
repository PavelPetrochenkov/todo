import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form } from 'formik'
import styled from 'styled-components'
import { isAuthError } from '../../redux/selectors/userSelector'
import PasswordField from '../layout/Fields/PasswordField'
import InputField from '../layout/Fields/InputField'
import { registrationValidate } from '../../validates/FormValidates'
import { registrationAction, clearError } from '../../redux/actions/userAction'

function Registration() {
  const dispatch = useDispatch()

  const isError: boolean = useSelector(isAuthError)

  useEffect(() => {
    dispatch(clearError())
  }, [])

  const handleRegistration = useCallback((email: string, password: string) => {
    dispatch(
      registrationAction({
        login: email,
        password: password,
      })
    )
  }, [])

  return (
    <StyledRegistration>
      <Title>Registration</Title>
      {isError && <ErrorTitleSpan>Registration was failed</ErrorTitleSpan>}
      <Formik
        initialValues={{ email: '', password: '', passwordConfirm: '' }}
        validate={(values) => registrationValidate(values)}
        onSubmit={(values, actions) => {
          handleRegistration(values.email, values.password)
          actions.setSubmitting(false)
          actions.resetForm({
            values: {
              email: '',
              password: '',
              passwordConfirm: '',
            },
          })
        }}
      >
        <StyledForm>
          <InputField name="email" component="div" placeholder="Email" />
          <PasswordField name="password" component="div" />
          <PasswordField name="passwordConfirm" component="div" />
          <CreateNewAccount type="submit">Submit</CreateNewAccount>
        </StyledForm>
      </Formik>
      <Hr />
      <LogIn>Log In</LogIn>
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

const LogIn = styled(Button)`
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

const CreateNewAccount = styled(Button)`
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
