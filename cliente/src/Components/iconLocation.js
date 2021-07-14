
import L from 'leaflet';

import my_icon from '../assets/miIcon.png'
import icon_pin from '../assets/icon2.png'


  export const myIcon = L.icon({
    iconUrl: my_icon,
    iconRetinaUrl: my_icon,
    iconSize: [40 , 40],

});

export const pinIcon = L.icon({
  iconUrl: icon_pin,
  iconRetinaUrl: icon_pin,
  iconSize: [40 , 40],

});