// src/components/Map.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import DestinationMarker from './DestinationMarker';

const Map = ({ destinations }) => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={2} style={{ height: "100vh", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {destinations.map((destination, index) => (
        <DestinationMarker key={index} destination={destination} />
      ))}
    </MapContainer>
  );
};

export default Map;
