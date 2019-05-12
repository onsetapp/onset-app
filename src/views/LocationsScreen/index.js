import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Header from '../../components/Header';

export default class LocationsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { query: '' };
  }

  handleQueryChange = text => {
    this.setState({ query: text });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header>Locations</Header>
        <TextInput onChangeText={ this.handleQueryChange } value={ this.state.query } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8f8e90',
  },
});
