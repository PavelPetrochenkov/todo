import React, { useCallback, useEffect } from 'react'
import { Formik, Form } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { logIn, clearError } from '../../redux/actions/userAction'
import { isLogInError } from '../../redux/selectors/userSelector'
import PasswordField from '../layout/Fields/PasswordField'
import InputField from '../layout/Fields/InputField'

function Login() {
  const dispatch = useDispatch()

  const isError: boolean = useSelector(isLogInError)

  useEffect(() => {
    dispatch(clearError())
  }, [])

  const doLogIn = useCallback((email: string, password: string) => {
    dispatch(
      logIn({
        id: Date.now().toString(),
        login: email,
        password: password,
      })
    )
  }, [])

  type ErrorState = {
    email?: string
    password?: string
  }

  return (
    <StyledLogin>
      <Title>Authorization</Title>
      {isError && <ErrorTitleSpan>Authorization was fail</ErrorTitleSpan>}
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          let errors: ErrorState = {}

          if (!values.email) {
            errors.email = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z0-9]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address'
          }
          
          if (!values.password) {
            errors.password = 'Required'
          } else if (values.password.length < 6) {
            errors.password = 'Too small'
          }

          return errors;
        }}
        onSubmit={(values, actions) => {
            doLogIn(values.email, values.password)
            actions.setSubmitting(false)
            actions.resetForm({
              values: {
                email: '',
                password: '',
              },
            })
          }
        }
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
