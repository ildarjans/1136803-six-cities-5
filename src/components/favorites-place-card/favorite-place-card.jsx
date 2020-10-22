import React from "react";
import {PlaceCard} from "../place-card/place-card";

export const FavoritesPlaceCard = (props) => {
  return (
    <PlaceCard block={`favorites`} element={`card`} {...props}/>
  );
};
