import React from "react";
import renderer from "react-test-renderer";
import {OfferBookmark} from "./offer-bookmark";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import {testInitialState} from "../../test-data";

const mockStore = configureMockStore();
const store = mockStore(testInitialState);

const noop = () => {};
describe(`OfferBookmark should render correctly`, () => {
  it(`OfferBookmark should render correctly when isAuthorizedStatus={false} and offerBookmarkStatus={false}`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <OfferBookmark
                offerId={`1`}
                isAuthorizedStatus={false}
                offerBookmarkStatus={false}
                onChangeBookmark={noop}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`OfferBookmark should render correctly when isAuthorizedStatus={true} and offerBookmarkStatus={true}`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <OfferBookmark
                offerId={`1`}
                isAuthorizedStatus={true}
                offerBookmarkStatus={true}
                onChangeBookmark={noop}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`OfferBookmark should render correctly when isAuthorizedStatus={false} and offerBookmarkStatus={true}`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <OfferBookmark
                offerId={`1`}
                isAuthorizedStatus={false}
                offerBookmarkStatus={true}
                onChangeBookmark={noop}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`OfferBookmark should render correctly when isAuthorizedStatus={true} and offerBookmarkStatus={false}`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <OfferBookmark
                offerId={`1`}
                isAuthorizedStatus={true}
                offerBookmarkStatus={false}
                onChangeBookmark={noop}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
