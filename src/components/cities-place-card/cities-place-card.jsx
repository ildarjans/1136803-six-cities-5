import React from "react";
import {PlaceCard} from "../place-card/place-card";

export const CitiesPlaceCard = (props) => {
  return (
    <PlaceCard block={`cities`} element={`place-card`} {...props}/>
  );
};
