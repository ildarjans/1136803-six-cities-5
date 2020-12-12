import {reviewsActionCreator} from "./reviews-action";
import {ActionType} from "../action-type";
import {mockError, mockReviews} from "../../mocks/mock-data";

describe(`Should reviewsActionCreator has correct behavior`, () => {
  it(`reviewsLoadingStart is work well`, () => {
    expect(reviewsActionCreator.reviewsLoadingStart()).toEqual({
      type: ActionType.REVIEWS_LOADING_START
    });
  });
  it(`reviewsLoadingSuccess is work well`, () => {
    expect(reviewsActionCreator.reviewsLoadingSuccess(mockReviews)).toEqual({
      type: ActionType.REVIEWS_LOADING_SUCCESS,
      payload: mockReviews
    });
  });
  it(`reviewsLoadingFail is work well`, () => {
    expect(reviewsActionCreator.reviewsLoadingFail(mockError)).toEqual({
      type: ActionType.REVIEWS_LOADING_FAIL,
      payload: mockError
    });
  });
  it(`reviewPostStart is work well`, () => {
    expect(reviewsActionCreator.reviewPostStart()).toEqual({
      type: ActionType.REVIEW_POST_START
    });
  });
  it(`reviewPostFail is work well`, () => {
    expect(reviewsActionCreator.reviewPostFail(mockError)).toEqual({
      type: ActionType.REVIEW_POST_FAIL,
      payload: mockError
    });
  });
});
