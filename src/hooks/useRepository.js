import { useQuery } from '@apollo/client'
import { GET_REPOSITORY } from '../graphql/queries'

export default function useRepository(variables) {
  const defaults = {
    reviewsFirst: 8,
  }
  const { loading, error, data, fetchMore } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: {
      ...defaults,
      ...variables,
    }
  })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        ...defaults,
        ...variables,
        reviewsAfter: data.repository.reviews.pageInfo.endCursor,
      },
    })
  }

  return [
    data?.repository,
    { loading, error, fetchMore: handleFetchMore }
  ]
}

