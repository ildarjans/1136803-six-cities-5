import {CityCoords, SortType} from "../const";
import {createSelector, createSelectorCreator, defaultMemoize} from "reselect";
import {
  isEqualListsIds,
  sortOffersPriceAsc,
  sortOffersPriceDes,
  sortOffersTopRated
} from "../utils";

export const selectSortType = (state) => {
  return state.PROCESS.sortType;
};

export const selectActiveOfferId = (state) => {
  return state.PROCESS.activeOfferId;
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

const createIdEqualSelector = createSelectorCreator(defaultMemoize, isEqualListsIds);

export const selectCitiesMapIcons = createSelector(
    selectCityOffers,
    (offers) => offers
      .map((offer) => ({
        id: offer.id,
        lat: offer.location.latitude,
        lng: offer.location.longitude,
      }))
);

export const selectMemoizePropertyMapIcons = createIdEqualSelector(
    selectNearCityOffers,
    (offers) => offers
      .map((offer) => ({
        id: offer.id,
        lat: offer.location.latitude,
        lng: offer.location.longitude,
      }))
);

export const selectMemoizeNearOffers = createIdEqualSelector(
    selectNearCityOffers,
    (offers) => offers
);

export const selectMemoizeHotelReviews = createIdEqualSelector(
    selectHotelReviews,
    (reviews) => reviews
);

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


