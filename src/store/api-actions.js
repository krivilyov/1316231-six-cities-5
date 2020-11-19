import {loadOffers, setCityOffers, requireAuthorization, loadAuthInfo, redirectToRoute} from "./action";
import {getParsedOffers, getCityOffers, getParsedAuthInfo} from "../core";
import {APIRoute, AuthorizationStatus, ResponseType, AppRoute, HttpCode} from "../const";

export const fetchOffers = () => (dispatch, getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      const offers = getParsedOffers(data);
      dispatch(loadOffers(offers));
      let currentState = getState();
      dispatch(setCityOffers(getCityOffers(currentState.COMMON.offers, currentState.COMMON.activeCity)));
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
