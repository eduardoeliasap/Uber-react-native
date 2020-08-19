import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

// onReady is a call-back function
const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="..."
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
