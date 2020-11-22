import {combineReducers} from "redux";
import {dataReducer} from "./reducers/data/data";
import {processReducer} from "./reducers/process/process";
import {userReducer} from "./reducers/user/user";

export const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
  USER: `USER`,
};

export const rootReducer = combineReducers({
  [NameSpace.DATA]: dataReducer,
  [NameSpace.PROCESS]: processReducer,
  [NameSpace.USER]: userReducer,
});
