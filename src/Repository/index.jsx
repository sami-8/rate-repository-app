import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useParams } from 'react-router-native'
import ItemSeparator from '../components/ItemSeparator'
import Text from '../components/Text'
import useRepository from '../hooks/useRepository'
import theme from '../theme'
import RepositoryInfo from './RepositoryInfo'
import ReviewItem from './ReviewItem'

const styles = StyleSheet.create({
  flatListContainer: {
    backgroundColor: theme.colors.backgroundSecondary,
    flex: 1,
  },
  flatList: {
    backgroundColor: theme.colors.backgroundPrimary,
    flex: 1,
  },
})

export default function Repository({ style, ...props }) {
  const { id } = useParams()
  const [repository, { fetchMore, error }] = useRepository({ id })

  if (error) {
    console.error(error)
    return <Text>Error while fetching the repository.</Text>
  }

  const onEndReached = () => fetchMore()
  const reviews = repository?.reviews.edges.map(({ node }) => node)

  return (
    <View style={[styles.flatListContainer, style]} {...props}>
      <FlatList
        style={styles.flatList}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        data={reviews}
        renderItem={({ item }) => <ReviewItem item={item} />}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
        ListFooterComponent={ItemSeparator}
      />
    </View>
  )
}

