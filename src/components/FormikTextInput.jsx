import React from 'react'
import { StyleSheet } from 'react-native'
import { useField } from 'formik'
import TextInput from './TextInput'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  normal: {
    borderColor: theme.colors.input.normal,
  },
  error: {
    borderColor: theme.colors.input.error,
  },
  errorText: {
    marginTop: 5,
    color: theme.colors.input.error,
  },
})

export default function FormikTextInput({ style, name, ...props }) {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={[
          styles.normal,
          style,
          meta.error && styles.error,
        ]}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  )
}

