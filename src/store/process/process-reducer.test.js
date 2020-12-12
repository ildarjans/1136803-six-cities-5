import {SortType} from "../../const";
import {processReducer} from "./process-reducer";
import {ActionType} from "../action-type";

const mockState = {
  activeCity: `AMSTERDAM`,
  hoveredOfferId: ``,
  sortType: SortType.POPULAR,
};

const mockCity = `HAMBURG`;
const mockId = 696;
const mockSortType = `top`;

describe(`Should processReducer works correctly`, () => {
  it(`processReducer without parameters should return initial state`, () => {
    expect(processReducer(void 0, {})).toEqual(mockState);
  });
  it(`processReducer with CHANGE_CITY action`, () => {
    const state = processReducer(mockState, {
      type: ActionType.CHANGE_CITY,
      payload: mockCity
    });
    expect(state).toEqual({
      activeCity: mockCity,
      hoveredOfferId: ``,
      sortType: SortType.POPULAR,
    });
  });
  it(`processReducer with CHANGE_HOVERED_OFFER_ID action`, () => {
    const state = processReducer(mockState, {
      type: ActionType.CHANGE_HOVERED_OFFER_ID,
      payload: mockId
    });
    expect(state).toEqual({
      activeCity: `AMSTERDAM`,
      hoveredOfferId: mockId,
      sortType: SortType.POPULAR,
    });
  });
  it(`processReducer with CHANGE_SORT_TYPE action`, () => {
    const state = processReducer(mockState, {
      type: ActionType.CHANGE_SORT_TYPE,
      payload: mockSortType
    });
    expect(state).toEqual({
      activeCity: `AMSTERDAM`,
      hoveredOfferId: ``,
      sortType: mockSortType,
    });
  });
});
