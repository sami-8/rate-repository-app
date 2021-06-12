import React from 'react'
import { Text as NativeText, View, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
})

export default function Text(props) {
  const { color, wordWrap, fontSize, fontWeight, style, ...rest } = props

  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ]

  if (wordWrap) {
    return (
      <View style={{ flexDirection: 'row' }}>
        <NativeText
          style={[{ flex: 1, flexWrap: 'wrap' }, textStyle]}
          {...rest} />
      </View>
    )
  }
  return <NativeText style={textStyle} {...rest} />
}

