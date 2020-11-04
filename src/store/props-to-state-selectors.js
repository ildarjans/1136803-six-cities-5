import {
  CityCoords,
  Settings
} from "../const";
import {createSelector} from "reselect";

export const getCityOffers = (state) => {
  return state.offers[state.activeCity];
};

const getMapCenter = (state) => {
  return {
    lat: CityCoords[state.activeCity].latitude,
    lng: CityCoords[state.activeCity].longitude,
  };
};

const getMapZoom = (state) => {
  return CityCoords[state.activeCity].zoom;
};

export const getOffersOptions = (state) => {
  return state.offers[state.activeCity].map((offer) => ({
    id: offer.id,
    lat: offer.coords.latitude,
    lng: offer.coords.longitude,
  }));
};

export const getOffers = (state) => {
  return state.offers[state.activeCity];
};

export const getActiveOfferId = (state) => {
  return state.activeOfferId;
};

export const getMapPropsSelector = createSelector([getMapCenter, getMapZoom, getOffersOptions, getActiveOfferId],
    (center, zoom, options, activeOfferId) => {
      return {
        center,
        zoom,
        options,
        activeOfferId,
      };
    });
