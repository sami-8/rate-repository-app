import React from 'react'
import { Formik } from 'formik'
import { View, StyleSheet } from 'react-native'
import * as yup from 'yup'
import Button from '../components/Button'
import FormikTextInput from '../components/FormikTextInput'

const styles = StyleSheet.create({
  form: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  submitButton: {
    width: '90%',
    marginTop: 10,
    marginBottom: 10
  },
})

export default function SignUpForm({ onSubmit }) {
  const initialValues = {
    username: '',
    password: '',
    passwordConfirm: '',
  }
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .max(30, ({ max }) => `Username should be at most ${max} characters long.`)
      .required('Username is required.'),
    password: yup
      .string()
      .min(5, ({ min }) => `Password should be at least ${min} characters long.`)
      .max(50, ({ max }) => `Password should be at most ${max} characters long.`)
      .required('Password is required.'),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match.')
      .required('Password confirm is required')
  })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <Form handleSubmit={handleSubmit} />}
    </Formik>
  )
}

const Form = ({ handleSubmit }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput
        testID="signup-username"
        style={styles.input}
        name="username"
        placeholder="Username"
      />
      <FormikTextInput
        testID="signup-password"
        style={styles.input}
        name="password"
        placeholder="Password"
        secureTextEntry
      />
      <FormikTextInput
        testID="signup-password-confirm"
        style={styles.input}
        name="passwordConfirm"
        placeholder="Password confirmation"
        secureTextEntry
      />
      <Button
        testID="signup-submit"
        action={handleSubmit}
        style={styles.submitButton}
        text={'Sign up'} />
    </View>
  )
}

