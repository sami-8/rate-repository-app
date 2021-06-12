import React, { useRef } from 'react'
import { useHistory } from 'react-router-native'
import useRepositories from '../hooks/useRepositories'
import RepositoryListContainer from './RepositoryListContainer'
import RepositoryOrderPicker from './RepositoryOrderPicker'
import RepositorySeachbar from './RepositorySearchBar'

export default function RepositoryList() {
  const history = useHistory()
  const [
    repositories,
    {
      error,
      fetchMore,
      setSearchKeyword,
      orderByNewest,
      orderByHighestRated,
      orderByLowestRated,
    }
  ] = useRepositories()

  if (error) {
    console.error(error)
    return null
  }

  const onEndReached = () => fetchMore()

  const flatListRef = useRef()

  const scrollToTop = () =>
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 })

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword)
    scrollToTop()
  }

  const pickerOptions = {
    'Latest repositories': () => {
      orderByNewest()
      scrollToTop()
    },
    'Highest rated repositories': () => {
      orderByHighestRated()
      scrollToTop()
    },
    'Lowest rated repositories': () => {
      orderByLowestRated()
      scrollToTop()
    },
  }

  const onItemPress = (item) => {
    history.push(`/repository/${item.id}`)
  }

  return (
    <>
      <RepositorySeachbar
        handleSearch={handleSearch} />

      <RepositoryOrderPicker
        options={pickerOptions}
      />

      <RepositoryListContainer
        flatListRef={flatListRef}
        onItemPress={onItemPress}
        onEndReached={onEndReached}
        repositories={repositories} />
    </>
  )
}

