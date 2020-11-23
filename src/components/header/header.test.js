import React from "react";
import renderer from "react-test-renderer";
import Header from "./header";
import {AppRoute} from "../../const";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import {testInitialState} from "../../test-data";
import {MemoryRouter} from "react-router-dom";

const mockStore = configureMockStore();
const store = mockStore(testInitialState);

describe(`Header should render correctly`, () => {
  it(`Header should render correctly if the page is Main`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <Header
                appRoute={AppRoute.INDEX}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Header should render correctly if the page is not Main`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <Header
                appRoute={AppRoute.LOGIN}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
