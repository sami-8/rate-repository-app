import React from 'react'
import { Image, View, StyleSheet, Pressable } from 'react-native'
import Tag from './Tag'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  mainContainer: {
    paddingBottom: 5,
    backgroundColor: theme.colors.backgroundPrimary,
  },
  bioContainer: {
    flexDirection: 'row',
  },
  bioAvatar: {
    flexGrow: 0
  },
  bioDescription: {
    flex: 1,
    paddingLeft: 5,
  },
  bioDescriptionItem: {
    paddingTop: 5,
  },
  bioDescriptionItemLastChild: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  statisticContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  avatar: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 5,
  },
})

export default function RepositoryItem({ style, item, onPress }) {
  const { id, fullName, description, language } = item

  return (
    <Pressable
      onPress={onPress}
      style={[styles.mainContainer, style]}>

      <View style={styles.bioContainer}>
        <BioAvatar source={{ uri: item.ownerAvatarUrl }} />
        <BioDescription
          testID={`${id}-description`}
          fullName={fullName}
          description={description}
          language={language} />
      </View>

      <View style={styles.statisticContainer}>
        <StatisticItem name={'Stars'} number={item.stargazersCount} />
        <StatisticItem name={'Forks'} number={item.forksCount} />
        <StatisticItem name={'Reviews'} number={item.reviewCount} />
        <StatisticItem name={'Rating'} number={item.ratingAverage} />
      </View>

    </Pressable>
  )
}

const BioAvatar = ({ source }) => {
  return (
    <View style={styles.bioAvatar}>
      <Image style={styles.avatar} source={source} />
    </View>
  )
}

const BioDescription = ({ testID, fullName, description, language }) => {
  return (
    <View style={styles.bioDescription}>
      <Text fontWeight="bold" style={styles.bioDescriptionItem}>
        {fullName}
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <Text testID={testID} style={[styles.bioDescriptionItem, { flex: 1, flexWrap: 'wrap' }]}>
          {description}
        </Text>
      </View>
      <View style={styles.bioDescriptionItemLastChild}>
        <Tag text={language} />
      </View>
    </View>
  )
}

const StatisticItem = ({ name, number }) => {
  const truncateNumber = number => {
    return number >= 1000
      ? (number / 1000).toFixed(1) + 'k'
      : number + ''
  }
  return (
    <View style={{ alignItems: 'center' }}>
      <Text fontWeight="bold">{truncateNumber(number)}</Text>
      <Text>{name}</Text>
    </View>
  )
}

