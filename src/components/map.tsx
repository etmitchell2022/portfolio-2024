import React, { useState, useEffect, useRef } from 'react';
import { Map } from 'react-map-gl';

const CustomMap = () => {
  const [viewState, setViewState] = useState({
    longitude: -98.5795,
    latitude: 39.8283,
    zoom: 6,
  });

  const mapRef = useRef();

  const handleFly = () => {
    const mapInstance = mapRef.current.getMap();
    const newCenter = [-86.1581, 39.7684];

    mapInstance.flyTo({
      center: newCenter,
      essential: true,
      zoom: 14,
      speed: 1.5,
      curve: 1,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      handleFly();
    }, 1000);
  }, []);

  return (
    <div style={{ height: '200px' }}>
      <Map
        {...viewState}
        ref={mapRef}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: '100%', height: '200px' }}
        mapStyle='mapbox://styles/mapbox/dark-v10'
        mapboxAccessToken='token'
      >
      </Map>
    </div>
  );
};

export default CustomMap;
