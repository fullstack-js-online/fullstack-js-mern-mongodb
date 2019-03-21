import React from 'react'
import { mount } from 'enzyme'

import ResetPasswordForm from './ResetPasswordForm'

describe('ResetPassword form', () => {
  const props = {
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: {},
    onSubmit: jest.fn()
  }

  it('should match snapshot', () => {
    expect(mount(<ResetPasswordForm {...props} />)).toMatchSnapshot()
  })
})
