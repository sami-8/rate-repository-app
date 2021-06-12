import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'
import { useDebounce } from 'use-debounce'

export default function useRepositories(variables = {}) {
  const [orderBy, setOrderBy] = useState('CREATED_AT')
  const [searchKeyword, setSearchKeyword] = useState('')
  const [searchKeywordValue] = useDebounce(searchKeyword, 500)
  const [orderDirection, setOrderDirection] = useState('DESC')

  const queryParams = {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy,
      orderDirection,
      searchKeyword: searchKeywordValue,
      first: 8,
      ...variables,
    }
  }

  const { error, loading, data, fetchMore, refetch } = useQuery(
    GET_REPOSITORIES, queryParams
  )

  useEffect(() => {
    refetch({ variables: { ...queryParams.variables } })
  }, [orderBy, orderDirection, searchKeywordValue])

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        ...queryParams.variables,
        after: data.repositories.pageInfo.endCursor,
      }
    })
  }

  const orderByNewest = () => {
    setOrderBy('CREATED_AT')
    setOrderDirection('DESC')
  }

  const orderByHighestRated = () => {
    setOrderBy('RATING_AVERAGE')
    setOrderDirection('DESC')
  }

  const orderByLowestRated = () => {
    setOrderBy('RATING_AVERAGE')
    setOrderDirection('ASC')
  }

  return [
    data?.repositories,
    {
      error,
      loading,
      setSearchKeyword,
      orderByNewest,
      orderByHighestRated,
      orderByLowestRated,
      fetchMore: handleFetchMore,
    }
  ]
}

