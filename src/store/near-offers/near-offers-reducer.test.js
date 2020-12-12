import {nearOffersReducer} from "./near-offers-reducer";
import {
  mockError,
  mockOffersList,
  mockResponseOffers
} from "../../mocks/mock-data";
import {ActionType} from "../action-type";


const mockState = {
  nearOffers: [],
  loading: false,
  error: null,
};


describe(`Should nearOffersReducer works correctly`, () => {
  it(`nearOffersReducer without parameters return initial state`, () => {
    expect(nearOffersReducer(void 0, {})).toEqual(mockState);
  });
  it(`nearOffersReducer with NEAR_OFFERS_LOADING_SUCCESS action`, () => {
    const state = nearOffersReducer(mockState, {
      type: ActionType.NEAR_OFFERS_LOADING_SUCCESS,
      payload: mockResponseOffers
    });
    expect(state).toEqual({
      nearOffers: mockOffersList,
      loading: false,
      error: null,
    });
  });
  it(`nearOffersReducer with NEAR_OFFERS_LOADING_START action`, () => {
    const state = nearOffersReducer(mockState, {
      type: ActionType.NEAR_OFFERS_LOADING_START
    });
    expect(state).toEqual({
      nearOffers: [],
      loading: true,
      error: null,
    });
  });
  it(`nearOffersReducer with NEAR_OFFERS_LOADING_FAIL action`, () => {
    const state = nearOffersReducer(mockState, {
      type: ActionType.NEAR_OFFERS_LOADING_FAIL,
      payload: mockError
    });
    expect(state).toEqual({
      nearOffers: [],
      loading: false,
      error: mockError,
    });
  });
});
