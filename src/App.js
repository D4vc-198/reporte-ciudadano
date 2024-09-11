import "./App.css";
import MapView from "./components/MapView";

function App() {
  // En tu archivo index.js o App.js
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("Service Worker registrado con éxito:", registration);
        })
        .catch((error) => {
          console.log("Error al registrar el Service Worker:", error);
        });
    });
  }

  return <MapView />;
}

export default App;
