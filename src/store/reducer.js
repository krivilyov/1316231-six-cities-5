import {CityName, Sorting} from "../const";
// import {offers} from "../mocks/offers";
import {reviews} from "../mocks/reviews";
import {extend} from "../utils";
import {ActionType} from "./action";

const initialState = {
  activeCity: CityName.AMSTERDAM,
  offers: [],
  reviews,
  sortingType: Sorting.POPULAR,
  mouseOverOfferId: null,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {activeCity: action.payload});
    case ActionType.SET_SORTING_TYPE:
      return extend(state, {sortingType: action.payload});
    case ActionType.MOUSE_OVER:
      return extend(state, {mouseOverOfferId: action.payload});
    case ActionType.LOAD_OFFERS:
      return extend(state, {offers: action.payload});
  }
  return state;
}
