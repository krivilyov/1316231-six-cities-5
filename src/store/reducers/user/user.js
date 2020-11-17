import {ActionType} from "../../action";
import {extend} from "../../../utils";
import {AuthorizationStatus} from "../../../const";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: {},
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {authorizationStatus: action.payload});
    case ActionType.LOAD_AUTH_INFO:
      return extend(state, {authInfo: action.payload});
  }
  return state;
};
