import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useEffect } from "react";

const MapView = () => {
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 20.306567981357524,
    lng: -89.41464835335167,
  };

  const mapOptions = {
    styles: [
      {
        featureType: "poi.business",
        stylers: [{ visibility: "off" }],
      },
    ],
  };

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        console.log("Service Worker listo:", registration);
      });
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={defaultCenter}
        options={mapOptions}
      />
    </LoadScript>
  );
};

export default MapView;
