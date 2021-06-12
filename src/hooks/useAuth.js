import { useLazyQuery, useMutation } from '@apollo/client'
import { useApolloClient } from '@apollo/client'
import { AUTHORIZE, CREATE_USER } from '../graphql/mutations'
import { GET_AUTHORIZED_USER } from '../graphql/queries'
import useAuthStorage from '../hooks/useAuthStorage'

export default function useAuth() {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  const [authorize, signInResult] = useMutation(AUTHORIZE)
  const [createUser, signUpResult] = useMutation(CREATE_USER)
  const [getAuthorizedUser, authorizedUserResult] = useLazyQuery(GET_AUTHORIZED_USER)

  const signIn = async (credentials) => {
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

  const signUp = async values => {
    const { username, password } = values

    const createUserResult = await createUser({
      variables: { user: { username, password } }
    })
    return createUserResult
  }

  return [
    {
      authorizedUser: authorizedUserResult.data?.authorizedUser,
      getAuthorizedUser,
      loading: authorizedUserResult.loading,
      error: authorizedUserResult.error
    },
    {
      signIn,
      signOut,
      signUp,
      signInResult,
      signUpResult
    }
  ]
}

