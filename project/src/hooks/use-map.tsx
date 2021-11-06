import React from 'react';
import leaflet from 'leaflet';
import { City } from '../types/offer';

export default function useMap(mapRef: React.RefObject<HTMLElement | null>, city: City): leaflet.Map | null {
  const [map, setMap] = React.useState<leaflet.Map | null>(null);

  React.useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      const layer = leaflet.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );

      instance.addLayer(layer);

      setMap(instance);
    }
  }, [map, mapRef, city]);

  return map;
}
