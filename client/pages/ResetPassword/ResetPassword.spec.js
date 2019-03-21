import React from 'react'
import { mount } from 'enzyme'

import { ResetPasswordPage } from './index'

describe('ResetPassword page', () => {
  const props = {
    dispatch: jest.fn(),
    match: {
      params: {
        token: 'RESET_PASSWORD_TOKEN'
      }
    }
  }

  it('should match snapshot', () => {
    expect(mount(<ResetPasswordPage {...props} />)).toMatchSnapshot()
  })
})
