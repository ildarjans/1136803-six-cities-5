import {createSelector} from "reselect";
import {AuthorizationStatus, CityCoords, SortType} from "../const";
import {
  sortOffersPriceAsc,
  sortOffersPriceDes,
  sortOffersTopRated
} from "../utils";

export const selectSortType = ({PROCESS}) => {
  return PROCESS.sortType;
};

export const selectHoveredOfferId = ({PROCESS}) => {
  return Number(PROCESS.hoveredOfferId);
};

export const selectActiveCity = ({PROCESS}) => {
  return PROCESS.activeCity;
};

export const selectIsAuthStatus = ({USER}) => {
  return USER.authorizationStatus === AuthorizationStatus.AUTHORIZED;
};

export const selectMapCenter = (state) => {
  return CityCoords[selectActiveCity(state)];
};

export const selectRouteId = (props) => {
  return Number(props.match.params.id);
};

export const selectOffer = ({OFFERS}, props) => {
  return OFFERS.offers[selectRouteId(props)];
};

export const selectCityOffers = ({OFFERS, PROCESS}) => {
  return OFFERS.cityOffers[PROCESS.activeCity];
};

export const selectNearCityOffers = ({NEAR_OFFERS}) => {
  return NEAR_OFFERS.nearOffers;
};

export const selectHotelReviews = ({REVIEWS}) => {
  return REVIEWS.reviews;
};

export const selectFavoriteCityOffers = ({FAVORITES}) => {
  return FAVORITES.favoriteCityOffers;
};

export const selectIsEmptyFavorites = (state) => {
  return Object
        .values(selectFavoriteCityOffers(state))
        .every((offers) => offers.length === 0);
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
    selectOffer,
    (nearOffers, activeOffer) => [...nearOffers, activeOffer].map((offer) => ({
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
