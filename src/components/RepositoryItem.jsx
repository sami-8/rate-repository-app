import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import Text from './Text'

const styles = StyleSheet.create({
  mainContainer: {
    paddingBottom: 5,
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

const RepositoryItem = ({ listItem }) => {
  const { item } = listItem
  const { fullName, description, language } = item

  return (
    <View style={styles.mainContainer}>
      <View style={styles.bioContainer}>
        <BioAvatar source={{ uri: item.ownerAvatarUrl }} />
        <BioDescription
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
    </View>
  )
}

const BioAvatar = ({ source }) => {
  return (
    <View style={styles.bioAvatar}>
      <Image style={styles.avatar} source={source} />
    </View>
  )
}

const BioDescription = ({ fullName, description, language }) => {
  return (
    <View style={styles.bioDescription}>
      <Text fontWeight="bold" style={styles.bioDescriptionItem}>
        {fullName}
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={[styles.bioDescriptionItem, { flex: 1, flexWrap: 'wrap' }]}>
          {description}
        </Text>
      </View>
      <View style={styles.bioDescriptionItemLastChild}>
        <LanguageTag language={language} />
      </View>
    </View>
  )
}

const LanguageTag = ({ language }) => {
  return (
    <View style={{ alignItems: 'baseline', }}>
      <View style={{ borderRadius: 5, backgroundColor: '#0366d6', padding: 5 }}>
        <Text fontWeight="bold" style={{ color: 'white' }}>{language}</Text>
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

export default RepositoryItem
