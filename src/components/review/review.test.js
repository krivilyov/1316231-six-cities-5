import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import Review from "./review";
import configureMockStore from "redux-mock-store";
import {testInitialState} from "../../test-data";

const mockStore = configureMockStore();
const store = mockStore(testInitialState);

const review = {
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
};

it(`Review should render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <Review
              review={review}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
