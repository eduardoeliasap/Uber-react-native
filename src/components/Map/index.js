import React, { Component } from 'react';
import { View } from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

// import { Container } from './styles';

export default class Map extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
      <MapView
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          region={{
            latitude: -23.418144,
            longitude: -51.936265,
            latitudeDelta:  0.0143,
            longitudeDelta: 0.0134
          }}
          showsUserLocation
          loadingEnabled
      />
    </View>
    )
  }
}

