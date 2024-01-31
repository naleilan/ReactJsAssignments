import React, { useState } from "react";
import { useGeoLocation } from "./useGeoLocation";

export default function App() {
  const [countClick, setCountClick] = useState(0);

  function handleCountClick() {
    setCountClick((count) => count + 1);
    getLocation();
  }

  const {
    isLoading,
    location: { lat, lng },
    error,
    getLocation,
  } = useGeoLocation();

  return (
    <div>
      <button onClick={handleCountClick} disabled={isLoading}>
        {" "}
        Get my Location
      </button>
      {isLoading && <p>Loading location...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS location:
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p>You requested location {countClick} times</p>
    </div>
  );
}
