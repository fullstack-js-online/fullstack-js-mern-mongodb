import React from 'react'
import { shallow } from 'enzyme'

import ForgotPasswordForm from './ForgotPasswordForm'

describe('ForgotPasswordForm form', () => {
  const props = {
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: {},
    onSubmit: jest.fn()
  }

  it('should match snapshot', () => {
    expect(shallow(<ForgotPasswordForm {...props} />)).toMatchSnapshot()
  })
})
