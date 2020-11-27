import {ActionType} from "../../actions";
import {adaptUserToClient, extend} from "../../../utils";
import {AuthorizationStatus} from "../../../const";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: ``,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return extend(state, {authorizationStatus: action.payload});
    case ActionType.SET_AUTH_USER:
      return extend(state, {user: adaptUserToClient(action.payload)});
  }
  return state;
};
