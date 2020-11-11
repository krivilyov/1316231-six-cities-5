import {Sorting} from "../const";

export const getOffers = (state) => {
  return state.offers.filter((offer) => offer.city === state.activeCity);
};

export const getCurrentSort = (state) => {
  return state.sortingType;
};

export const getSortedOffers = (state) => {

  const sortedOffers = [...getOffers(state)];

  switch (getCurrentSort(state)) {
    case Sorting.PRICE_TO_HIGH:
      return sortedOffers.sort((a, b) => {
        return a.price - b.price;
      });
    case Sorting.PRICE_TO_LOW:
      return sortedOffers.sort((a, b) => {
        return b.price - a.price;
      });
    case Sorting.POPULAR:
      return sortedOffers;
    case Sorting.TOP_RATED:
      return sortedOffers.sort((a, b) => {
        return (
          +b.rating - +a.rating
        );
      });

    default:
      return sortedOffers;
  }
};
