import { useEffect, useRef } from 'react';
import maplibreGl, { Map, Marker } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const createMarker = (): HTMLDivElement => {
  const customMarker = document.createElement('div');
  customMarker.className = 'custom-marker';
  customMarker.style.width = '15px';
  customMarker.style.height = '15px';
  customMarker.style.backgroundColor = '#00A1E0';
  customMarker.style.border = '2px solid white';
  customMarker.style.borderRadius = '50%';
  customMarker.style.boxShadow = '0 0 5px rgba(0,0,0,0.5)';
  return customMarker;
};

const CustomMap = (): JSX.Element => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    if (!mapRef.current && mapContainerRef.current) {
      mapRef.current = new maplibreGl.Map({
        container: mapContainerRef.current,
        style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
        center: [-98.5795, 39.8283],
        zoom: 2,
        attributionControl: false,
        dragPan: false,
        interactive: false,
      });

      if (mapRef.current) {
        handleFly();
        addMarker();
      }
    }
  }, []);

  const handleFly = (): void => {
    if (mapRef.current) {
      const newCenter: [number, number] = [-86.1581, 39.7684];

      mapRef.current.flyTo({
        center: newCenter,
        essential: true,
        zoom: 13,
        speed: 3,
        curve: 0.5,
      });
    }
  };

  const addMarker = (): void => {
    if (mapRef.current) {
      const customMarker = createMarker();
      new Marker({
        element: customMarker,
      })
        .setLngLat([-86.1581, 39.7684])
        .addTo(mapRef.current);
    }
  };

  return (
    <div className='relative h-screen'>
      <div ref={mapContainerRef} className='h-60 w-full' />
      <div className='absolute top-0 left-0 w-full h-60 bg-black bg-opacity-50 pointer-events-none'></div>
    </div>
  );
};

export default CustomMap;
