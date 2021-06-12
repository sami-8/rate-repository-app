import { useMutation } from '@apollo/client'
import { AUTHORIZE } from '../graphql/mutations'

const useSignIn = () => {
  const [authorize, result] = useMutation(AUTHORIZE)

  const signIn = async credentials => {
    return await authorize({ variables: { credentials } })
  }

  return [signIn, result]
}

export default useSignIn
