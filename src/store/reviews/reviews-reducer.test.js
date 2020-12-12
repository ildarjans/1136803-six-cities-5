import {reviewsReducer} from "./reviews-reducer";
import {ActionType} from "../action-type";
import {
  mockError,
  mockResponseReviews,
  mockReviews
} from "../../mocks/mock-data";

const mockState = {
  reviews: [],
  loading: false,
  error: null,
  posting: false,
};

describe(`Should reviewsReducer works correctly`, () => {
  it(`userReducer without parameters should return initial state`, () => {
    expect(reviewsReducer(void 0, {})).toEqual(mockState);
  });
  it(`userReducer with REVIEWS_LOADING_START action`, () => {
    const state = reviewsReducer(mockState, {
      type: ActionType.REVIEWS_LOADING_START
    });
    expect(state).toEqual({
      reviews: [],
      loading: true,
      error: null,
      posting: false,
    });
  });
  it(`userReducer with REVIEWS_LOADING_SUCCESS action`, () => {
    const state = reviewsReducer(mockState, {
      type: ActionType.REVIEWS_LOADING_SUCCESS,
      payload: mockResponseReviews
    });
    expect(state).toEqual({
      reviews: mockReviews,
      loading: false,
      error: null,
      posting: false,
    });
  });
  it(`userReducer with REVIEWS_LOADING_FAIL action`, () => {
    const state = reviewsReducer(mockState, {
      type: ActionType.REVIEWS_LOADING_FAIL,
      payload: mockError
    });
    expect(state).toEqual({
      reviews: [],
      loading: false,
      error: mockError,
      posting: false,
    });
  });
  it(`userReducer with REVIEW_POST_START action`, () => {
    const state = reviewsReducer(mockState, {
      type: ActionType.REVIEW_POST_START,
    });
    expect(state).toEqual({
      reviews: [],
      loading: false,
      error: null,
      posting: true,
    });
  });
  it(`userReducer with REVIEW_POST_FAIL action`, () => {
    const state = reviewsReducer(mockState, {
      type: ActionType.REVIEW_POST_FAIL,
      payload: mockError
    });
    expect(state).toEqual({
      reviews: [],
      loading: false,
      error: mockError,
      posting: false,
    });
  });
});
