import {ActionType} from "../action-type";

export const reviewsActionCreator = {
  reviewsLoadingStart: () => ({
    type: ActionType.REVIEWS_LOADING_START,
  }),
  reviewsLoadingSuccess: (reviews) => ({
    type: ActionType.REVIEWS_LOADING_SUCCESS,
    payload: reviews
  }),
  reviewsLoadingFail: (err) => ({
    type: ActionType.REVIEWS_LOADING_FAIL,
    payload: err
  }),
};
