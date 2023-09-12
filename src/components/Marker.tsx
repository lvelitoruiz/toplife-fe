import React, { useEffect, useState } from "react";

const Marker = ({
  locations,
  map,
}: {
  locations: google.maps.LatLngLiteral[];
  map: google.maps.Map | null | undefined;
}) => {
  const icon = document.createElement("div");
  icon.innerHTML = '<i class="icon-hospital text-2xl"></i>';
  locations.map(
    (position) =>
      new google.maps.Marker({
        position,
        map,
      })
  );
};

export default Marker;
