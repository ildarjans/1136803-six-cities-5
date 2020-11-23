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

export const selectOffer = ({OFFERS}) => {
  return OFFERS.offers;
};

export const selectCityOffers = ({OFFERS, PROCESS}) => {
  return OFFERS.cityOffers[PROCESS.activeCity];
};

export const selectNearCityOffers = (state) => {
  return state.NEAR_OFFERS.nearOffers;
};

export const selectHotelReviews = (state) => {
  return state.REVIEWS.reviews;
};

export const selectCitiesMapIcons = createSelector(
    selectCityOffers,
    (offers) => offers.map((offer) => (
      {
        id: offer.id,
        lat: offer.location.latitude,
        lng: offer.location.longitude,
      }
    ))
);


export const selectPropertyMapIcons = createSelector(
    selectNearCityOffers,
    (offers) => offers.map((offer) => ({
      id: offer.id,
      lat: offer.location.latitude,
      lng: offer.location.longitude,
    }))
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
