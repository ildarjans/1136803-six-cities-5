import {ActionType} from "../action-type";

export const nearOffersActionCreator = {
  nearOffersLoadingStart: () => ({
    type: ActionType.NEAR_OFFERS_LOADING_START,
  }),
  nearOffersLoadingFail: (err) => ({
    type: ActionType.NEAR_OFFERS_LOADING_FAIL,
    payload: err
  }),
  nearOffersLoadingSuccess: (nearOffers) => ({
    type: ActionType.NEAR_OFFERS_LOADING_SUCCESS,
    payload: nearOffers,
  }),
};
