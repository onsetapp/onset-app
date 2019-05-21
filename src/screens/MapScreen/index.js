import React from 'react';
import { MapView, PROVIDER_GOOGLE } from 'expo';
import mapStyle from './map_style.json';

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


  handlePress = () => {
    console.log('selected')
  }

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        showsUserLocation={ true }
        provider={ PROVIDER_GOOGLE }
        customMapStyle={mapStyle}
        initialRegion={ this.state.region }>

          <MapView.Marker
            coordinate={ this.state.region }
            title='Some Title'
            description='Some Description'
            onSelect={ this.handleSelect }
            onPress={ this.handlePress } />

      </MapView>
    );
  }
}
