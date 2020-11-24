import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";
import {FavoritesPage} from "./favorites-page";
import {testInitialState} from "../../../test-data";

const mockStore = configureMockStore();
const store = mockStore(testInitialState);
const bookmarkOffersByCity = new Map();
bookmarkOffersByCity.set(`City1`, [
  {
    avatar: `avatar-url`,
    bedroom: 3,
    city: `City1`,
    cityCoordinates: [50.938361, 6.959974],
    cityZoom: 13,
    coordinates: [50.957361, 6.9509739999999995],
    description: [`description`],
    host: `host-name`,
    hostTop: true,
    id: `1`,
    img: [`img-url1`, `img-url2`, `img-url3`, `img-url4`, `img-url5`, `img-url6`, `img-url7`, `img-url8`],
    isBookmark: true,
    isPremium: false,
    option: [`option1`, `option2`, `option3`, `option4`, `option5`, `option6`, `option7`],
    price: 493,
    rating: 3.8,
    smallImg: `small-img-url`,
    title: `title`,
    type: `type`,
    visitor: 4,
  },
  {
    avatar: `avatar-url`,
    bedroom: 3,
    city: `City1`,
    cityCoordinates: [50.938361, 6.959974],
    cityZoom: 13,
    coordinates: [50.957361, 6.9509739999999995],
    description: [`description`],
    host: `host-name`,
    hostTop: true,
    id: `4`,
    img: [`img-url1`, `img-url2`, `img-url3`, `img-url4`, `img-url5`, `img-url6`, `img-url7`, `img-url8`],
    isBookmark: true,
    isPremium: false,
    option: [`option1`, `option2`, `option3`, `option4`, `option5`, `option6`, `option7`],
    price: 123,
    rating: 3.8,
    smallImg: `small-img-url`,
    title: `title`,
    type: `type`,
    visitor: 4,
  },
]);

bookmarkOffersByCity.set(`City3`, [
  {
    avatar: `avatar-url`,
    bedroom: 3,
    city: `City3`,
    cityCoordinates: [50.938361, 6.959974],
    cityZoom: 13,
    coordinates: [50.957361, 6.9509739999999995],
    description: [`description`],
    host: `host-name`,
    hostTop: true,
    id: `8`,
    img: [`img-url1`, `img-url2`, `img-url3`, `img-url4`, `img-url5`, `img-url6`, `img-url7`, `img-url8`],
    isBookmark: true,
    isPremium: false,
    option: [`option1`, `option2`, `option3`, `option4`, `option5`, `option6`, `option7`],
    price: 383,
    rating: 3.8,
    smallImg: `small-img-url`,
    title: `title`,
    type: `type`,
    visitor: 4,
  },
]);
const emptyBookmarkOffersByCity = new Map();

describe(`Favorites should render correctly`, () => {
  it(`Favorites should render correctly with fill bookmarkOffersByCity`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <FavoritesPage
                bookmarkOffersByCity={bookmarkOffersByCity}
              />)
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Favorites should render correctly with empty bookmarkOffersByCity`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <FavoritesPage
                bookmarkOffersByCity={emptyBookmarkOffersByCity}
              />)
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
