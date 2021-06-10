import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import RepositoryItem from './RepositoryItem'
import Text from './Text'
import useRepositories from '../hooks/useRepositories'

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#e1e4e8',
  },
  flatList: {
    backgroundColor: 'white'
  }
})

const RepositoryList = () => {
  const { repositories, loading, error } = useRepositories()

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : []

  if (loading) {
    return <View><Text>loading...</Text></View>
  }
  if (error) {
    console.error(error)
  }

  return (
    <View style={styles.flatList}>
      <FlatList
        data={repositoryNodes}
        renderItem={listItem => <RepositoryItem listItem={listItem} />}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const ItemSeparator = () => <View style={styles.separator} />

export default RepositoryList
