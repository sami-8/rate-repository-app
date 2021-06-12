import React, { useState } from 'react'
import { StyleSheet, Pressable } from 'react-native'
import Text from '../components/Text'
import theme from '../theme'

const styles = StyleSheet.create({
  tab: {
    padding: 10,
    paddingBottom: 15,
  },
  tabText: {
    color: theme.colors.appBar.foreground,
  },
  pressedTab: {
    opacity: 0.8
  }
})

export default function AppBarTab({ label, action }) {
  const [style, setStyle] = useState([styles.tab])

  const onPressIn = () => {
    setStyle([styles.tab, styles.pressedTab])
  }
  const onPressOut = () => {
    setStyle([styles.tab])
    action && action()
  }

  return (
    <Pressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={style}>
      <Text fontWeight="bold" style={styles.tabText} >{label}</Text>
    </Pressable>
  )
}

