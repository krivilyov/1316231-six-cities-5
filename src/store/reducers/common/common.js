import {CityName, Sorting} from "../../../const";
import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {getOffersWithNewOfferByIndex} from "../../../core";

const initialState = {
  activeCity: CityName.AMSTERDAM,
  offers: [],
  reviews: [],
  sortingType: Sorting.POPULAR,
  mouseOverOfferId: null,
  changedBookmarkOffer: {},
  relatedOffers: [],
  bookmarkOffers: [],
};

export const common = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {activeCity: action.payload});
    case ActionType.SET_SORTING_TYPE:
      return extend(state, {sortingType: action.payload});
    case ActionType.MOUSE_OVER:
      return extend(state, {mouseOverOfferId: action.payload});
    case ActionType.LOAD_OFFERS:
      return extend(state, {offers: action.payload});
    case ActionType.LOAD_BOOKMARK_OFFER:
      return extend(state, {changedBookmarkOffer: action.payload});
    case ActionType.LOAD_RELATED_OFFERS:
      return extend(state, {relatedOffers: action.payload});
    case ActionType.CHANGE_BOOKMARK_STATUS_OFFER_IN_OFFERS:
      return extend(state, {
        offers: getOffersWithNewOfferByIndex(state.offers, action.payload),
        changedBookmarkOffer: action.payload,
      });
    case ActionType.LOAD_BOOKMARK_OFFERS:
      return extend(state, {bookmarkOffers: action.payload});
    case ActionType.LOAD_REVIEWS:
      return extend(state, {reviews: action.payload});
  }
  return state;
};
