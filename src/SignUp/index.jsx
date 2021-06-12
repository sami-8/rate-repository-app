import React from 'react'
import { useHistory } from 'react-router-native'
import useAuth from '../hooks/useAuth'
import SignUpForm from './SignUpForm'

export default function SignUp() {
  const history = useHistory()
  const [, { signIn, signUp }] = useAuth()

  const onSubmit = async values => {
    const { username, password } = values

    try {
      await signUp({ username, password })
      await signIn({ username, password })
      history.push('/')
    } catch (e) {
      console.log(e)
    }
  }

  return <SignUpForm onSubmit={onSubmit} />
}

