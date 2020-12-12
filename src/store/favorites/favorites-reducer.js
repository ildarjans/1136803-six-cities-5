import {ActionType} from "../action-type";
import {extend} from "../../utils";
import {getFavoriteCityOffersDictionary, removeOfferById} from "../store-utils";

const initialState = {
  favoriteCityOffers: {},
  updating: false,
  loading: false,
  error: null
};

const addFavoriteOffer = (state, action) => {
  const city = action.payload.city.name.toUpperCase();
  const favoriteCityOffers = state.favoriteCityOffers[city] ? state.favoriteCityOffers[city] : [];
  return extend(
      state,
      {
        updating: false,
        favoriteCityOffers: extend(state.favoriteCityOffers,
            {[city]: [...favoriteCityOffers, action.payload]})
      }
  );
};

const removeFavoriteOffer = (state, action) => {
  const city = action.payload.city.name.toUpperCase();
  const {id} = action.payload;
  const cityOffersList = removeOfferById(state.favoriteCityOffers[city], id);
  return extend(
      state,
      {
        updating: false,
        favoriteCityOffers: extend(state.favoriteCityOffers,
            {[city]: cityOffersList})
      }
  );
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FAVORITES_LOADING_START:
      return extend(state, {
        loading: true,
        favoriteCityOffers: {},
      });
    case ActionType.FAVORITES_LOADING_SUCCESS:
      return extend(state, {
        loading: false,
        favoriteCityOffers: getFavoriteCityOffersDictionary(action.payload),
      });
    case ActionType.FAVORITES_LOADING_FAIL:
      return extend(state, {
        loading: false,
        error: action.payload,
      });
    case ActionType.FAVORITE_OFFER_UPDATE_START:
      return extend(state, {
        updating: true,
        error: null,
      });
    case ActionType.FAVORITE_OFFER_UPDATE_SUCCESS:
      return extend(state, {
        updating: false,
      });
    case ActionType.FAVORITE_OFFER_UPDATE_FAIL:
      return extend(state, {
        updating: false,
        error: action.payload,
      });
    case ActionType.FAVORITE_OFFER_ADD:
      return addFavoriteOffer(state, action);
    case ActionType.FAVORITE_OFFER_REMOVE:
      return removeFavoriteOffer(state, action);
  }

  return state;

};
