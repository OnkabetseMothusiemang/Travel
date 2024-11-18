// src/components/DestinationMarker.js
import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { FaMapPin } from 'react-icons/fa';

const DestinationMarker = ({ destination }) => {
  const { name, date, notes, coords, photo } = destination;

  const customIcon = new Icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <Marker position={coords} icon={customIcon}>
      <Popup>
        <div>
          <h4>{name}</h4>
          <p><strong>Date:</strong> {date.toLocaleDateString()}</p>
          <p><strong>Notes:</strong> {notes}</p>
          {photo && <img src={photo} alt="destination" style={{ width: '100px' }} />}
        </div>
      </Popup>
    </Marker>
  );
};

export default DestinationMarker;
