import {ActionType} from "../action-type";

export const favoritesActionCreator = {
  favoritesLoadingStart: () => ({
    type: ActionType.FAVORITES_LOADING_START,
  }),
  favoritesLoadingFail: (err) => ({
    type: ActionType.FAVORITES_LOADING_FAIL,
    payload: err
  }),
  favoritesLoadingSuccess: (offers) => ({
    type: ActionType.FAVORITES_LOADING_SUCCESS,
    payload: offers,
  }),
  favoriteOfferUpdateStart: () => ({
    type: ActionType.FAVORITE_OFFER_UPDATE_START,
  }),
  favoriteOfferUpdateFail: (err) => ({
    type: ActionType.FAVORITE_OFFER_UPDATE_FAIL,
    payload: err,
  }),
  favoriteOfferUpdateSuccess: () => ({
    type: ActionType.FAVORITE_OFFER_UPDATE_SUCCESS,
  }),
  removeFavoriteOffer: (id) => ({
    type: ActionType.FAVORITE_OFFER_REMOVE,
    payload: id,
  }),
  addFavoriteOffer: (offer) => ({
    type: ActionType.FAVORITE_OFFER_ADD,
    payload: offer,
  })
};
