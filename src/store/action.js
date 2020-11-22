export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SET_SORTING_TYPE: `SET_SORTING_TYPE`,
  MOUSE_OVER: `MOUSE_OVER`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  SET_CITY_OFFERS: `SET_CITY_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_AUTH_INFO: `LOAD_AUTH_INFO`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_BOOKMARK_OFFERS: `LOAD_BOOKMARK_OFFERS`,
  LOAD_BOOKMARK_OFFER: `LOAD_BOOKMARK_OFFER`,
  LOAD_RELATED_OFFERS: `LOAD_RELATED_OFFERS`,
  CHANGE_BOOKMARK_STATUS_OFFER_IN_OFFERS: `CHANGE_BOOKMARK_STATUS_OFFER_IN_OFFERS`,
  CHANGE_BOOKMARK_STATUS_OFFER_IN_RELATED_OFFERS: `CHANGE_BOOKMARK_STATUS_OFFER_IN_RELATED_OFFERS`,
};

export const setOverOfferId = (offer) => ({
  type: ActionType.MOUSE_OVER,
  payload: offer,
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

export const setCityOffers = () => ({
  type: ActionType.SET_CITY_OFFERS,
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
