import {ActionType} from "../action-type";
import {adaptReviewToClient, extend} from "../../utils";

const initialState = {
  reviews: [],
  loading: false,
  error: null
};

export const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REVIEWS_LOADING_START:
      return extend(state, {
        reviews: [],
        loading: false,
        error: null,
      });
    case ActionType.REVIEWS_LOADING_SUCCESS:
      return extend(state, {
        reviews: action.payload.map(adaptReviewToClient),
        loading: false,
      });
    case ActionType.REVIEWS_LOADING_FAIL:
      return extend(state, {
        loading: false,
        error: action.payload,
      });
  }

  return state;
};
