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
      "id": "bin2",
      "lat": 50.085673,
      "lng": 14.407935,
      "color": "blue",
      "bin_data": {
          "data_a": 250,
          "data_b": 180,
          "data_c": 120
      }
  },
  {
      "id": "bin3",
      "lat": 50.093212,
      "lng": 14.398512,
      "color": "red",
      "bin_data": {
          "data_a": 320,
          "data_b": 210,
          "data_c": 110
      }
  },
  {
      "id": "bin4",
      "lat": 50.083537,
      "lng": 14.412334,
      "color": "blue",
      "bin_data": {
          "data_a": 270,
          "data_b": 190,
          "data_c": 130
      }
  },
  {
      "id": "bin5",
      "lat": 50.091655,
      "lng": 14.403244,
      "color": "red",
      "bin_data": {
          "data_a": 310,
          "data_b": 195,
          "data_c": 105
      }
  },
  {
      "id": "bin6",
      "lat": 50.089461,
      "lng": 14.397228,
      "color": "blue",
      "bin_data": {
          "data_a": 260,
          "data_b": 170,
          "data_c": 140
      }
  },
  {
      "id": "bin7",
      "lat": 50.082799,
      "lng": 14.404673,
      "color": "red",
      "bin_data": {
          "data_a": 330,
          "data_b": 220,
          "data_c": 90
      }
  },
  {
      "id": "bin8",
      "lat": 50.094413,
      "lng": 14.414443,
      "color": "blue",
      "bin_data": {
          "data_a": 280,
          "data_b": 200,
          "data_c": 110
      }
  },
  {
      "id": "bin9",
      "lat": 50.085927,
      "lng": 14.409611,
      "color": "red",
      "bin_data": {
          "data_a": 340,
          "data_b": 210,
          "data_c": 120
      }
  },
  {
      "id": "bin10",
      "lat": 50.093955,
      "lng": 14.396799,
      "color": "blue",
      "bin_data": {
          "data_a": 240,
          "data_b": 160,
          "data_c": 130
      }
  },
  {
      "id": "bin11",
      "lat": 50.087711,
      "lng": 14.417268,
      "color": "red",
      "bin_data": {
          "data_a": 310,
          "data_b": 190,
          "data_c": 100
      }
  },
  {
      "id": "bin12",
      "lat": 50.095641,
      "lng": 14.408779,
      "color": "blue",
      "bin_data": {
          "data_a": 270,
          "data_b": 200,
          "data_c": 120
      }
  },
  {
      "id": "bin13",
      "lat": 50.089889,
      "lng": 14.397747,
      "color": "red",
      "bin_data": {
          "data_a": 320,
          "data_b": 210,
          "data_c": 110
      }
  },
  {
      "id": "bin14",
      "lat": 50.092824,
      "lng": 14.415791,
      "color": "blue",
      "bin_data": {
          "data_a": 250,
          "data_b": 180,
          "data_c": 140
      }
  },
  {
      "id": "bin15",
      "lat": 50.088056,
      "lng": 14.405521,
      "color": "red",
      "bin_data": {
          "data_a": 330,
          "data_b": 190,
          "data_c": 100
      }
  },
  {
      "id": "bin16",
      "lat": 50.095198,
      "lng": 14.400651,
      "color": "blue",
      "bin_data": {
          "data_a": 260,
          "data_b": 170,
          "data_c": 130
      }
  },
  {
      "id": "bin17",
      "lat": 50.090277,
      "lng": 14.419776,
      "color": "red",
      "bin_data": {
          "data_a": 310,
          "data_b": 200,
          "data_c": 110
      }
  },
  {
      "id": "bin18",
      "lat": 50.097003,
      "lng": 14.411425,
      "color": "blue",
      "bin_data": {
          "data_a": 290,
          "data_b": 210,
          "data_c": 120
      }
  },
  {
      "id": "bin19",
      "lat": 50.084809,
      "lng": 14.398133,
      "color": "red",
      "bin_data": {
          "data_a": 320,
          "data_b": 220,
          "data_c": 100
      }
  },
  {
      "id": "bin20",
      "lat": 50.095368,
      "lng": 14.419221,
      "color": "blue",
      "bin_data": {
          "data_a": 270,
          "data_b": 190,
          "data_c": 130
      }
  },
  {
      "id": "bin21",
      "lat": 50.085155,
      "lng": 14.406115,
      "color": "red",
      "bin_data": {
          "data_a": 310,
          "data_b": 200,
          "data_c": 110
      }
  }
]

const MAPS_API_KEY="AIzaSyBWhOp3JfRVbEvLGKbHIbnmg-q2ZDPlyCE"

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
