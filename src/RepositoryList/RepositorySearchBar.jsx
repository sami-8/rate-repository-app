import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper'

export default function RepositorySeachbar({ handleSearch }) {
  const [searchFieldKeyword, setSearchFieldKeyword] = useState('')

  const onChangeText = keyword => {
    handleSearch(keyword)
    setSearchFieldKeyword(keyword)
  }
  return (
    <Searchbar
      style={{ margin: 10 }}
      placeholder="Search"
      onChangeText={onChangeText}
      value={searchFieldKeyword}
    />
  )
}

