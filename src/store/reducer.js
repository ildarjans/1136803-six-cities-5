import {
  cities,
  SortType
} from "../const";
import {ActionType} from "./action";
import {extend} from "../utils";
import {offers} from "../mocks/offer";
import {reviews} from "../mocks/review";

const getCityOffers = (offersList) => {
  const cityOffers = {};

  offersList.forEach((offer) => {
    if (!cityOffers[offer.city]) {
      cityOffers[offer.city] = [];
    }
    cityOffers[offer.city].push(offer);
  });

  return cityOffers;
};

const initialState = {
  activeCity: cities[0],
  offers: getCityOffers(offers),
  reviews: reviews.slice(40),
  activeOfferId: ``,
  sortType: SortType.POPULAR,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {activeCity: action.payload});
    case ActionType.GET_OFFERS:
      return extend(state, {offers: action.payload});
    case ActionType.CHANGE_ACTIVE_OFFER_ID:
      return extend(state, {activeOfferId: action.payload});
    case ActionType.CHANGE_SORT_TYPE:
      return extend(state, {sortType: action.payload});
  }
  return state;
}
