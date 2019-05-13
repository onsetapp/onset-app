import React from 'react';
import { StyleSheet, View, ScrollView, TextInput } from 'react-native';

import Header from '../../components/Header';
import MovieList from '../../components/MovieList';

export default class FilmsScreen extends React.Component {

  state = { text: '' };

  handleTextChange = text => {
    this.setState({ text });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={ styles.head }>
          <Header>Locations</Header>
          <TextInput
            style={ styles.textInput }
            onChangeText={ this.handleTextChange }
            placeholder="Search"
            value={ this.state.text } />
        </View>
        <View style={ styles.body }>
          <MovieList />
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
  body: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'stretch',
  },
  textInput: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'movie-title-ah',
    marginRight: 50,
    marginLeft: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
});