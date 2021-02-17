import React from 'react'
import { Formik, Form } from 'formik'
import styled from 'styled-components'
import PasswordField from '../layout/Fields/PasswordField'
import InputField from '../layout/Fields/InputField'

function Registration() {
  type ErrorState = {
    email?: string
    password?: string
    passwordConfirm?: string
  }

  return (
    <StyledRegistration>
      <Title>Registration</Title>
      <Formik
        initialValues={{ email: '', password: '', passwordConfirm: '' }}
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

          if (!values.passwordConfirm) {
            errors.passwordConfirm = 'Required'
          } else if (values.passwordConfirm !== values.password) {
            errors.passwordConfirm = 'Not matches'
          }
          return errors
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
            actions.resetForm({
              values: {
                email: '',
                password: '',
                passwordConfirm: '',
              },
            })
          }, 400)
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

export default Registration
