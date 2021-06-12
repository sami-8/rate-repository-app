import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import Text from '../components/Text'
import theme from '../theme'

const styles = StyleSheet.create({
  reviewRatingContainer: {
    borderWidth: 3,
    borderColor: theme.colors.primary,
    justifyContent: 'center',
    margin: 10,
  },
  reviewRating: {
    color: theme.colors.primary,
    textAlign: 'center',
  },
})

export default function ReviewItem({ item }) {
  const { rating, text, createdAt, user: { username } } = item

  return (
    <View style={{ flexDirection: 'row' }}>
      <ReviewRating rating={rating} />
      <ReviewInfo
        text={text}
        username={username}
        createdAt={createdAt} />
    </View>
  )
}

export const ReviewRating = ({ rating }) => {
  const { width } = Dimensions.get('window')
  const size = width / 10
  const style = {
    width: size,
    height: size,
    borderRadius: size,
  }
  return (
    <View style={[styles.reviewRatingContainer, style]}>
      <Text
        fontWeight="bold"
        style={styles.reviewRating}>
        {rating}
      </Text>
    </View>
  )
}

export const ReviewInfo = ({ text, username, createdAt }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text fontWeight="bold" style={{ paddingTop: 5 }}>{username}</Text>
      <ReviewDate createdAt={createdAt} style={{ paddingTop: 5 }} />
      <Text wordWrap style={{ paddingTop: 5, paddingBottom: 5 }}>
        {text}
      </Text>
    </View>
  )
}

export const ReviewDate = ({ createdAt, ...props }) => {
  const date = new Date(createdAt).toLocaleDateString()
  return <Text {...props}>{date}</Text>
}

