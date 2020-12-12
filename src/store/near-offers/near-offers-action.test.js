import {nearOffersActionCreator} from "./near-offers-action";
import {ActionType} from "../action-type";
import {mockCityOffers, mockError} from "../../mocks/mock-data";


describe(`Should nearOffersActionCreator has correct behavior`, () => {
  it(`nearOffersLoadingStart works well`, () => {
    expect(nearOffersActionCreator.nearOffersLoadingStart()).toEqual({
      type: ActionType.NEAR_OFFERS_LOADING_START
    });
  });
  it(`nearOffersLoadingFail works well`, () => {
    expect(nearOffersActionCreator.nearOffersLoadingFail(mockError)).toEqual({
      type: ActionType.NEAR_OFFERS_LOADING_FAIL,
      payload: mockError
    });
  });
  it(`nearOffersLoadingSuccess works well`, () => {
    expect(nearOffersActionCreator.nearOffersLoadingSuccess(mockCityOffers.AMSTERDAM[0])).toEqual({
      type: ActionType.NEAR_OFFERS_LOADING_SUCCESS,
      payload: mockCityOffers.AMSTERDAM[0]
    });
  });
});
