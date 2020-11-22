import {createSelector} from "reselect";
import {getCityOffers, getSortedOffersByType} from "../core";
import {AuthorizationStatus} from "../const";

export const getOffers = (state) => state.COMMON.offers;
const getActiveCity = (state) => state.COMMON.activeCity;
const getCurrentSortingType = (state) => state.COMMON.sortingType;
export const getAuthorizationStatus = (state) => state.USER.authorizationStatus;
export const getAuthInfo = (state) => state.USER.authInfo;
export const getChangedBookmarkOffer = (state) => state.COMMON.changedBookmarkOffer;
export const getReviews = (state) => state.COMMON.reviews;
export const getRelatedOffers = (state) => state.COMMON.relatedOffers;
export const getBookmarkOffers = (state) => state.COMMON.bookmarkOffers;

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

export const getIsAuthorizedStatus = createSelector(
    getAuthorizationStatus,
    (authorizationStatus) => {
      return authorizationStatus === AuthorizationStatus.AUTH;
    }
);

export const getUserEMail = createSelector(
    getAuthorizationStatus,
    getAuthInfo,
    (authorizationStatus, authInfo) => {
      return authorizationStatus === AuthorizationStatus.AUTH ? authInfo.email : ``;
    }
);

export const getUserAvatar = createSelector(
    getAuthorizationStatus,
    getAuthInfo,
    (authorizationStatus, authInfo) => {
      return authorizationStatus === AuthorizationStatus.AUTH ? authInfo.avatarUrl : ``;
    }
);

export const getBookmarkOffersByCity = createSelector(
    getBookmarkOffers,
    (bookmarkOffers) => {
      const bookmarkOffersByCityMap = new Map();
      bookmarkOffers.forEach((item) => {
        bookmarkOffersByCityMap.set(item.city, bookmarkOffersByCityMap.has(item.city) ?
          [...bookmarkOffersByCityMap.get(item.city), item] : [item]);
      });
      return bookmarkOffersByCityMap;
    }
);
