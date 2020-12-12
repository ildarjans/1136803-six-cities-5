import {ActionType} from "../action-type";

export const userActionCreator = {
  requireAuthorizationStatus: () => ({
    type: ActionType.SEND_AUTHORIZATION_REQUEST,
  }),
  authorizationSuccess: () => ({
    type: ActionType.AUTHORIZATION_SUCCESS,
  }),
  authorizationFail: (err) => ({
    type: ActionType.AUTHORIZATION_FAIL,
    payload: err,
  }),
  setUserLoginProfile: (data) => ({
    type: ActionType.SET_USER_LOGIN_PROFILE,
    payload: data
  }),
};
