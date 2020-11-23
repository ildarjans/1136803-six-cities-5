import {ActionType} from "../action-type";

export const offersActionCreator = {
  offersLoadingStart: () => ({
    type: ActionType.OFFERS_LOADING_START,
  }),
  offersLoadingFail: (err) => ({
    type: ActionType.OFFERS_LOADING_FAIL,
    payload: err
  }),
  offersLoadingSuccess: (offers) => ({
    type: ActionType.OFFERS_LOADING_SUCCESS,
    payload: offers,
  }),
};
