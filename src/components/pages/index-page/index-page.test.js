import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {IndexPage} from "./index-page";
import {AuthorizationStatus} from "../../../const";
import {testInitialState} from "../../../test-data";

const mockStore = configureMockStore();
const store = mockStore(testInitialState);

const noop = () => {};

it(`Main should render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <IndexPage
              changeCity={noop}
              onOptionClick={noop}
              offers={[]}
              activeCity={`City1`}
              userEMail={`user@mail.com`}
              userAvatar={`avatar-url`}
              authorizationStatus={AuthorizationStatus.AUTH}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
