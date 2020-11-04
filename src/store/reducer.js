import {cities} from "../const";
import {ActionType} from "./action";
import {extend} from "../utils";
import {offers} from "../mocks/offer";
import {reviews} from "../mocks/review";

const getCityOffers = (offersList) => {
  const cityOffers = {};

  cities.forEach((city) => {
    cityOffers[city] = [];
  });

  offersList.forEach((offer) => {
    cityOffers[offer.city].push(offer);
  });

  return cityOffers;
};

const cityOffers = getCityOffers(offers);

const initialState = {
  activeCity: cities[0],
  offers: cityOffers,
  reviews: reviews.slice(40),
  activeOfferId: ``
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {activeCity: action.payload});
    case ActionType.GET_OFFERS:
      return extend(state, {offers: action.payload});
    case ActionType.CHANGE_ACTIVE_OFFER_ID:
      return extend(state, {activeOfferId: action.payload});
  }
  return state;
}
