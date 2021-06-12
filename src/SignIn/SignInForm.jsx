import React from 'react'
import { Formik } from 'formik'
import { StyleSheet, View } from 'react-native'
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
    marginBottom: 10,
  },
})

export default function SignInForm({ onSubmit }) {
  const initialValues = {
    username: '',
    password: '',
  }
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(1)
      .required('Username is required.'),
    password: yup
      .string()
      .min(5, ({ min }) => `Password should be at least ${min} characters long.`)
      .required('Password is required.'),
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
        testID="singin-username"
        style={styles.input}
        name="username"
        placeholder="Username"
      />
      <FormikTextInput
        testID="singin-password"
        style={styles.input}
        name="password"
        placeholder="Password"
        secureTextEntry
      />
      <Button
        testID="singin-submit-button"
        action={handleSubmit}
        style={styles.submitButton}
        text={'Sign in'} />
    </View>
  )
}

