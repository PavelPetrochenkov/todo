type RegistrationErrorState = {
  email?: string
  password?: string
  passwordConfirm?: string
}

type RegistrationState = {
  email: string
  password: string
  passwordConfirm: string
}

export const registrationValidate = (
  values: RegistrationState
): RegistrationErrorState => {
  let errors: RegistrationErrorState = {}
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
}
type LoginErrorState = {
  email?: string
  password?: string
}

type LoginState = {
  email: string
  password: string
}

export const loginValidate = (values: LoginState): LoginErrorState => {
  let errors: LoginErrorState = {}

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

  return errors
}
