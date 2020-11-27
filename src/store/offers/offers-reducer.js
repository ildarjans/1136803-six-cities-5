import {ActionType} from "../action-type";
import {extend} from "../../utils";
import {getOffersDictionaries, updateOffersList} from "../store-utils";

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
    case ActionType.UPDATE_OFFER:
      return extend(
          state,
          {
            offers: extend(state.offers,
                {[action.payload.id]: action.payload}
            )
          }
      );
    case ActionType.UPDATE_CITY_OFFER:
      const city = action.payload.city.name.toUpperCase();
      const cityOffersList = updateOffersList(state.cityOffers[city], action.payload);
      return extend(
          state,
          {
            cityOffers: extend(state.cityOffers,
                {[city]: cityOffersList}
            )
          }
      );
  }
  return state;
}

