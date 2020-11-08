import {
  CityCoords,
  Settings
} from "../const";
import {createSelector} from "reselect";

const selectActiveCity = (state) => {
  return state.activeCity;
};

export const selectMapCenter = (state) => {
  return CityCoords[selectActiveCity(state)];
};

export const selectCityOffers = (state) => {
  return state.offers[state.activeCity];
};

export const selectNearCityOffers = (state) => {
  return state
    .offers[state.activeCity]
    .slice(0, Settings.NEAR_OFFERS_DISPLAY_LIMIT);
};

export const selectCitiesMapIcons = createSelector(
    selectCityOffers,
    (offers) => offers
      .map((offer) => ({
        id: offer.id,
        lat: offer.coords.latitude,
        lng: offer.coords.longitude,
      }))
);

export const selectPropertyMapIcons = createSelector(
    selectNearCityOffers,
    (offers) => offers
      .map((offer) => ({
        id: offer.id,
        lat: offer.coords.latitude,
        lng: offer.coords.longitude,
      }))
);
