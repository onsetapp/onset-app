import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
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
    showPreview: false,
  }

  componentDidMount() {
    this.getLocationAsync();
  }

  handleRegionChange = async region => {
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

  handleMarkerPress = () => {
    console.log('marker pressed')
    this.setState({ showPreview: true });
  }

  handleMarkerDeselect = () => {
    console.log('deselect')
    this.setState({ showPreview: false });
  }

  handlePreviewPress = () => {
    console.log('preview pressed')
  }

  render() {
    const { showPreview } = this.state;
    return (
      <View style={ styles.container }>

        <MapView
          style={ styles.mapView }
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
              onDeselect={ this.handleMarkerDeselect }
              onSelect={ this.handleMarkerPress }
              onPress={ this.handleMarkerPress }
            />

        </MapView>

        { showPreview && (
          <View style={ styles.locationDetailView }>
            <TouchableOpacity onPress={ this.handlePreviewPress } style={ styles.previewImgWrapper }>
              <Image
                resizeMode="cover"
                // source={{ uri: 'http://placehold.it/500x500' }}
                source={ require('./nox.png') }
                style={ styles.previewImage } />
            </TouchableOpacity>
          </View>
         ) }

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  mapView: {
    flex: 2,
  },
  locationDetailView: {
    flex: 1,
  },
  previewImgWrapper: {
    flex: 1,
  },
  previewImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  
});