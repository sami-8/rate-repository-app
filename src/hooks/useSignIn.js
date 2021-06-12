import { useMutation } from '@apollo/client'
import { useApolloClient } from '@apollo/client'
import { AUTHORIZE } from '../graphql/mutations'
import useAuthStorage from '../hooks/useAuthStorage'

const useSignIn = () => {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  const [authorize, result] = useMutation(AUTHORIZE)

  const signIn = async credentials => {
    const authResult = await authorize({ variables: { credentials } })

    const { data: { authorize: { accessToken } } } = authResult
    await authStorage.setAccessToken(accessToken)
    await apolloClient.resetStore()

    return authResult
  }
  const signOut = async () => {
    await authStorage.removeAccessToken()
    await apolloClient.resetStore()
  }

  return { signIn, signOut, result }
}

export default useSignIn
