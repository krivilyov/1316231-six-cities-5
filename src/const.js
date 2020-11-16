export const OfferTypes = {
  APARTMENT: `Apartment`,
  ROOM: `Room`,
  HOUSE: `House`,
  HOTEL: `Hotel`
};

export const OfferCardTypes = {
  INDEX: `index`,
  RELATED: `related`,
  FAVORITE: `favorite`,
};

export const RadioValues = [`5`, `4`, `3`, `2`, `1`];

export const Cities = [
  `Amsterdam`,
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Hamburg`,
  `Dusseldorf`
];

export const CityName = {
  PARIS: `Paris`,
  COLOGNE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`,
};

export const CityCoordinates = {
  AMSTERDAM: [52.38333, 4.9],
  PARIS: [48.866667, 2.333333],
  COLOGNE: [50.933333, 6.95],
  BRUSSELS: [50.833333, 4.333333],
  HAMBURG: [53.575323, 10.01534],
  DUSSELDORF: [51.228304, 6.793849],
};

export const Sorting = {
  POPULAR: `popular`,
  PRICE_TO_HIGH: `to-high`,
  PRICE_TO_LOW: `to-low`,
  TOP_RATED: `top-rated`,
};

export const SortingTitles = {
  [Sorting.POPULAR]: `Popular`,
  [Sorting.PRICE_TO_HIGH]: `Price: low to high`,
  [Sorting.PRICE_TO_LOW]: `Price: high to low`,
  [Sorting.TOP_RATED]: `Top rated first`,
};

export const SortingTypes = [
  Sorting.POPULAR,
  Sorting.PRICE_TO_HIGH,
  Sorting.PRICE_TO_LOW,
  Sorting.TOP_RATED,
];
