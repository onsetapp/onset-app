import React from 'react';
import { MapView } from 'expo';

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

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        showsUserLocation={ true }
        initialRegion={ this.state.region }
      />
    );
  }
}
