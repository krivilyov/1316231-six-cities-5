import {Cities, Sorting} from "../const";
import {offers} from "../mocks/offers";
import {reviews} from "../mocks/reviews";
import {extend} from "../utils";
import {ActionType} from "./action";

const initialState = {
  activeCity: Cities[0],
  offers,
  reviews,
  sortingType: Sorting.POPULAR,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {activeCity: action.payload});
    case ActionType.GET_OFFERS:
      return extend(state, {offers: action.payload});
    case ActionType.SET_SORTING_TYPE:
      return extend(state, {sortingType: action.payload});
  }
  return state;
}
