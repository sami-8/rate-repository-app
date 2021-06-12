import React from 'react'
import { View, StyleSheet } from 'react-native'
import theme from '../theme.js'

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.backgroundSecondary,
  },
})

export default function ItemSeparator() {
  return <View style={styles.separator} />
}

