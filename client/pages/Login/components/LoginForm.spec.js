import React from 'react'
import { shallow } from 'enzyme'

import LoginForm from './LoginForm'

describe('LoginForm form', () => {
  const props = {
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: {},
    onSubmit: jest.fn()
  }

  it('should match snapshot', () => {
    expect(shallow(<LoginForm {...props} />)).toMatchSnapshot()
  })
})
