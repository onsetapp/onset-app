import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Header from '../../components/Header';

export default class LocationDetailScreen extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={ styles.head }>
          <Header>Location Detail</Header>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#8f8e90',
  },
  head: {
    justifyContent: 'space-around',
    padding: 10,
  },
});
