import "./PickupGameMap.scss";
import React, { useState, useCallback, useRef } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import Players from "../../assets/icons/Players.png";
import Time from "../../assets/icons/TimeIcon.png";

export default function PickupGameMap() {
  const mapContainerStyle = { width: "100%", height: "100%" };
  const center = { lat: 40.7128, lng: -74.006 }; // Default center (New York)

  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  // Function to add a marker when user clicks on the map
  const onMapClick = useCallback((event) => {
    const newMarker = {
      id: Date.now(),
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
      sport: "Basketball",
      players: "5/10",
      gameName: "3v3 Pickup",
      time: "3:45pm - 5:00 pm",
    };
    setMarkers((prev) => [...prev, newMarker]);
  }, []);

  return (
    <div className="google-map">
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={10}
          center={center}
          onClick={onMapClick}
          options={{
            mapTypeControl: false, // Hides map/satellite toggle button
            fullscreenControl: false, // Hides fullscreen button
            zoomControl: false, // Keeps zoom in/out buttons
            streetViewControl: false, // Hides Street View (pegman) button
            rotateControl: false, // Removes rotate control
          }}
        >
          {markers.map((marker) => (
            <Marker
              key={marker.id}
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => setSelectedMarker(marker)}
            />
          ))}

          {selectedMarker && (
            <InfoWindow
              position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
              onCloseClick={() => setSelectedMarker(null)}
            >
              <div className="google-map__info">
                <h3 className="google-map__info-title">
                  {selectedMarker.gameName}
                </h3>
                <div className="google-map__info-container">
                  <img
                    className="google-map__info-img"
                    alt="Players"
                    src={Players}
                  />
                  <p className="google-map__info-players">
                    {selectedMarker.players}
                  </p>
                </div>
                <div className="google-map__info-container">
                  <img
                    className="google-map__info-img"
                    src={Time}
                    alt="Sport"
                  />
                  <p className="google-map__info-time">{selectedMarker.time}</p>
                </div>
                <button className="google-map__info-button">Join</button>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
