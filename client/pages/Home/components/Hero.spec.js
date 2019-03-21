import React from 'react'
import { mount } from 'enzyme'

import Hero from './Hero'

describe('The Hero component', () => {
  it('should match snapshot', () => {
    expect(mount(<Hero />)).toMatchSnapshot()
  })
})
