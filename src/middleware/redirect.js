import {ActionType} from "../store/action-type";
import {browserHistory} from "../browser-history";

export const redirect = () => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }
  return next(action);
};
