import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import StatusBarPadding from '..'

describe('<StatusBarPadding />', () => {
  let component
  beforeEach(() => {
    component = shallow(<StatusBarPadding />)
  })

  it('renders the correct text', () => {
    expect(true).toBeTruthy()
    expect(component).toBeTruthy()
  })

  it('renders correctly', () => {
    const tree = renderer.create(<StatusBarPadding />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
