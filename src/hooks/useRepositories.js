import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = () => {
  const [repositories, setRepositories] = useState()
  const result = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  })
  const { data, error, loading } = result

  useEffect(() => {
    if (data) {
      setRepositories(data.repositories)
    }
  }, [data])

  return { repositories, error, loading  }
}

export default useRepositories
