import {common} from "./common";
import {ActionType} from "../../action";
import {CityName, Sorting} from "../../../const";

it(`Reducer common without additional parameters should return initial state`, () => {
  expect(common(void 0, {})).toEqual({
    activeCity: CityName.AMSTERDAM,
    offers: [],
    reviews: [],
    sortingType: Sorting.POPULAR,
    overOfferId: ``,
    changedBookmarkOffer: {},
    relatedOffers: [],
    bookmarkOffers: [],
  });
});

it(`Reducer common should update activeCity`, () => {
  expect(common({
    activeCity: CityName.AMSTERDAM,
  }, {
    type: ActionType.CHANGE_CITY,
    payload: CityName.PARIS
  })).toEqual({
    activeCity: CityName.PARIS
  });
});

it(`Reducer common should update sortingType`, () => {
  expect(common({
    sortingType: Sorting.POPULAR,
  }, {
    type: ActionType.SET_SORTING_TYPE,
    payload: Sorting.PRICE_TO_HIGH
  })).toEqual({
    sortingType: Sorting.PRICE_TO_HIGH
  });
});

it(`Reducer common should update overOfferId`, () => {
  expect(common({
    overOfferId: ``,
  }, {
    type: ActionType.SET_OVER_OFFER_ID,
    payload: `2`
  })).toEqual({
    overOfferId: `2`
  });
});

it(`Reducer common should update overOfferId`, () => {
  expect(common({
    offers: [],
  }, {
    type: ActionType.LOAD_OFFERS,
    payload: [
      {
        id: `1`,
      },
      {
        id: `2`,
      },
    ]
  })).toEqual({
    offers: [
      {
        id: `1`,
      },
      {
        id: `2`,
      },
    ]
  });
  expect(common({
    offers: [
      {
        id: `1`,
      },
      {
        id: `2`,
      },
      {
        id: `4`,
      },
    ],
  }, {
    type: ActionType.LOAD_OFFERS,
    payload: [
      {
        id: `1`,
      },
      {
        id: `2`,
      },
    ]
  })).toEqual({
    offers: [
      {
        id: `1`,
      },
      {
        id: `2`,
      },
    ]
  });
});

it(`Reducer common should update changedBookmarkOffer`, () => {
  expect(common({
    changedBookmarkOffer: {},
  }, {
    type: ActionType.LOAD_BOOKMARK_OFFER,
    payload: {
      id: `1`,
    },
  })).toEqual({
    changedBookmarkOffer: {
      id: `1`,
    }
  });

  expect(common({
    changedBookmarkOffer: {
      id: `3`,
    },
  }, {
    type: ActionType.LOAD_BOOKMARK_OFFER,
    payload: {
      id: `1`,
    },
  })).toEqual({
    changedBookmarkOffer: {
      id: `1`,
    }
  });
});

it(`Reducer common should update relatedOffers`, () => {
  expect(common({
    relatedOffers: [],
  }, {
    type: ActionType.LOAD_RELATED_OFFERS,
    payload: [
      {
        id: `1`,
      },
      {
        id: `2`,
      },
    ]
  })).toEqual({
    relatedOffers: [
      {
        id: `1`,
      },
      {
        id: `2`,
      },
    ]
  });
  expect(common({
    relatedOffers: [
      {
        id: `1`,
      },
      {
        id: `2`,
      },
      {
        id: `4`,
      },
    ],
  }, {
    type: ActionType.LOAD_RELATED_OFFERS,
    payload: [
      {
        id: `1`,
      },
      {
        id: `2`,
      },
    ]
  })).toEqual({
    relatedOffers: [
      {
        id: `1`,
      },
      {
        id: `2`,
      },
    ]
  });
});

it(`Reducer common should update offers and changedBookmarkOffer`, () => {
  expect(common({
    offers: [
      {
        id: `1`,
        isBookmark: false,
      },
      {
        id: `2`,
        isBookmark: false,
      },
      {
        id: `3`,
        isBookmark: false,
      },
    ],
    changedBookmarkOffer: {},
  }, {
    type: ActionType.CHANGE_BOOKMARK_STATUS_OFFER_IN_OFFERS,
    payload: {
      id: `2`,
      isBookmark: true,
    },

  })).toEqual({
    offers: [
      {
        id: `1`,
        isBookmark: false,
      },
      {
        id: `2`,
        isBookmark: true,
      },
      {
        id: `3`,
        isBookmark: false,
      },
    ],
    changedBookmarkOffer: {
      id: `2`,
      isBookmark: true,
    }
  });
  expect(common({
    offers: [
      {
        id: `1`,
        isBookmark: false,
      },
      {
        id: `2`,
        isBookmark: false,
      },
      {
        id: `3`,
        isBookmark: false,
      },
    ],
    changedBookmarkOffer: {
      id: `3`,
      isBookmark: false,
    },
  }, {
    type: ActionType.CHANGE_BOOKMARK_STATUS_OFFER_IN_OFFERS,
    payload: {
      id: `2`,
      isBookmark: true,
    },

  })).toEqual({
    offers: [
      {
        id: `1`,
        isBookmark: false,
      },
      {
        id: `2`,
        isBookmark: true,
      },
      {
        id: `3`,
        isBookmark: false,
      },
    ],
    changedBookmarkOffer: {
      id: `2`,
      isBookmark: true,
    }
  });
});

it(`Reducer common should update relatedOffers and changedBookmarkOffer`, () => {
  expect(common({
    relatedOffers: [
      {
        id: `1`,
        isBookmark: false,
      },
      {
        id: `2`,
        isBookmark: false,
      },
      {
        id: `3`,
        isBookmark: false,
      },
    ],
    changedBookmarkOffer: {},
  }, {
    type: ActionType.CHANGE_BOOKMARK_STATUS_OFFER_IN_RELATED_OFFERS,
    payload: {
      id: `2`,
      isBookmark: true,
    },
  })).toEqual({
    relatedOffers: [
      {
        id: `1`,
        isBookmark: false,
      },
      {
        id: `2`,
        isBookmark: true,
      },
      {
        id: `3`,
        isBookmark: false,
      },
    ],
    changedBookmarkOffer: {
      id: `2`,
      isBookmark: true,
    }
  });

  expect(common({
    relatedOffers: [
      {
        id: `1`,
        isBookmark: false,
      },
      {
        id: `2`,
        isBookmark: false,
      },
      {
        id: `3`,
        isBookmark: false,
      },
    ],
    changedBookmarkOffer: {
      id: `3`,
      isBookmark: false,
    },
  }, {
    type: ActionType.CHANGE_BOOKMARK_STATUS_OFFER_IN_RELATED_OFFERS,
    payload: {
      id: `2`,
      isBookmark: true,
    },

  })).toEqual({
    relatedOffers: [
      {
        id: `1`,
        isBookmark: false,
      },
      {
        id: `2`,
        isBookmark: true,
      },
      {
        id: `3`,
        isBookmark: false,
      },
    ],
    changedBookmarkOffer: {
      id: `2`,
      isBookmark: true,
    }
  });
});

it(`Reducer common should update bookmarkOffers`, () => {
  expect(common({
    bookmarkOffers: [],
  }, {
    type: ActionType.LOAD_BOOKMARK_OFFERS,
    payload: [{id: `1`}, {id: `2`}, {id: `3`}]
  })).toEqual({
    bookmarkOffers: [{id: `1`}, {id: `2`}, {id: `3`}]
  });

  expect(common({
    bookmarkOffers: [{id: `1`}, {id: `2`}],
  }, {
    type: ActionType.LOAD_BOOKMARK_OFFERS,
    payload: [{id: `1`}, {id: `2`}, {id: `3`}]
  })).toEqual({
    bookmarkOffers: [{id: `1`}, {id: `2`}, {id: `3`}]
  });
});

it(`Reducer common should update reviews`, () => {
  expect(common({
    reviews: [],
  }, {
    type: ActionType.LOAD_REVIEWS,
    payload: [{id: `1`}, {id: `2`}, {id: `3`}]
  })).toEqual({
    reviews: [{id: `1`}, {id: `2`}, {id: `3`}]
  });

  expect(common({
    reviews: [{id: `1`}, {id: `2`}],
  }, {
    type: ActionType.LOAD_REVIEWS,
    payload: [{id: `1`}, {id: `2`}, {id: `3`}]
  })).toEqual({
    reviews: [{id: `1`}, {id: `2`}, {id: `3`}]
  });
});
