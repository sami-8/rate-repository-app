import { gql } from '@apollo/client'

export const REVIEW_DETAILS = gql`
  fragment ReviewDetails on Review {
    id
    user {
      id
      username
    }
    repositoryId
    createdAt
  }
`

