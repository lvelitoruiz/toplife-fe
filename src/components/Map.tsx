import React, { useEffect, useMemo } from "react";
// import GoogleMapReact from "google-map-react";
// import Marker from "./Marker";
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

interface mapProperties {
  latitude: string;
  longitude: string;
  showStores: boolean;
  showBanks: boolean;
  showHospitals: boolean;
  stores?: [];
  banks?: [];
  hospitals?: [];
}

const Map = ({
  latitude,
  longitude,
  stores,
  banks,
  hospitals,
  showBanks,
  showHospitals,
  showStores,
}: mapProperties) => {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyBAY12Wd3T8_EzLwIKSSaNptOLHgT7-2SI",
//   });

  const defaultProps = {
    center: {
      lat: parseFloat(latitude),
      lng: parseFloat(longitude),
    },
    zoom: 15,
  };

  const center = useMemo(
    () => ({ lat: parseFloat(latitude), lng: parseFloat(longitude) }),
    []
  );

  useEffect(() => {
    console.log("the stores: ", stores);
  }, [stores]);

  //   AIzaSyBAY12Wd3T8_EzLwIKSSaNptOLHgT7-2SI

//   const places = (
//     <>
//       {showStores && stores !== undefined && stores?.length > 0
//         ? stores.map((item: any, index) => {
//             console.log(parseFloat(item.lat));
//             console.log(parseFloat(item.lng));
//             return (
//               <Marker
//                 lat={parseFloat(item.lat)}
//                 lng={parseFloat(item.lng)}
//                 text={item.text}
//                 key={index}
//               />
//             );
//           })
//         : null}
//       {showBanks ? (
//         <>
//           {banks !== undefined && banks?.length > 0 ? (
//             <>
//               {banks.map((item: any, index) => {
//                 return (
//                   <Marker
//                     lat={parseFloat(item.lat)}
//                     lng={parseFloat(item.lng)}
//                     text={item.text}
//                     key={index}
//                   />
//                 );
//               })}
//             </>
//           ) : null}
//         </>
//       ) : null}
//       {showHospitals ? (
//         <>
//           {hospitals !== undefined && hospitals?.length > 0 ? (
//             <>
//               {hospitals.map((item: any, index) => {
//                 return (
//                   <Marker
//                     lat={parseFloat(item.lat)}
//                     lng={parseFloat(item.lng)}
//                     text={item.text}
//                     key={index}
//                   />
//                 );
//               })}
//             </>
//           ) : null}
//         </>
//       ) : null}
//     </>
//   );

  return (
    <div className="w-full h-full">
      {/* {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={15}
        />
      )} */}
    </div>
  );
};

export default Map;
