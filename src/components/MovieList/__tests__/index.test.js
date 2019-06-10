import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { Text } from 'react-native'

import MovieList from '..'

describe('<MovieList />', () => {
  let component
  beforeEach(() => {
    component = shallow(<MovieList />)
  })

  it('renders the correct text', () => {
    expect(component).toBeTruthy();
  })

  it('renders correctly', () => {
    const tree = renderer.create(<MovieList />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
