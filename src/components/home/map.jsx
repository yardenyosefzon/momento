import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import { MapContainer } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import { Popup } from 'react-leaflet';
import { Marker } from 'react-leaflet';
import LeafLet from './leafLet';
function Map() {
    const position = [32.087187, 34.804011]
       return (
<MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    <LeafLet/>
  </MapContainer>

       );





} // app







export default Map;