import React, { ReactElement, useEffect, useMemo, useState } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MapGoogleComponent from "./MapGoogleComponent";


interface mapProperties {
  latitude: string;
  longitude: string;
  sendInfo: string;
  stores?: google.maps.LatLngLiteral[];
  banks?: google.maps.LatLngLiteral[];
  hospitals?: google.maps.LatLngLiteral[];
}

const MapComponent = ({
  latitude,
  longitude,
  stores,
  banks,
  hospitals,
  sendInfo,
}: mapProperties) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  const [locationsTosend,setLocations] = useState<google.maps.LatLngLiteral[]>([]);

  const [centerPoint, setCenter] = useState<google.maps.LatLngLiteral>();

  const render = (status: Status): ReactElement => {
    if (status === Status.FAILURE) return <p>Error!</p>;
    return <p>Loading...</p>;
  };

  useEffect(() => {
    setCenter({
      lat: parseFloat(latitude),
      lng: parseFloat(longitude),
    });
  }, [latitude, longitude]);

  useEffect(() => {
    if(stores !== undefined && stores !== null) {
      setLocations(stores);
    }
  },[stores]);

  useEffect(() => {
    if(stores !== undefined && stores !== null) {
      if(sendInfo === "stores") {
        setLocations(stores);
      } else if(sendInfo === "banks") {
        setLocations(banks!);
      } else if(sendInfo === "hospitals") {
        setLocations(hospitals!);
      }
    }
  },[sendInfo]);

  return (
    <div className="w-full h-full">
      <Wrapper
        apiKey={"AIzaSyBAY12Wd3T8_EzLwIKSSaNptOLHgT7-2SI"}
        render={render}
      >
        {centerPoint !== undefined && banks !== undefined ? (
          <MapGoogleComponent center={centerPoint} zoom={14} locations={locationsTosend} />
        ) : null}
      </Wrapper>
    </div>
  );
};

export default MapComponent;
