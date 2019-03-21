import React from 'react'
import { mount } from 'enzyme'

import { RegisterPage } from './index'

describe('Register page', () => {
  const props = {
    dispatch: jest.fn()
  }

  it('should match snapshot', () => {
    expect(mount(<RegisterPage {...props} />)).toMatchSnapshot()
  })
})
