import React from 'react'
import { mount } from 'enzyme'

import HomePage from './'

describe('The Home page', () => {
  const props = {}

  it('should match snapshot', () => {
    expect(mount(<HomePage {...props} />)).toMatchSnapshot()
  })
})
