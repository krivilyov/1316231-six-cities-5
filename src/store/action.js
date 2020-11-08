export const ActionType = {
  GET_OFFERS: `GET_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
  SET_SORTING_TYPE: `SET_SORTING_TYPE`,
};

export const changeCityAction = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city
});

// export const getOffersAction = (offers, city) => ({
//   type: ActionType.GET_OFFERS,
//   payload: offers.filter((offer) => offer.city === city)
// });

export const setSortingTypeAction = (sortingType) => ({
  type: ActionType.SET_SORTING_TYPE,
  payload: sortingType,
});
