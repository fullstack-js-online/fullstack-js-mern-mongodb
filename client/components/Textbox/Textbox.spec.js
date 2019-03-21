import React from 'react'
import { mount } from 'enzyme'

// components
import Textbox from './index'

describe('The Textbox component', () => {
  const props = {
    onChange: jest.fn(),
    placeholder: 'Email',
    value: 'john@doe.com'
  }

  it('should match snapshot', () => {
    expect(mount(<Textbox {...props} />)).toMatchSnapshot()
  })
})
