
import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const DEFAULT_POSITION = [12.2958, 76.6394]; // Mysuru

function LocationMap({ position, onSelect }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(position, 15, {
      duration: 0.8,
    });
  }, [map, position]);

  useMapEvents({
    click(event) {
      onSelect([event.latlng.lat, event.latlng.lng]);
    },
  });

  return <Marker position={position} />;
}

export default function ShopLocationPicker({ onSave }) {
  const [position, setPosition] = useState(DEFAULT_POSITION);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  async function searchLocation() {
    const searchText = query.trim();

    if (!searchText) {
      setError("Please enter a place or address.");
      setResults([]);
      return;
    }

    setLoading(true);
    setError("");
    setResults([]);

    try {
      const url = new URL(
        "https://nominatim.openstreetmap.org/search"
      );

      url.searchParams.set("q", searchText);
      url.searchParams.set("format", "jsonv2");
      url.searchParams.set("limit", "5");
      url.searchParams.set("countrycodes", "in");

      const response = await fetch(url.toString(), {
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Search request failed");
      }

      const data = await response.json();

      if (!Array.isArray(data) || data.length === 0) {
        setError("Address not found. Try another place.");
        return;
      }

      setResults(data);
    } catch (err) {
      console.error("Map search error:", err);
      setError(
        "Unable to search. Check your internet connection and try again."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleSearchKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      searchLocation();
    }
  }

  function chooseLocation(place) {
    const lat = Number(place.lat);
    const lng = Number(place.lon);

    if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
      setError("Invalid location. Please choose another result.");
      return;
    }

    setPosition([lat, lng]);
    setQuery(place.display_name);
    setResults([]);
    setError("");
    setSaved(false);
  }

  function handleMapSelect(newPosition) {
    setPosition(newPosition);
    setSaved(false);
    setError("");
  }

  function saveLocation() {
    if (typeof onSave !== "function") {
      setError("Location callback is missing in App.jsx.");
      return;
    }

    onSave({
      lat: position[0],
      lng: position[1],
    });

    setSaved(true);
    setError("");
  }

  return (
    <div className="shop-location-picker">
      <h3>📍 Find Your Shop Location</h3>

      <p>
        Search for your shop, street, area, or city.
        You can also click directly on the map.
      </p>

      {/* Search uses a div, not a nested form */}
      <div className="map-search-form">
        <input
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setError("");
            setResults([]);
          }}
          onKeyDown={handleSearchKeyDown}
          placeholder="Search Puttur, Mysuru, Bengaluru..."
          aria-label="Search shop location"
        />

        <button
          type="button"
          disabled={loading}
          onClick={searchLocation}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {error && (
        <p className="map-search-error" role="status">
          {error}
        </p>
      )}

      {results.length > 0 && (
        <div className="map-search-results">
          <p>
            <strong>Choose your address:</strong>
          </p>

          {results.map((place) => (
            <button
              type="button"
              key={place.place_id}
              className="map-search-result"
              onClick={() => chooseLocation(place)}
            >
              📍 {place.display_name}
            </button>
          ))}
        </div>
      )}

      <MapContainer
        center={DEFAULT_POSITION}
        zoom={13}
        scrollWheelZoom={true}
        style={{
          height: "400px",
          width: "100%",
          borderRadius: "12px",
          marginTop: "12px",
          zIndex: 1,
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMap
          position={position}
          onSelect={handleMapSelect}
        />
      </MapContainer>

      <div className="selected-location">
        <h4>Selected Shop Location</h4>

        <p>
          <strong>Latitude:</strong>{" "}
          {position[0].toFixed(6)}
        </p>

        <p>
          <strong>Longitude:</strong>{" "}
          {position[1].toFixed(6)}
        </p>

        <button type="button" onClick={saveLocation}>
          Save Shop Location
        </button>

        {saved && (
          <p className="map-save-success" role="status">
            ✅ Shop location saved successfully!
          </p>
        )}
      </div>

      <small>
        Map data © OpenStreetMap contributors.
        Search requires an internet connection.
      </small>
    </div>
  );
}
