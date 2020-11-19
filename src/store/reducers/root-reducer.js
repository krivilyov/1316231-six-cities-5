import {combineReducers} from "redux";
import {common} from "./common/common";

export const NameSpace = {
  COMMON: `COMMON`,
};

export const rootReducer = combineReducers({
  [NameSpace.COMMON]: common,
});
