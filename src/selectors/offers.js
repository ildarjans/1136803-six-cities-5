import {createSelector} from "reselect";
import {CityCoords, SortType} from "../const";
import {
  sortOffersPriceAsc,
  sortOffersPriceDes,
  sortOffersTopRated
} from "../utils";

export const selectSortType = (state) => {
  return state.PROCESS.sortType;
};

export const selectHoveredOfferId = (state) => {
  return state.PROCESS.hoveredOfferId;
};

export const selectActiveCity = (state) => {
  return state.PROCESS.activeCity;
};

export const selectMapCenter = (state) => {
  return CityCoords[selectActiveCity(state)];
};

export const selectCityOffers = (state) => {
  return state.DATA.offers[state.PROCESS.activeCity];
};

export const selectNearCityOffers = (state) => {
  return state.DATA.nearOffers;
};

export const selectHotelReviews = (state) => {
  return state.DATA.reviews;
};

export const selectCitiesMapIcons = (state) => {
  return selectCityOffers(state)
    .map((offer) => ({
      id: offer.id,
      lat: offer.location.latitude,
      lng: offer.location.longitude,
    }));
};

export const selectPropertyMapIcons = (state) => {
  return selectNearCityOffers(state)
    .map((offer) => ({
      id: offer.id,
      lat: offer.location.latitude,
      lng: offer.location.longitude,
    }));
};

export const selectSortedOffersByType = createSelector(
    selectSortType,
    selectCityOffers,
    (sortType, offers) => {
      switch (sortType) {
        case (SortType.ASC):
          return offers.slice().sort(sortOffersPriceAsc);
        case (SortType.DESC):
          return offers.slice().sort(sortOffersPriceDes);
        case (SortType.TOP):
          return offers.slice().sort(sortOffersTopRated);
        default:
          return offers;
      }
    }
);


