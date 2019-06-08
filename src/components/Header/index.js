import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import PropTypes from 'prop-types'

export default class Header extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  static defaultProps = {}

  render () {
    return (
      <Text style={styles.header}>{this.props.children}</Text>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    color: '#fff',
    fontSize: 80,
    textAlign: 'center',
    fontFamily: 'movie-title-ah'
  }
})
