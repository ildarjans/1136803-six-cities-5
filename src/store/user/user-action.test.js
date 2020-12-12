import {userActionCreator} from "./user-action";
import {ActionType} from "../action-type";
import {mockError, mockUser} from "../../mocks/mock-data";

describe(`Should UserActionCreator has correct behavior`, () => {
  it(`requireAuthorizationStatus is work well`, () => {
    expect(userActionCreator.requireAuthorizationStatus()).toEqual({
      type: ActionType.SEND_AUTHORIZATION_REQUEST
    });
  });
  it(`authorizationFail is work well`, () => {
    expect(userActionCreator.authorizationFail(mockError)).toEqual({
      type: ActionType.AUTHORIZATION_FAIL,
      payload: mockError
    });
  });
  it(`authorizationSuccess is work well`, () => {
    expect(userActionCreator.authorizationSuccess()).toEqual({
      type: ActionType.AUTHORIZATION_SUCCESS
    });
  });
  it(`setUserLoginProfile is work well`, () => {
    expect(userActionCreator.setUserLoginProfile(mockUser)).toEqual({
      type: ActionType.SET_USER_LOGIN_PROFILE,
      payload: mockUser
    });
  });
});
