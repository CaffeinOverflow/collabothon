import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

interface Bin {
  id: string;
  lat: number;
  lng: number;
  color: 'blue' | 'red';
}

interface MapProps {
  apiKey: string;
  backToLeaderboard: () => void;
  bins: Bin[];
}

const redDot = {
  url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
};
const blueDot = {
  url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
};

const MapComponent: React.FC<MapProps> = ({ bins, backToLeaderboard }) => {
  const mapStyles = {
    height: '70vh',
    width: '100%',
  };

  return (
    <>
    <div>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={bins[0]}
        >
          {
              bins.map(({ id, lat, lng, color }) => (
                  <Marker
                    key={id}
                    position={{ lat, lng }}
                    icon={color === "blue" ? blueDot : redDot}
                  />
              ))
          }
        </GoogleMap>
    </div>
    <div>
      <button
        type="submit"
        className="w-[90%] md:w-[30%] mt-10 py-3 px-6 bg-blue-300 hover:opacity-70 rounded-full mx-auto shadow-xl shadow-light-blue"
        style={{ float: "right" }}
        onClick={backToLeaderboard}
        >
          Back to leaderboard
        </button>
    </div>
    </>
  );
};

export default React.memo(MapComponent);
