import {loadOffers, setCityOffers} from "./action";
import {getParsedOffers, getCityOffers} from "../core";

export const fetchOffers = () => (dispatch, getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      const offers = getParsedOffers(data);
      dispatch(loadOffers(offers));
      let currentState = getState();
      dispatch(setCityOffers(getCityOffers(currentState.offers, currentState.activeCity)));
    })
);
