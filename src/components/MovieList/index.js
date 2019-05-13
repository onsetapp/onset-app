import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  View,
  Dimensions,
} from 'react-native';

const data = [
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
  { key: 'k' },
  { key: 'l' },
  { key: 'm' },
  { key: 'n' },
  { key: 'o' },
  { key: 'p' },
  { key: 'q' },
  { key: 'r' },
  { key: 's' },
  { key: 't' },
  { key: 'u' },
  { key: 'v' },
];

const NUM_COLUMNS = 3;
const CONTAINER_MARGIN = 5;
const ITEM_MARGIN = 5;
const ITEM_WIDTH = (
  (Dimensions.get('window').width
  - (CONTAINER_MARGIN * 2)
  - (ITEM_MARGIN * NUM_COLUMNS))
  / NUM_COLUMNS
);

export default class MovieList extends PureComponent {

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.string)
  }

  static defaultProps = {
    items: [],
  }

  handlePress = () => {
    console.log('clicked');
  }

  renderItem({ item, index }) {
    return (
      <View>
        <TouchableOpacity onPress={ this.handlePress }>
          <Image
            source={{ uri: 'http://placehold.it/300x909' }}
            style={ styles.movieCard } />
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style={ styles.container }>
        <FlatList
          contentContainerStyle={ styles.list }
          numColumns={ NUM_COLUMNS }
          renderItem={ this.renderItem }
          data={ data }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: CONTAINER_MARGIN,
  },
  list: {
    justifyContent: 'center',
  },
  movieCard: {
    margin: ITEM_MARGIN,
    width: ITEM_WIDTH,
    height: 125, 
  },
});
