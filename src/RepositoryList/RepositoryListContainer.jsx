import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import RepositoryItem from '../components/RepositoryItem'
import ItemSeparator from '../components/ItemSeparator'
import theme from '../theme.js'

const styles = StyleSheet.create({
  flatList: {
    backgroundColor: theme.colors.backgroundPrimary,
    flex: 1,
  }
})

export default function RepositoryListContainer(props) {
  const {
    flatListRef, onEndReached, repositories, onItemPress,
  } = props

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : []

  return (
    <View style={styles.flatList}>
      <FlatList
        ref={flatListRef}
        data={repositoryNodes}
        renderItem={({ item }) =>
          <RepositoryItem item={item} onPress={() => onItemPress(item)} />
        }
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={item => item.id}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
      />
    </View>
  )
}

