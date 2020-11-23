import {ActionType} from "../action-type";
import {adaptOfferToClient, extend} from "../../utils";

const getOffersDictionaries = (offersList) => {
  const offers = {};
  const cityOffers = {};
  offersList.forEach((offer) => {
    const city = offer.city.name.toUpperCase();
    const adaptedOffer = adaptOfferToClient(offer);

    if (!cityOffers[city]) {
      cityOffers[city] = [];
    }

    offers[offer.id] = adaptedOffer;
    cityOffers[city].push(adaptedOffer);
  });

  return [offers, cityOffers];
};

const initialState = {
  offers: {},
  cityOffers: {},
  loading: false,
  error: null,
};

export function offersReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.OFFERS_LOADING_SUCCESS:
      const [offers, cityOffers] = getOffersDictionaries(action.payload);
      return extend(state, {
        offers,
        cityOffers,
        loading: false
      });
    case ActionType.OFFERS_LOADING_START:
      return extend(state, {
        offers: {},
        cityOffers: {},
        loading: true,
        error: null,
      });
    case ActionType.OFFERS_LOADING_FAIL:
      return extend(state, {
        loading: false,
        error: action.payload
      });
  }
  return state;
}
