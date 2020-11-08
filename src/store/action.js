export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SET_SORTING_TYPE: `SET_SORTING_TYPE`,
  MOUSE_OVER: `MOUSE_OVER`,
};

export const ActionCreator = {
  onMouseOverOffer: (offer) => ({
    type: ActionType.MOUSE_OVER,
    payload: offer
  }),
  setSortingTypeAction: (sortingType) => ({
    type: ActionType.SET_SORTING_TYPE,
    payload: sortingType,
  }),
  changeCityAction: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  })
};
