import React, { useState } from "react";
import "../styles/Locations.css";

const mockLocations = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
  "Austin",
  "Jacksonville",
  "Fort Worth",
  "Columbus",
  "Charlotte",
  "San Francisco",
  "Indianapolis",
  "Seattle",
  "Denver",
  "Washington",
];

function Locations() {
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleSelect = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="locations-container">
      <h2>Select Your Location</h2>
      <div className="locations-grid">
        {mockLocations.map((loc) => (
          <div
            key={loc}
            className={`location-card ${
              selectedLocation === loc ? "selected" : ""
            }`}
            onClick={() => handleSelect(loc)}
          >
            📍 {loc}
          </div>
        ))}
      </div>
      {selectedLocation && (
        <div className="location-message">
          ✅ You selected: <strong>{selectedLocation}</strong>
        </div>
      )}
    </div>
  );
}

export default Locations;
