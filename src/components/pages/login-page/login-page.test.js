import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {LoginPage} from "./login-page";
import {testInitialState} from "../../../test-data";

const noop = () => {};
const mockStore = configureMockStore();
const store = mockStore(testInitialState);

it(`Login should render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <LoginPage
              onSubmit={noop}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
