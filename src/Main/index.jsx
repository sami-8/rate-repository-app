import React, { useEffect } from 'react'
import { Route, Switch, Redirect, useHistory } from 'react-router-native'
import { StyleSheet, View } from 'react-native'
import RepositoryList from '../RepositoryList'
import AppBar from './AppBar'
import SignIn from '../SignIn'
import SignUp from '../SignUp'
import Text from '../components/Text'
import useAuth from '../hooks/useAuth'
import Repository from '../Repository'
import ReviewForm from '../ReviewForm'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.backgroundSecondary,
  },
})

export default function Main() {
  const history = useHistory()
  const [
    { authorizedUser, getAuthorizedUser, loading, error },
    { signOut }
  ] = useAuth()

  useEffect(() => {
    getAuthorizedUser()
  }, [])

  if (loading) {
    return <><Text>loading...</Text></>
  }
  if (error) {
    console.error(error.message)
  }

  const tabs = [
    {
      label: 'Repositories',
      action: () => history.push('/')
    },
    !authorizedUser && {
      label: 'Sign in',
      action: () => history.push('/signin')
    },
    !authorizedUser && {
      label: 'Sign up',
      action: () => history.push('/signup')
    },
    authorizedUser && {
      label: 'Create a review',
      action: () => history.push('/new-review')
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
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/new-review" exact>
          <ReviewForm />
        </Route>
        <Route path="/repository/:id">
          <Repository />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  )
}

