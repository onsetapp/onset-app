import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MapView, PROVIDER_GOOGLE } from 'expo';
import mapStyle from './map_style.json';

import markerIcon from './marker.png'

export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(position => resolve(position), e => reject(e));
  });
};

// Portland OR
const defaultRegion = {
  latitude: 45.5190479,
  longitude: -122.6720131,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

const markers = [
  {
    latitude: 45.5190479,
    longitude: -122.6720131,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }
]

export default class MapScreen extends React.Component {
  state = {
    region: defaultRegion,
    peekView: false,
  }

  componentDidMount() {
    return getCurrentLocation().then(position => {
      if (position) {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003,
          },
        });
      }
    });
  }

  handlePress = () => {
    console.log('pressed')
  }

  render() {
    return (
      <View style={ styles.container }>

        <MapView
          style={{ flex: 1 }}
          showsUserLocation={ true }
          provider={ PROVIDER_GOOGLE }
          customMapStyle={mapStyle}
          initialRegion={ this.state.region }>

            <MapView.Marker
              coordinate={ this.state.region }
              title='Joe and Ds apartment'
              description='Noxs Domain'
              image={ markerIcon }
              onPress={ this.handlePress } />

        </MapView>


        <View style={ styles.peekView }>

        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  peakView: {
    flex:1,
    backgroundColor:'#8f8e90',
  }
});