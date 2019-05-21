import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MapView, PROVIDER_GOOGLE, Location, Permissions } from 'expo';
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

const marker = {
  latitude: 45.522415,
  longitude: -122.6523076,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}


export default class MapScreen extends React.Component {
  state = {
    region: defaultRegion,
    locationResult: null,
    location: {
      coords: {
        latitude: 45.5190479,
        longitude: -122.6720131
      }
    },
  }

  componentDidMount() {
    this.getLocationAsync();
  }

  handleRegionChange = async region => {
    console.log(region);
    this.setState({ region });
  };

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
        location,
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log({      region: {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421, 
    }})
    this.setState({
      region: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421, 
      }
    });
    // this.setState({ locationResult: JSON.stringify(location), location, region: });
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
          onRegionChangeComplete={ this.handleRegionChange }
          region={ this.state.region }>

            <MapView.Marker
              coordinate={ marker }
              title='Joe and Ds apartment'
              description='Noxs Domain'
              image={ markerIcon }
              onPress={ this.handlePress } />

        </MapView>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});