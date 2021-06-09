import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
  },
})

const AppBar = ({ tabs }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View style={{ flexDirection: 'row' }}>
          {tabs.map(({ label, action }) =>
            <AppBarTab
              key={label}
              label={label}
              action={action} />)}
        </View>
      </ScrollView>
    </View>
  )
}

export default AppBar
