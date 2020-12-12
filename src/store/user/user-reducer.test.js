import {userReducer} from "./user-reducer";
import {AuthorizationStatus} from "../../const";
import {ActionType} from "../action-type";
import {mockError, mockResponseUser, mockUser} from "../../mocks/mock-data";

const mockState = {
  authorizationStatus: AuthorizationStatus.NO_AUTHORIZED,
  waitingAuthorizationResponse: false,
  error: null,
  user: {},
};

describe(`Should userReducer works correctly`, () => {
  it(`g`, () => {
    expect(userReducer(void 0, {})).toEqual(mockState);
  });
  it(`userReducer with SEND_AUTHORIZATION_REQUEST action`, () => {
    const state = userReducer(
        mockState,
        {
          type: ActionType.SEND_AUTHORIZATION_REQUEST,
        });
    expect(state).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTHORIZED,
      waitingAuthorizationResponse: true,
      error: null,
      user: {},
    });
  });
  it(`userReducer with AUTHORIZATION_SUCCESS action`, () => {
    const state = userReducer(
        mockState,
        {
          type: ActionType.AUTHORIZATION_SUCCESS,
        });
    expect(state).toEqual({
      authorizationStatus: AuthorizationStatus.AUTHORIZED,
      waitingAuthorizationResponse: false,
      error: null,
      user: {},
    });
  });
  it(`userReducer with AUTHORIZATION_FAIL action`, () => {
    const state = userReducer(
        mockState,
        {
          type: ActionType.AUTHORIZATION_FAIL,
          payload: mockError
        });
    expect(state).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTHORIZED,
      waitingAuthorizationResponse: false,
      error: mockError,
      user: {},
    });
  });
  it(`userReducer with SET_USER_LOGIN_PROFILE action`, () => {
    const state = userReducer(
        {
          authorizationStatus: AuthorizationStatus.AUTHORIZED,
          waitingAuthorizationResponse: false,
          error: null,
          user: {},
        },
        {
          type: ActionType.SET_USER_LOGIN_PROFILE,
          payload: mockResponseUser
        });
    expect(state).toEqual({
      authorizationStatus: AuthorizationStatus.AUTHORIZED,
      waitingAuthorizationResponse: false,
      error: null,
      user: mockUser,
    });
  });
});
