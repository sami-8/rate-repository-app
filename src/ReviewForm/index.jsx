import React from 'react'
import { Formik } from 'formik'
import { Pressable, StyleSheet, View } from 'react-native'
import { useHistory } from 'react-router-native'
import * as yup from 'yup'
import FormikTextInput from '../components/FormikTextInput'
import Text from '../components/Text'
import useCreateReview from '../hooks/useCreateReview'
import theme from '../theme'

const styles = StyleSheet.create({
  form: {
    backgroundColor: theme.colors.backgroundPrimary,
    alignItems: 'center',
  },
  input: {
    width: '90%',
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  submitButton: {
    width: '90%',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: theme.colors.button,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  submitButtonText: {
    color: theme.colors.textButton,
  }
})

export default function ReviewForm() {
  const history = useHistory()
  const [createReview] = useCreateReview()

  const onSubmit = async ({ rating, ...review }) => {
    try {
      const { repositoryId } = await createReview({
        rating: parseInt(rating),
        ...review
      })

      history.push(`/repository/${repositoryId}`)
    } catch (error) {
      console.log(error)
    }
  }

  const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    text: '',
  }
  const validationSchema = yup.object().shape({
    ownerName: yup
      .string()
      .required('Username is required.'),
    repositoryName: yup
      .string()
      .required('Repository name is required.'),
    rating: yup
      .number()
      .required('Rating is required.')
      .min(0, ({ min }) => `Rating should be at least ${min}.`)
      .max(100, ({ max }) => `Rating should be at most ${max}.`),
    text: yup
      .string()
  })
  const renderSubmitButton = handleSubmit => {
    return (
      <Pressable
        testID="review-submit"
        onPress={handleSubmit}
        style={styles.submitButton}>
        <Text
          fontWeight="bold"
          style={styles.submitButtonText}>
          Send
        </Text>
      </Pressable>
    )
  }

  return (
    <View style={styles.form}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        {({ handleSubmit }) =>
          <>
            <FormikTextInput
              testID="review-form-username"
              style={styles.input}
              name="ownerName"
              placeholder="Owner username" />
            <FormikTextInput
              testID="review-form-repository-name"
              style={styles.input}
              name="repositoryName"
              placeholder="Repository name" />
            <FormikTextInput
              testID="review-form-rating"
              style={styles.input}
              name="rating"
              placeholder="Rating (0-100)" />
            <FormikTextInput
              testID="review-form-text"
              style={styles.input}
              name="text"
              multiline
              placeholder="Review" />
            {renderSubmitButton(handleSubmit)}
          </>}
      </Formik>
    </View>
  )
}

