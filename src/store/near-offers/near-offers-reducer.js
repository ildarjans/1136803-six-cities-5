import {ActionType} from "../action-type";
import {adaptOfferToClient, extend} from "../../utils";

const initialState = {
  nearOffers: [],
  loading: false,
  error: null,
};

export function nearOffersReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.NEAR_OFFERS_LOADING_SUCCESS:
      return extend(state, {
        nearOffers: action.payload
          // .slice(0, Settings.NEAR_OFFERS_DISPLAY_LIMIT)
          .map(adaptOfferToClient),
        loading: false
      });
    case ActionType.NEAR_OFFERS_LOADING_START:
      return extend(state, {
        nearOffers: [],
        loading: true,
        error: null,
      });
    case ActionType.NEAR_OFFERS_LOADING_FAIL:
      return extend(state, {
        loading: false,
        error: action.payload
      });
  }
  return state;
}
