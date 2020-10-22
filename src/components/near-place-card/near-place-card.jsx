import React from "react";
import {PlaceCard} from "../place-card/place-card";

export const NearPlaceCard = (props) => {
  return (
    <PlaceCard block={`near-places`} element={`card`} {...props}/>
  );
};
