import React from 'react'
import { View, Pressable, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput'
import Text from './Text'

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
    backgroundColor: 'blue',
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
  const initialValues = {
    username: '',
    password: '',
  }
  const onSubmit = values => {
    console.log(values)
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
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
        placeholder="Username" />
      <FormikTextInput
        style={styles.input}
        name="password"
        placeholder="Password"
        secureTextEntry />
      <Pressable onPress={handleSubmit} style={styles.submitButton}>
        <Text
          fontWeight="bold"
          style={styles.submitButtonText}>
          Sign in
        </Text>
      </Pressable>
    </View>
  )
}

export default SignIn
