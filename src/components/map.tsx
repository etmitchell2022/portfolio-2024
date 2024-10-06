import React, { useState, useEffect, useRef } from 'react';
import maplibreGl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const CustomMap = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize the map using MapLibre
    if (!mapRef.current) {
      mapRef.current = new maplibreGl.Map({
        container: mapContainerRef.current, // Reference to the map container
        style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
        center: [-98.5795, 39.8283],
        zoom: 9, // Initial zoom level
        attributionControl: false,
      });

      // Add navigation controls (zoom buttons, etc.)
      mapRef.current.addControl(
        new maplibreGl.NavigationControl(),
        'top-right'
      );

      console.log('map', mapRef);
    }
  }, []);

  // Fly to a random location by clicking the button
  const handleFly = () => {
    if (mapRef.current) {
      const newCenter = [-86.1581, 39.7684];

      mapRef.current.flyTo({
        center: newCenter,
        essential: true, // Ensures animation works for users with reduced motion preferences
        zoom: 14,
        speed: 1.5,
        curve: 1,
      });
    }
  };

  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      {/* Map container */}
      <div ref={mapContainerRef} style={{ height: '500px', width: '100%' }} />

      {/* Fly button */}
      <button
        id='fly'
        style={{
          display: 'block',
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '50%',
          height: '40px',
          padding: '10px',
          border: 'none',
          borderRadius: '3px',
          fontSize: '12px',
          textAlign: 'center',
          color: '#fff',
          backgroundColor: '#ee8a65',
        }}
        onClick={handleFly}
      >
        Fly
      </button>
    </div>
  );
};

export default CustomMap;
