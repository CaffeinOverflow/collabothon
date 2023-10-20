import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { LoadScript } from '@react-google-maps/api';
import App from "./App";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Map from "./components/Map/Map";

const rootDiv = document.getElementById('root');
if (!rootDiv) {
  throw Error("The react app has been misconfigured and no root div was found.");
}
const root = ReactDOM.createRoot(rootDiv);

const BINS = [
  {
    id: "bin1",
    lat: 50.103323,
    lng: 14.392298,
    color: "red",
  },
  {
    id: "bin2",
    lat: 50.123323,
    lng: 14.412298,
    color: "blue",
  },
]
const MAPS_API_KEY="<add your key here>"

function Root() {
  const [showMap, setShowMap] = useState(false);
  return (
    <LoadScript googleMapsApiKey={MAPS_API_KEY}>
      <App>
        {
          showMap ?
          <Map  bins={BINS} backToLeaderboard={() => setShowMap(false) } /> :
          <Leaderboard toMap={() => setShowMap(true)} />
        }
      </App>
    </LoadScript>
  );
}
root.render(<Root />);
