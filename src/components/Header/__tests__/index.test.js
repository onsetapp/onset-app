import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import Header from '..'

describe('<Header />', () => {
  let component, text
  beforeEach(() => {
    text = 'some-text'
    component = shallow(<Header>{ text }</Header>)
  })

  it('renders the correct text', () => {
    expect(component).toBeTruthy()
  })

  it('renders correctly', () => {
    const tree = renderer.create(<Header />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
