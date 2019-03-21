import React from 'react'
import { mount } from 'enzyme'

import RegisterForm from './RegisterForm'

describe('The <RegisterForm> component', () => {
  const props = {
    initialValues: {
      email: '',
      name: '',
      password: ''
    },
    onSubmit: jest.fn(),
    validationSchema: {}
  }

  it('should match snapshot', () => {
    expect(mount(<RegisterForm {...props} />)).toMatchSnapshot()
  })
})
