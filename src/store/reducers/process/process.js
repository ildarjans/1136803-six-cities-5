import {cities, SortType} from "../../../const";
import {ActionType} from "../../actions";
import {extend} from "../../../utils";

const initialState = {
  activeCity: cities[0],
  hoveredOfferId: ``,
  sortType: SortType.POPULAR,
};

export function processReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {activeCity: action.payload});
    case ActionType.CHANGE_HOVERED_OFFER_ID:
      return extend(state, {hoveredOfferId: action.payload});
    case ActionType.CHANGE_SORT_TYPE:
      return extend(state, {sortType: action.payload});
  }
  return state;
}
