import React, { Component } from 'react'
import { View, Platform, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import PropTypes from 'prop-types'

export default class StatusBarPadding extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  static defaultProps = {}

  render () {
    return (
      <View style={ styles.statusBarHeight }>
        { this.props.children }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  statusBarPadding: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
  }
})
