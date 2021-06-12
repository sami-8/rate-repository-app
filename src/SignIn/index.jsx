import React from 'react'
import { useHistory } from 'react-router-native'
import useAuth from '../hooks/useAuth'
import SignInForm from './SignInForm'

export default function SignIn() {
  const history = useHistory()
  const [, { signIn }] = useAuth()

  const onSubmit = async values => {
    const { username, password } = values

    try {
      const { data } = await signIn({ username, password })
      console.log('token', data.authorize.accessToken)
      history.push('/')
    } catch (e) {
      console.log(e)
    }
  }

  return <SignInForm onSubmit={onSubmit} />
}

