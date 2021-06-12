import { useMutation } from '@apollo/client'
import { CREATE_REVIEW } from '../graphql/mutations'

export default function useCreateReview() {
  const [createReview, result] = useMutation(CREATE_REVIEW)

  const handleCreateReview = async (reviewVariables) => {
    const { data } = await createReview({
      variables: {
        review: reviewVariables
      }
    })
    return data.createReview
  }

  return [handleCreateReview, result]
}

