import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'

export default class Header extends Component {
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
