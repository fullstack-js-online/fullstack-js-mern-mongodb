import React from 'react'
import { shallow } from 'enzyme'

import { Main } from './'

describe('Main component', () => {
  const props = {
    isAuthenticated: false,
    flash: {
      messages: []
    },
    dispatch: jest.fn(),
    user: {},
    validationSchema: {},
    onSubmit: jest.fn()
  }

  it('should match snapshot', () => {
    expect(shallow(<Main {...props} />)).toMatchSnapshot()
  })
})
