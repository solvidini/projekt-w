import React from 'react';
import MapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const ACCESS_TOKEN = 'pk.eyJ1Ijoic3NhemVybyIsImEiOiJja2kzODl0dWowY2k0MnlucTBzYjlvZjF5In0.zw6AaH_zQiFpIXu4YGVDMQ';
const MARKER_ICON = 'https://img.icons8.com/color/48/000000/marker.png';
const LINK_TO_STUDIO =
  'https://www.google.com/maps/dir//%C5%BBniwna+1,+43-109+Tychy/@50.1103145,19.0328336,17.42z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4716c78bb7f9d16b:0xd8c7c541c034a5ec!2m2!1d19.0334487!2d50.1102761!3e0';

const Map = () => {
  const toGoogleMaps = () => {
    window.open(LINK_TO_STUDIO);
  };

  return (
    <MapGL
      initialViewState={{
        longitude: 19.033363,
        latitude: 50.110341,
        zoom: 14,
      }}
      style={{
        height: '100%',
        width: '100%',
      }}
      mapStyle='mapbox://styles/mapbox/streets-v11'
      mapboxAccessToken={ACCESS_TOKEN}
    >
      <Marker
        longitude={19.033363}
        latitude={50.110341}
        anchor='bottom'
        onClick={toGoogleMaps}
        style={{ cursor: 'pointer' }}
      >
        <img src={MARKER_ICON} alt='Projekt W - Żniwna 1, Tychy' title='Projekt W - Żniwna 1, Tychy' />
      </Marker>
    </MapGL>
  );
};

export default Map;
