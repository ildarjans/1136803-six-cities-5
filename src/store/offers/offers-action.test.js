import {offersActionCreator} from "./offers-action";
import {ActionType} from "../action-type";
import {mockError, mockResponseOffers} from "../../mocks/mock-data";

describe(`Should offersActionCreator has correct behavior`, () => {
  it(`offersLoadingStart is work well`, () => {
    expect(offersActionCreator.offersLoadingStart()).toEqual({
      type: ActionType.OFFERS_LOADING_START
    });
  });
  it(`offersLoadingFail is work well`, () => {
    expect(offersActionCreator.offersLoadingFail(mockError)).toEqual({
      type: ActionType.OFFERS_LOADING_FAIL,
      payload: mockError
    });
  });
  it(`offersLoadingSuccess is work well`, () => {
    expect(offersActionCreator.offersLoadingSuccess(mockResponseOffers)).toEqual({
      type: ActionType.OFFERS_LOADING_SUCCESS,
      payload: mockResponseOffers
    });
  });
  it(`updateOffer is work well`, () => {
    expect(offersActionCreator.updateOffer(mockResponseOffers[0])).toEqual({
      type: ActionType.UPDATE_OFFER,
      payload: mockResponseOffers[0]
    });
  });
  it(`updateCityOffer is work well`, () => {
    expect(offersActionCreator.updateCityOffer(mockResponseOffers[0])).toEqual({
      type: ActionType.UPDATE_CITY_OFFER,
      payload: mockResponseOffers[0]
    });
  });
});
