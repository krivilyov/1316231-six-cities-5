import React from "react";
import renderer from "react-test-renderer";
import {UserLink} from "./user-link";
import configureMockStore from "redux-mock-store";
import {testInitialState} from "../../test-data";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

const mockStore = configureMockStore();
const store = mockStore(testInitialState);

describe(`UserLink should render correctly`, () => {
  it(`UserLink should render correctly when route not /login and isAuthorizedStatus={false}`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <UserLink
                appRoute={`/`}
                isAuthorizedStatus={false}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`UserLink should render correctly when route not /favorites and isAuthorizedStatus={true}`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <UserLink
                appRoute={`/`}
                isAuthorizedStatus={true}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
