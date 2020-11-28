import React from "react";
import renderer from "react-test-renderer";
import {PrivateRoute} from "./private-route";
import {AuthorizationStatus} from "../../const";
import configureMockStore from "redux-mock-store";
import {testInitialState} from "../../test-data";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

const mockStore = configureMockStore();
const store = mockStore(testInitialState);

const noop = () => {};
it(`PrivateRoute should render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.AUTH}
              exact={true}
              path={`/login`}
              render={noop}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
