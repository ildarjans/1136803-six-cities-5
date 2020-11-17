import {cities, SortType} from "../../../const";
import {ActionType} from "../../actions";
import {extend} from "../../../utils";

const initialState = {
  activeCity: cities[0],
  activeOfferId: ``,
  sortType: SortType.POPULAR,
};

export function processReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {activeCity: action.payload});
    case ActionType.CHANGE_ACTIVE_OFFER_ID:
      return extend(state, {activeOfferId: action.payload});
    case ActionType.CHANGE_SORT_TYPE:
      return extend(state, {sortType: action.payload});
  }
  return state;
}
