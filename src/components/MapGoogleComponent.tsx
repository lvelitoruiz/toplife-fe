import React, { useEffect, useRef } from "react";
import Marker from "./Marker";

export const MapGoogleComponent = ({
  locations,
  center,
  zoom,
}: {
  locations: google.maps.LatLngLiteral[];
  center: google.maps.LatLngLiteral;
  zoom: number;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Display the map
    if (ref.current) {
      const map = new window.google.maps.Map(ref.current, {
        center: center,
        zoom: zoom,
      });

      const location: google.maps.LatLngLiteral = {lat: center.lat, lng: center.lng}

      new google.maps.Marker({
        position: location,
        map,
      })

      Marker({ locations, map });
    }
  }, [ref, locations]);

  return <div ref={ref} className="w-full h-full" />;
};

export default MapGoogleComponent;
