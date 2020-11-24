import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {OfferPage} from "./offer-page";
import {testInitialState} from "../../../test-data";
import {formatUpperCaseFirst} from "../../../utils";

const mockStore = configureMockStore();
const store = mockStore(testInitialState);

const offer = {
  id: `7`,
  img: [`url1`, `url2`, `url3`, `url4`, `url5`, `url6`],
  smallImg: `small-url`,
  title: `title`,
  description: [`description`],
  isPremium: false,
  type: formatUpperCaseFirst(`type1`),
  rating: 4.8,
  bedroom: 3,
  visitor: 4,
  price: 256,
  option: [`option1`, `option2`, `option3`, `option4`],
  isBookmark: false,
  city: `City1`,
  cityCoordinates: [48.85661, 2.351499],
  cityZoom: 13,
  host: `hostName`,
  hostTop: false,
  avatar: `avatar_url`,
  coordinates: [48.877610000000004, 2.333499],
};

const reviews = [
  {
    comment: `comment`,
    date: `date`,
    id: 1,
    rate: 4,
    user: {
      avatarUrl: `avatar-url`,
      id: 1,
      isPro: true,
      name: `name`,
    }
  }
];

jest.mock(`leaflet`, () => ({
  icon: jest.fn(),
  map: jest.fn().mockReturnValue({
    setView: jest.fn(),
    remove: jest.fn()
  }),
  tileLayer: jest.fn().mockReturnValue({
    addTo: jest.fn()
  }),
  marker: jest.fn().mockReturnValue({
    addTo: jest.fn()
  }),
}));

const noop = () => {};

it(`Offer should render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <OfferPage
              offer={offer}
              offerBookmarkStatus={false}
              relatedOffers={[offer]}
              offerId={`1`}
              isAuthorizedStatus={true}
              reviews={reviews}
              loadOfferAction={noop}
              loadRelatedOffersAction={noop}
              loadReviewsAction={noop}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
