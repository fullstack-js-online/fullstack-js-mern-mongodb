import React from 'react'
import { mount } from 'enzyme'

import { EmailConfirmationPage } from './'

describe('The EmailConfirmation page', () => {
  const props = {
    match: {
      params: {
        token: ''
      }
    },
    dispatch: () => new Promise(() => {})
  }

  it('should match snapshot', () => {
    expect(mount(<EmailConfirmationPage {...props} />)).toMatchSnapshot()
  })
})
