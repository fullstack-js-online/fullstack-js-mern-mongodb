import React from 'react'
import { mount } from 'enzyme'

import { ForgotPasswordPage } from './'

describe('The ForgotPasswordPage page', () => {
  const props = {
    history: {
      push: jest.fn()
    },
    dispatch: () => new Promise(() => {})
  }

  it('should match snapshot', () => {
    expect(mount(<ForgotPasswordPage {...props} />)).toMatchSnapshot()
  })
})
