import React from 'react';
import { MapView } from 'expo';

export default class MapScreen extends React.Component {
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 45.5190479,
          longitude: -122.6720131,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
}
