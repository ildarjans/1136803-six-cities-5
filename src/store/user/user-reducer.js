import {ActionType} from "../action-type";
import {adaptUserToClient, extend} from "../../utils";
import {AuthorizationStatus} from "../../const";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTHORIZED,
  waitingAuthorizationResponse: false,
  error: null,
  user: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SEND_AUTHORIZATION_REQUEST:
      return extend(state, {
        waitingAuthorizationResponse: true,
        error: null,
      });
    case ActionType.AUTHORIZATION_SUCCESS:
      return extend(state, {
        authorizationStatus: AuthorizationStatus.AUTHORIZED,
        waitingAuthorizationResponse: false,
      });
    case ActionType.AUTHORIZATION_FAIL:
      return extend(state, {
        authorizationStatus: AuthorizationStatus.NO_AUTHORIZED,
        waitingAuthorizationResponse: false,
        error: action.payload,
        user: {},
      });
    case ActionType.SET_USER_LOGIN_PROFILE:
      return extend(state, {
        user: adaptUserToClient(action.payload),
        waitingAuthorizationResponse: false,
      });
  }
  return state;
};
