import {ActionType} from "../../actions";
import {adaptHotelToClient, adaptReviewToClient, extend} from "../../../utils";

const getCityOffers = (offersList) => {
  const cityOffers = {};
  offersList.forEach((offer) => {
    const city = offer.city.name.toUpperCase();
    if (!cityOffers[city]) {
      cityOffers[city] = [];
    }
    cityOffers[city].push(adaptHotelToClient(offer));
  });

  return cityOffers;
};

const initialState = {
  offers: [],
  reviews: [],
  nearOffers: []
};

export function dataReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.GET_HOTELS:
      return extend(state, {offers: getCityOffers(action.payload)});
    case ActionType.GET_REVIEWS:
      return extend(state, {reviews: action.payload.map(adaptReviewToClient)});
    case ActionType.GET_NEAR_HOTELS:
      return extend(state, {nearOffers: action.payload.map(adaptHotelToClient)});
  }
  return state;
}
