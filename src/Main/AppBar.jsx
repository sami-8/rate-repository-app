import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import AppBarTab from './AppBarTab'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar.background
  },
})

export default function AppBar({ tabs }) {
  const renderTabs = () => tabs.map(tab => (
    tab
      ? <AppBarTab
        key={tab.label}
        label={tab.label}
        action={tab.action}
      />
      : null
  ))

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View style={{ flexDirection: 'row' }}>
          {renderTabs()}
        </View>
      </ScrollView>
    </View>
  )
}

