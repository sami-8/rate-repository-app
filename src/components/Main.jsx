import React from 'react'
import { Route, Switch, Redirect, useHistory } from 'react-router-native'
import { StyleSheet, View } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import SignIn from './SignIn'
import Text from './Text'
import { useQuery } from '@apollo/client'
import { GET_AUTHORIZED_USER } from '../graphql/queries'
import useSignIn from '../hooks/useSignIn'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8',
  },
})

const Main = () => {
  const history = useHistory()
  const { signOut } = useSignIn()
  const { loading, error, data } = useQuery(GET_AUTHORIZED_USER)

  if (loading) {
    return <><Text>loading...</Text></>
  }
  if (error) {
    console.error(error.message)
  }
  const { authorizedUser } = data

  const tabs = [
    {
      label: 'Repositories',
      action: () => history.push('/')
    },
    !authorizedUser && {
      label: 'Sign in',
      action: () => history.push('/signin')
    },
    authorizedUser && {
      label: 'Sign out',
      action: async () => {
        await signOut()
        history.push('/')
      }
    },
  ]

  return (
    <View style={styles.container}>
      <AppBar tabs={tabs} />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  )
}

export default Main
