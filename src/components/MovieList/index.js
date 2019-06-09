import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  View,
  Dimensions
} from 'react-native'

const NUM_COLUMNS = 4
const MARGIN = 5
const ITEM_WIDTH = (
  (Dimensions.get('window').width -
    (MARGIN * (NUM_COLUMNS + 1))) /
  NUM_COLUMNS
)
const ITEM_HEIGHT = ITEM_WIDTH * 1.53

export default class MovieList extends PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
  }

  static defaultProps = {
    items: []
  }

  handlePress = () => {
    console.log('clicked')
  }

  renderItem ({ item }) {
    const { posterUrl } = item
    return (
      <View>
        <TouchableOpacity onPress={this.handlePress}>
          <Image
            resizeMode='contain'
            source={{ uri: posterUrl }}
            style={styles.movieCard} />
        </TouchableOpacity>
      </View>
    )
  }

  render () {
    const { items } = this.props
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.list}
          numColumns={NUM_COLUMNS}
          renderItem={this.renderItem}
          data={items}
          keyExtractor={({ id }) => id}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: MARGIN
  },
  list: {
    justifyContent: 'center'
  },
  movieCard: {
    margin: MARGIN,
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT
  }
})
