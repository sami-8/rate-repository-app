import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react-native'
import SignInForm from '../../SignIn/SignInForm'

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn()
      const args = { username: 'username', password: 'password' }
      const { getByTestId } = render(<SignInForm onSubmit={onSubmit} />)

      fireEvent.changeText(getByTestId('singin-username'), args.username)
      fireEvent.changeText(getByTestId('singin-password'), args.password)
      fireEvent.press(getByTestId('singin-submit-button'))

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1)

        const [[argsInFunctionCall]] = onSubmit.mock.calls
        expect(argsInFunctionCall).toEqual(args)
      })
    })
  })
})
