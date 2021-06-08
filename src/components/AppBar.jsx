import React from 'react'
import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e'
  },
})

const AppBar = ({ tabs }) => {
  return (
    <View style={styles.container}>
      {tabs.map(({ label }) =>
        <AppBarTab key={label} label={label} />)}
    </View>
  )
}

export default AppBar
