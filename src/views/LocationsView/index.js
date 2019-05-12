import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class LocationsView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>LocationsView</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
