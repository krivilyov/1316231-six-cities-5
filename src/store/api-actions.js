import {
  loadOffers,
  requireAuthorization,
  loadAuthInfo,
  redirectToRoute,
  loadBookmarkOffer,
  loadBookmarkOffers,
  loadRelatedOffer,
  changeBookmarkStatusOfferInOffers,
  changeBookmarkStatusOfferInRelatedOffers,
} from "./action";
import {getParsedOffer, getParsedAuthInfo, getParsedArray} from "../core";
import {APIRoute, AuthorizationStatus, ResponseType, AppRoute, HttpCode} from "../const";

export const fetchOffers = () => (dispatch, getState, api) => (
  api.get(APIRoute.OFFERS)
    .then((response) => {
      const offers = getParsedArray(response.data, getParsedOffer);
      dispatch(loadOffers(offers));
      return ResponseType.SUCCESS;
    })
    .catch((err) => {
      return err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then((response) => {
      if (response.status !== HttpCode.UNAUTHORIZED) {
        const authInfo = getParsedAuthInfo(response.data);
        dispatch(requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(loadAuthInfo(authInfo));
        return ResponseType.SUCCESS;
      } else {
        return response;
      }
    })
    .then(() => dispatch(redirectToRoute(AppRoute.INDEX)))
    .catch((err) => {
      return err;
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((response) => {
      if (response.status !== HttpCode.UNAUTHORIZED) {
        const authInfo = getParsedAuthInfo(response.data);
        dispatch(requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(loadAuthInfo(authInfo));
        return ResponseType.SUCCESS;
      } else {
        return response;
      }
    })
    .catch((err) => {
      return err;
    })
);

export const fetchIdOffer = (offerId) => (dispatch, getState, api) => (
  api.get(`${APIRoute.OFFERS}/${offerId}`)
    .then(({data}) => {
      const offer = getParsedOffer(data);
      dispatch(loadBookmarkOffer(offer));
      return ResponseType.SUCCESS;
    })
    .catch((err) => {
      return err;
    })
);

export const fetchBookmarkOffers = () => (dispatch, getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then((response) => {
      if (response.status !== HttpCode.UNAUTHORIZED) {
        const bookmarkOffers = getParsedArray(response.data, getParsedOffer);
        dispatch(loadBookmarkOffers(bookmarkOffers));
        return ResponseType.SUCCESS;
      } else {
        return response;
      }
    })
    .catch((err) => {
      return err;
    })
);

export const fetchRelatedOffers = (offerId) => (dispatch, getState, api) => (
  api.get(`${APIRoute.OFFERS}/${offerId}/nearby`)
    .then(({data}) => {
      const offers = getParsedArray(data, getParsedOffer);
      dispatch(loadRelatedOffer(offers));
      return ResponseType.SUCCESS;
    })
    .catch((err) => {
      return err;
    })
);

export const updateOfferBookmarkStatus = (offerId, bookmarkStatus) => (dispatch, getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${offerId}/${bookmarkStatus ? 1 : 0}`)
    .then(({data}) => {
      const offer = getParsedOffer(data);
      dispatch(changeBookmarkStatusOfferInOffers(offer));
      dispatch(changeBookmarkStatusOfferInRelatedOffers(offer));
      return ResponseType.SUCCESS;
    })
    .catch((err) => {
      return err;
    })
);

