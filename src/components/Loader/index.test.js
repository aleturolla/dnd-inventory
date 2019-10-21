import React from 'react'
import { shallow } from 'enzyme'
import Loader from '.'

describe('Renders Loader', () => {
  let element
  beforeEach(() => {
    element = shallow(<Loader />)
  })

  it('Loader exists', () => {
    expect(element).toHaveLength(1)
  })
})
