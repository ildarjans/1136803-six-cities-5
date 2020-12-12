import {processActionCreator} from "./process-action";
import {ActionType} from "../action-type";

const mockCity = `AMSTERDAM`;
const mockId = 69;
const mockSortType = `popular`;
const mockUrl = `https://www.everybodylearnreactredux.org`;

describe(`Should processActionCreator has correct behavior`, () => {
  it(`changeCity works well`, () => {
    expect(processActionCreator.changeCity(mockCity)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: mockCity
    });
  });
  it(`changeHoveredOfferId works well`, () => {
    expect(processActionCreator.changeHoveredOfferId(mockId)).toEqual({
      type: ActionType.CHANGE_HOVERED_OFFER_ID,
      payload: mockId
    });
  });
  it(`changeSortType works well`, () => {
    expect(processActionCreator.changeSortType(mockSortType)).toEqual({
      type: ActionType.CHANGE_SORT_TYPE,
      payload: mockSortType
    });
  });
  it(`redirectToRoute works well`, () => {
    expect(processActionCreator.redirectToRoute(mockUrl)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: mockUrl
    });
  });
});
