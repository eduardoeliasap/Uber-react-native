import React, { Component } from 'react';
import { View } from 'react-native';

import Search from '../Search';
import Directions from '../Directions';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

export default class Map extends Component {
  state = {
    region: null,
    destination: null,
  };

  async componentDidCatch() {
    // Return user possition
    // navigator.geolocation.getCurrentPosition(
    //   ({ coords: { latitude, longitude } }) => {
    //     this.setState({
    //       region: {
    //         latitude: -23.418400,
    //         longitude: -51.936276,
    //         latitudeDelta: 0.0143,
    //         longitudeDelta: 0.0134
    //       }
    //     });
    //   }, // Case success
    //   () => {}, // Case fail
    //   {
    //     timeout: 2000,
    //     enableHighAccuracy: true, // Get user wi-fi location
    //     maximumAge: 1000,
    //   }
    // )
    // console.log(this.state.region);

    this.setState({
            region: {
              latitude: -23.418400,
              longitude: -51.936276,
              latitudeDelta: 0.0143,
              longitudeDelta: 0.0134
            }
  })
}

  // data and geometry was returned by DirectionComponent
  handleLocationSelected = (data, { geometry }) => {
    const { location: { lat, lng }} = geometry;

    this.setState({
      destination: {
        latitude: lat,
        longitude: lng,
        title: data.structured_formatting.main_text,
      },
    }),

    this.setState({
      region: {
        latitude: -23.418400,
        longitude: -51.936276,
        title: data.structured_formatting.main_text,
      },
    })
    console.log(this.state.region);
  }

  render() {
    const { region, destination } = this.state

    return (
      <View style={{ flex: 1 }}>
      <MapView
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          region={{
              latitude: -23.418400,
              longitude: -51.936276,
              latitudeDelta: 0.0143,
              longitudeDelta: 0.0134
          }}
          showsUserLocation
          loadingEnabled
      >

        { destination && (
          // I'm pass origin, destinarion an onReady to my DirectionComponent
          <Directions
            origin={region}
            destination={destination}
            onReady={() => {}} />
        )}

      </MapView>

      <Search onLocationSelected={this.handleLocationSelected} />
    </View>
    )
  }
}

