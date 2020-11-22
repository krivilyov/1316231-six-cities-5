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

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const APIRoute = {
  OFFERS: `/hotels`,
  LOGIN: `/login`,
  FAVORITE: `/favorite`,
  REVIEWS: `/comments`,
};

export const AppRoute = {
  INDEX: `/`,
  OFFER: `/offer`,
  FAVORITES: `/favorites`,
  LOGIN: `/login`,
};

export const ResponseType = {
  SUCCESS: `SUCCESS`,
  ERROR: `ERROR`,
};

export const HttpCode = {
  UNAUTHORIZED: 401
};

export const offerBookmarkTypeProperty = {
  card: {
    bemBlock: `place-card`,
    width: `18`,
    height: `19`,
  },
  page: {
    bemBlock: `property`,
    width: `31`,
    height: `33`,
  },
};
