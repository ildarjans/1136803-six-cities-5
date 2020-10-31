import {cities} from "../const";
import {ActionType} from "./action";
import {extend} from "../utils";
import {offers} from "../mocks/offer";
import {reviews} from "../mocks/review";

const initialState = {
  activeCity: cities[0],
  offers,
  reviews,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {activeCity: action.payload});
    case ActionType.GET_OFFERS:
      return extend(state, {offers: action.payload});
  }
  return state;
}
