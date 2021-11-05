import { City, Offer } from '../../types/offer';
import React from 'react';
import leaflet from 'leaflet';
import { URL_MARKER } from './const';
import useMap from '../../hooks/use-map';

type MapProps = {
    selectedId: number | null;
    city: City;
    points: Offer[];
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER.DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const selectedCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER.CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export default function Map(props: MapProps): JSX.Element {
  const { city, points, selectedId } = props;

  const mapRef = React.useRef(null);
  const map = useMap(mapRef, city);

  React.useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = leaflet.marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(
            selectedId !== null && point.id === selectedId
              ? selectedCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedId]);

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}
