import React, { useState } from 'react'
import { StyleSheet, Pressable } from 'react-native'
import Text from './Text'

const styles = StyleSheet.create({
  tab: {
    padding: 10,
    paddingBottom: 15,
    color: 'white',
    opacity: 1
  },
  pressedTab: {
    padding: 10,
    paddingBottom: 15,
    color: 'white',
    opacity: 0.8
  }
})

const AppBarTab = ({ label, action }) => {
  const [style, setStyle] = useState(styles.tab)

  const onPressIn = () => {
    setStyle(styles.pressedTab)
  }
  const onPressOut = () => {
    setStyle(styles.tab)
    action && action()
  }

  return (
    <Pressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={style}>
      <Text fontWeight="bold" style={{ color: 'white' }} >{label}</Text>
    </Pressable>
  )
}

export default AppBarTab
