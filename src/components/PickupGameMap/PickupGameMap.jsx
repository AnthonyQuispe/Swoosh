import "./PickupGameMap.scss";
import React, { useState, useCallback } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import GameForm from "../GameForm/GameForm";
import Players from "../../assets/icons/Players.png";
import Time from "../../assets/icons/TimeIcon.png";

export default function PickupGameMap() {
  const defaultCenter = { lat: 40.7128, lng: -74.006 };
  const mapContainerStyle = { width: "100%", height: "100%" };
  const [center, setCenter] = useState(defaultCenter);
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [newMarkerLocation, setNewMarkerLocation] = useState(null);

  const requestLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setPermissionGranted(true);
        setLoading(false);
      },
      (error) => {
        alert("Location access denied. Using default location.");
        console.error("Geolocation error:", error);
        setPermissionGranted(true);
        setLoading(false);
      }
    );
  };

  // Function to add a marker when user clicks on the map
  const onMapClick = useCallback((event) => {
    setNewMarkerLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
    setShowForm(true);
  }, []);

  const handleAddGame = (gameData) => {
    const newMarker = {
      id: Date.now(),
      lat: newMarkerLocation.lat,
      lng: newMarkerLocation.lng,
      ...gameData,
    };
    setMarkers((prev) => [...prev, newMarker]);
    setShowForm(false);
  };

  return (
    <div className="google-map">
      {!permissionGranted && (
        <div className="location-overlay">
          <button className="location-button" onClick={requestLocation}>
            📍 Allow Location Access
          </button>
        </div>
      )}

      {permissionGranted && (
        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={16}
            center={center}
            onClick={onMapClick}
            options={{
              gestureHandling: "greedy",
              mapTypeControl: false,
              fullscreenControl: false,
              zoomControl: false,
              streetViewControl: false,
              rotateControl: false,
              styles: [
                {
                  featureType: "poi",
                  elementType: "labels",
                  stylers: [{ visibility: "off" }],
                },
              ],
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
                    <p className="google-map__info-time">
                      {selectedMarker.startTime}
                    </p>
                  </div>
                  <button className="google-map__info-button">Join</button>
                </div>
              </InfoWindow>
            )}
            {showForm && (
              <GameForm
                onAddGame={handleAddGame}
                onClose={() => setShowForm(false)}
              />
            )}
          </GoogleMap>
        </LoadScript>
      )}
    </div>
  );
}
