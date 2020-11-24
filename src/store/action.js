export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SET_SORTING_TYPE: `SET_SORTING_TYPE`,
  SET_OVER_OFFER_ID: `SET_OVER_OFFER_ID`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_AUTH_INFO: `LOAD_AUTH_INFO`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_BOOKMARK_OFFERS: `LOAD_BOOKMARK_OFFERS`,
  LOAD_BOOKMARK_OFFER: `LOAD_BOOKMARK_OFFER`,
  LOAD_RELATED_OFFERS: `LOAD_RELATED_OFFERS`,
  CHANGE_BOOKMARK_STATUS_OFFER_IN_OFFERS: `CHANGE_BOOKMARK_STATUS_OFFER_IN_OFFERS`,
  CHANGE_BOOKMARK_STATUS_OFFER_IN_RELATED_OFFERS: `CHANGE_BOOKMARK_STATUS_OFFER_IN_RELATED_OFFERS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
};

export const setOverOfferId = (offerId) => ({
  type: ActionType.SET_OVER_OFFER_ID,
  payload: offerId,
});

export const setSortingTypeAction = (sortingType) => ({
  type: ActionType.SET_SORTING_TYPE,
  payload: sortingType,
});

export const changeCityAction = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const loadAuthInfo = (authInfo) => ({
  type: ActionType.LOAD_AUTH_INFO,
  payload: authInfo,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const loadBookmarkOffers = (offers) => ({
  type: ActionType.LOAD_BOOKMARK_OFFERS,
  payload: offers,
});

export const loadBookmarkOffer = (offer) => ({
  type: ActionType.LOAD_BOOKMARK_OFFER,
  payload: offer,
});

export const loadRelatedOffer = (offers) => ({
  type: ActionType.LOAD_RELATED_OFFERS,
  payload: offers,
});

export const changeBookmarkStatusOfferInOffers = (offer) => ({
  type: ActionType.CHANGE_BOOKMARK_STATUS_OFFER_IN_OFFERS,
  payload: offer,
});

export const changeBookmarkStatusOfferInRelatedOffers = (offer) => ({
  type: ActionType.CHANGE_BOOKMARK_STATUS_OFFER_IN_RELATED_OFFERS,
  payload: offer,
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});
