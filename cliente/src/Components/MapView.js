import React, {useState} from 'react';
import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer, Marker, useMapEvent } from 'react-leaflet'

import MyPosition from './MyPosition';



const MapView = () => {


  

  return ( 
    <>
      <MapContainer center={[4.7174827, -74.1122391]} zoom={2} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        <MyPosition/>
      </MapContainer>
    </>
   );
}
 
export default MapView;