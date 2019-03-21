import React from 'react'
import { mount } from 'enzyme'

// component
import Button from './index'

describe('The button component', () => {
  const props = {
    loading: true
  }

  it('should match snapshot', () => {
    const button = mount(<Button {...props}>Sign up</Button>)

    expect(button).toMatchSnapshot()
  })
})
