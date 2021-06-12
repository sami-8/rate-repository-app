import React from 'react'
import { View, Pressable, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import FormikTextInput from './FormikTextInput'
import Text from './Text'
import useSignIn from '../hooks/useSignIn'

const styles = StyleSheet.create({
  form: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    marginTop: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  submitButton: {
    width: '90%',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#0366d6',
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'white',
  }
})

const SignIn = () => {
  const [signIn] = useSignIn()

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(1)
      .required('Username is required.'),
    password: yup
      .string()
      .min(8, 'Password should be at least 8 characters long.')
      .required('Password is required.'),
  })
  const initialValues = {
    username: '',
    password: '',
  }
  const onSubmit = async values => {
    const { username, password } = values

    try {
      const { data } = await signIn({ username, password })
      const { authorize: { accessToken } } = data
      console.log('token', accessToken)
    } catch (e) {
      console.log(e)
    }
  }

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
        style={styles.input}
        name="username"
        placeholder="Username"
      />
      <FormikTextInput
        style={styles.input}
        name="password"
        placeholder="Password"
        secureTextEntry
      />
      <Pressable
        onPress={handleSubmit}
        style={styles.submitButton}
      >
        <Text
          fontWeight="bold"
          style={styles.submitButtonText}
        >
          Sign in
        </Text>
      </Pressable>
    </View>
  )
}

export default SignIn
