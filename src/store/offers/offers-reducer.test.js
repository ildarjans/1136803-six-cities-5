import {offersReducer} from "./offers-reducer";
import {
  mockCityOffers,
  mockError,
  mockOffers,
  mockResponseOffers
} from "../../mocks/mock-data";
import {ActionType} from "../action-type";

const mockInitialState = {
  offers: {},
  cityOffers: {},
  loading: false,
  error: null,
};

const mockFullState = {
  offers: mockOffers,
  cityOffers: mockCityOffers,
  loading: false,
  error: null,
};

describe(`Should offersReducer works correctly`, () => {
  it(`offersReducer without parameters should return initial state`, () => {
    expect(offersReducer(void 0, {})).toEqual(mockInitialState);
  });
  it(`offersReducer with OFFERS_LOADING_SUCCESS action`, () => {
    const state = offersReducer(mockInitialState, {
      type: ActionType.OFFERS_LOADING_SUCCESS,
      payload: mockResponseOffers
    });
    expect(state).toEqual({
      offers: mockOffers,
      cityOffers: mockCityOffers,
      loading: false,
      error: null,
    });
  });
  it(`offersReducer with OFFERS_LOADING_START action`, () => {
    const state = offersReducer(mockInitialState, {
      type: ActionType.OFFERS_LOADING_START,
    });
    expect(state).toEqual({
      offers: {},
      cityOffers: {},
      loading: true,
      error: null,
    });
  });
  it(`offersReducer with OFFERS_LOADING_FAIL action`, () => {
    const state = offersReducer(mockInitialState, {
      type: ActionType.OFFERS_LOADING_FAIL,
      payload: mockError
    });
    expect(state).toEqual({
      offers: {},
      cityOffers: {},
      loading: false,
      error: mockError,
    });
  });
  it(`offersReducer with UPDATE_OFFER action`, () => {
    const state = offersReducer(mockFullState, {
      type: ActionType.UPDATE_OFFER,
      payload: mockCityOffers.AMSTERDAM[0]
    });
    expect(state).toEqual({
      offers: mockOffers,
      cityOffers: mockCityOffers,
      loading: false,
      error: null,
    });
  });
  it(`offersReducer with UPDATE_CITY_OFFER action`, () => {
    const state = offersReducer(mockFullState, {
      type: ActionType.UPDATE_CITY_OFFER,
      payload: mockCityOffers.AMSTERDAM[0]
    });
    expect(state).toEqual({
      offers: mockOffers,
      cityOffers: mockCityOffers,
      loading: false,
      error: null,
    });
  });
});
