import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import theme from '../theme'
import Text from './Text'

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.button,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: theme.colors.textButton,
  },
})

export default function Button(props) {
  const { action, text, style, textStyle, ...rest } = props
  const onPress = () => action && action()

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.button, style]}
      {...rest}>
      <Text
        fontWeight="bold"
        style={[styles.buttonText, textStyle]}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

