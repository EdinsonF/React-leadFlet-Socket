
import React, {useState} from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet'
import {myIcon, pinIcon} from './iconLocation';

const  MyPosition = () => {

  const [position, setPosition] = useState(null);

  const map = useMapEvents({
    click(e) {
      map.locate()
      console.log(e.latlng);
      setPosition(e.latlng)
    },
    locationfound(e) {
      
      map.flyTo(e.latlng, map.getZoom(100))
    },
  })

  return position === null ? null : (
    <Marker position={position} icon={myIcon}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

export default MyPosition;