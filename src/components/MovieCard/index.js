import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';

export default class MovieCard extends Component {

  render() {
    return (
      <Image
        source={{ uri: 'http://placehold.it/500x909' }}
        style={ styles.movieCard } />
    );
  }
}

const styles = StyleSheet.create({
  movieCard: {
    flex: 1,
    margin: 5,
    minWidth: 170,
    maxWidth: 223,
    height: 304,
    maxHeight: 304,
    backgroundColor: '#CCC',
  },
});
