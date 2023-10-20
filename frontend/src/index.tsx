import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import Leaderboard from "./components/Leaderboard"

const rootDiv = document.getElementById('root');
if (!rootDiv) {
  throw Error("The react app has been misconfigured and no root div was found.");
}
const root = ReactDOM.createRoot(rootDiv);

function Root() {
  return (
    <React.StrictMode>
      <App>
        <Leaderboard />
      </App>
    </React.StrictMode>
  );
}
root.render(<Root />);
