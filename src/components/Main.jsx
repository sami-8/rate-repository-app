import React from 'react'
import { Route, Switch, Redirect } from 'react-router-native'
import { withRouter } from 'react-router-dom'
import { StyleSheet, View } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import SignIn from './SignIn'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8',
  },
})

const Main = ({ history }) => {
  const tabs = [
    {
      label: 'Repositories',
      action: () => history.push('/')
    },
    {
      label: 'Sign in',
      action: () => history.push('/signin')
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

export default withRouter(Main)
