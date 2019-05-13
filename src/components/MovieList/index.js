import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import MovieCard from '../MovieCard';

export default class MovieList extends Component {

  renderItem({ item, index }) {
    return <MovieCard />;
  }

  render() {
    return (
      <FlatList
        contentContainerStyle={styles.list}
        data={[
          { key: 'a' },
          { key: 'b' },
          { key: 'c' },
          { key: 'd' },
          { key: 'e' },
          { key: 'f' },
          { key: 'g' },
          { key: 'h' },
          { key: 'i' },
          { key: 'j' },
        ]}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
