import {combineReducers} from "redux";
import {common} from "./common/common";
import {user} from "./user/user";

export const NameSpace = {
  COMMON: `COMMON`,
  USER: `USER`,
};

export const rootReducer = combineReducers({
  [NameSpace.COMMON]: common,
  [NameSpace.USER]: user,
});
