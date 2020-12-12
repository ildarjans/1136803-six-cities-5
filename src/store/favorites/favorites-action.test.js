import {favoritesActionCreator} from "./favorites-action";
import {ActionType} from "../action-type";
import {mockError, mockResponseOffers} from "../../mocks/mock-data";

const mockId = 69;

describe(`Should favoritesActionCreator has correct behavior`, () => {
  it(`favoritesLoadingStart is work well`, () => {
    expect(favoritesActionCreator.favoritesLoadingStart()).toEqual({
      type: ActionType.FAVORITES_LOADING_START
    });
  });
  it(`favoritesLoadingFail is work well`, () => {
    expect(favoritesActionCreator.favoritesLoadingFail(mockError)).toEqual({
      type: ActionType.FAVORITES_LOADING_FAIL,
      payload: mockError
    });
  });
  it(`favoritesLoadingSuccess is work well`, () => {
    expect(favoritesActionCreator.favoritesLoadingSuccess(mockResponseOffers)).toEqual({
      type: ActionType.FAVORITES_LOADING_SUCCESS,
      payload: mockResponseOffers
    });
  });
  it(`favoriteOfferUpdateStart is work well`, () => {
    expect(favoritesActionCreator.favoriteOfferUpdateStart()).toEqual({
      type: ActionType.FAVORITE_OFFER_UPDATE_START,
    });
  });
  it(`favoriteOfferUpdateFail is work well`, () => {
    expect(favoritesActionCreator.favoriteOfferUpdateFail(mockError)).toEqual({
      type: ActionType.FAVORITE_OFFER_UPDATE_FAIL,
      payload: mockError
    });
  });
  it(`favoriteOfferUpdateSuccess is work well`, () => {
    expect(favoritesActionCreator.favoriteOfferUpdateSuccess()).toEqual({
      type: ActionType.FAVORITE_OFFER_UPDATE_SUCCESS,
    });
  });
  it(`removeFavoriteOffer is work well`, () => {
    expect(favoritesActionCreator.removeFavoriteOffer(mockId)).toEqual({
      type: ActionType.FAVORITE_OFFER_REMOVE,
      payload: mockId
    });
  });
  it(`addFavoriteOffer is work well`, () => {
    expect(favoritesActionCreator.addFavoriteOffer(mockResponseOffers[0])).toEqual({
      type: ActionType.FAVORITE_OFFER_ADD,
      payload: mockResponseOffers[0]
    });
  });
});
