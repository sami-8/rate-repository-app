import React from 'react'
import { View, StyleSheet } from 'react-native'
import Text from '../components/Text'
import theme from '../theme'

const styles = StyleSheet.create({
  tagContainer: {
    borderRadius: 5,
    backgroundColor: theme.colors.button,
    padding: 5,
  },
  tagText: {
    color: theme.colors.textButton,
  }
})

export default function Tag({ text, style, textStyle, ...props }) {
  return (
    <View style={{ alignItems: 'baseline', }}>
      <View style={[styles.tagContainer, style]} {...props}>
        <Text
          fontWeight="bold"
          style={[styles.tagText, textStyle]}>
          {text}
        </Text>
      </View>
    </View>
  )
}

