import {
  CityCoords,
  Settings
} from "../const";
import {createSelector} from "reselect";

const selectActiveCity = (state) => {
  return state.activeCity;
};

const selectMapCenter = (activeCity) => {
  return CityCoords[activeCity];
};

const getMapOptions = (offers, activeCity) => {
  return {
    center: selectMapCenter(activeCity),
    options: offers.map((offer) => ({
      id: offer.id,
      latitude: offer.coords.latitude,
      longitude: offer.coords.longitude,
    }))
  };
};

export const selectCityOffers = (state) => {
  return state.offers[state.activeCity];
};

export const selectNearCityOffers = (state) => {
  return state
    .offers[state.activeCity]
    .slice(0, Settings.NEAR_OFFERS_DISPLAY_LIMIT);
};


export const makeSelectCitiesMapProps = () => createSelector(
    selectActiveCity,
    selectCityOffers,
    (activeCity, offers) => {
      return getMapOptions(offers, activeCity);
    }
);

export const selectPropertyMapProps = createSelector(
    selectActiveCity,
    selectNearCityOffers,
    (activeCity, offers) => {
      return getMapOptions(offers, activeCity);
    }
);
