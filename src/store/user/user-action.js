import {ActionType} from "../action-type";

export const authActionCreator = {
  requireAuthorizationStatus: () => ({
    type: ActionType.SEND_AUTHORIZATION_REQUEST,
  }),
  authorizationSuccess: () => ({
    type: ActionType.AUTHORIZATION_SUCCESS,
  }),
  authorizationFail: () => ({
    type: ActionType.AUTHORIZATION_FAIL,
  }),
  setUserLoginProfile: (data) => ({
    type: ActionType.SET_USER_LOGIN_PROFILE,
    payload: data
  }),
};
