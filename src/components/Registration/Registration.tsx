import React from 'react'
import { Formik, Form } from 'formik'
import styled from 'styled-components'
import PasswordField from '../layout/Fields/PasswordField'
import InputField from '../layout/Fields/InputField'
import { registrationValidate } from '../../validates/FormValidates'

function Registration() {
  return (
    <StyledRegistration>
      <Title>Registration</Title>
      <Formik
        initialValues={{ email: '', password: '', passwordConfirm: '' }}
        validate={(values) => registrationValidate(values)}
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
