import React from "react";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";
import App from "./app";
import {testInitialState} from "../../test-data";
import {MemoryRouter} from "react-router-dom";

const mockStore = configureMockStore();
const store = mockStore(testInitialState);

describe(`App snapshot`, () => {
  it(`Should App render correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <App/>
            </MemoryRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
