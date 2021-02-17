import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Basic = () => {
  type ErrorState = {
    email?: string
    password?: string
    passwordConfirm?: string
  }

  return (
    <div>
      <h1>Any place in your app!</h1>
      <Formik
        initialValues={{ email: '', password: '', passwordConfirm: '' }}
        validate={(values) => {
          let errors: ErrorState = {}
          if (!values.email) {
            errors.email = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address'
          }
          if (!values.password) {
            errors.password = 'Required'
          } else if (values.password.length <= 6) {
            errors.password = 'Too small'
          }

          if (!values.passwordConfirm) {
            errors.passwordConfirm = 'Required'
          } else if (values.passwordConfirm !== values.password) {
            errors.passwordConfirm = 'Not matches'
          }

          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <Field type="password" name="passwordConfirm" />
            <ErrorMessage name="passwordConfirm" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Basic
