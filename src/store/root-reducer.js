import {combineReducers} from "redux";
import {dataReducer} from "./reducers/data/data";
import {processReducer} from "./reducers/process/process";

export const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`
};

export const rootReducer = combineReducers({
  [NameSpace.DATA]: dataReducer,
  [NameSpace.PROCESS]: processReducer,
});
