import {createSelector} from "reselect";
import {getCityOffers, getSortedOffersByType} from "../core";

export const getOffers = (state) => state.COMMON.offers;
const getActiveCity = (state) => state.COMMON.activeCity;
const getCurrentSortingType = (state) => state.COMMON.sortingType;
export const getChangedBookmarkOffer = (state) => state.COMMON.changedBookmarkOffer;

export const getCurrentCityOffers = createSelector(
    getOffers,
    getActiveCity,
    (offers, currentCityName) => {
      return getCityOffers(offers, currentCityName);
    }
);

export const getCurrentSortedCityOffers = createSelector(
    getCurrentCityOffers,
    getCurrentSortingType,
    (currentCityOffers, currentSortType) => {
      return getSortedOffersByType(currentCityOffers, currentSortType);
    }
);
