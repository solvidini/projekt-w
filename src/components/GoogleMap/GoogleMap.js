import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const GoogleMap = props => {
  const toGoogleMaps = () => {
    window.open(
      "https://www.google.com/maps/dir//%C5%BBniwna+1,+43-109+Tychy/@50.1103145,19.0328336,17.42z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4716c78bb7f9d16b:0xd8c7c541c034a5ec!2m2!1d19.0334487!2d50.1102761!3e0"
    );
  };

  return (
      <Map
        google={window.google}
        initialCenter={{ lat: 50.1103764, lng: 19.0330034 }}
        zoom={15}
      >
        <Marker title={"Projekt W - Żniwna 1, Tychy"} onClick={toGoogleMaps} />
      </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDq5t3YDaS4FavXZbl27-jLfCyHVnzasSU"
})(GoogleMap);
