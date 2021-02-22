import React, { useCallback, useEffect } from 'react'
import { Formik, Form } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { logInREQUESTED, clearError } from '../../redux/actions/userAction'
import { isAuthError } from '../../redux/selectors/userSelector'
import PasswordField from '../layout/Fields/PasswordField'
import InputField from '../layout/Fields/InputField'
import { loginValidate } from '../../validates/FormValidates'

type formValue = {
  email: string
  password: string
}

function Login() {
  const dispatch = useDispatch()

  const isError: boolean = useSelector(isAuthError)

  useEffect(() => {
    dispatch(clearError())
  }, [])

  const doLogIn = useCallback((email: string, password: string) => {
    dispatch(
      logInREQUESTED({
        login: email,
        password: password,
      })
    )
  }, [])

  const handleSubmit = useCallback((values: formValue, actions: any) => {
    doLogIn(values.email, values.password)
    actions.setSubmitting(false)
    actions.resetForm({
      values: {
        email: '',
        password: '',
      },
    })
  }, [])

  return (
    <StyledLogin>
      <Title>Authorization</Title>
      {isError && <ErrorTitleSpan>Authorization was failed</ErrorTitleSpan>}
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => loginValidate(values)}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
      >
        <StyledForm>
          <InputField name="email" component="div" placeholder="Email" />
          <PasswordField name="password" component="div" />
          <LogIn type="submit">Log in</LogIn>
        </StyledForm>
      </Formik>
      <Hr />
      <CreateNewAccount>Create New Account</CreateNewAccount>
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

const LogIn = styled(Button)`
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

const CreateNewAccount = styled(Button)`
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

export default Login
