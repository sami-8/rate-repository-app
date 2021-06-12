import React from 'react'
import * as Linking from 'expo-linking'
import ItemSeparator from '../components/ItemSeparator'
import RepositoryItem from '../components/RepositoryItem'
import Text from '../components/Text'
import { StyleSheet } from 'react-native'
import Button from '../components/Button'

const styles = StyleSheet.create({
  githubButton: {
    margin: 10,
    padding: 10,
  },
})

export default function RepositoryInfo({ repository }) {
  if (!repository) {
    return <Text>loading</Text>
  }
  return (
    <>
      <RepositoryItem item={repository} />
      <GithubButton url={repository.url} />
      <ItemSeparator />
    </>
  )
}

const GithubButton = ({ url }) => {
  return (
    <Button
      action={() => Linking.openURL(url)}
      style={styles.githubButton}
      text={'Open in GitHub'} />
  )
}

