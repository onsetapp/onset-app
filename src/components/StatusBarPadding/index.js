import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { Constants } from 'expo';

export default class StatusBarPadding extends Component {

  render() {
    return (
      <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight}}>
        { this.props.children }
      </View>
    );
  }
}