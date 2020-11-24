
import React from "react";
import renderer from "react-test-renderer";
import {OfferCardBookmark} from "./offer-card-bookmark";
import configureMockStore from "redux-mock-store";
import {testInitialState} from "../../test-data";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

const mockStore = configureMockStore();
const store = mockStore(testInitialState);

describe(`OfferCardBookmark should render correctly`, () => {
  it(`OfferCardBookmark should render correctly when  isAuthorizedStatus={false} and offerBookmarkStatus={false}`, function () {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <OfferCardBookmark
                offerId={`1`}
                isAuthorizedStatus={false}
                offerBookmarkStatus={false}
                onChangeBookmark={() => {}}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`OfferCardBookmark should render correctly when isAuthorizedStatus={true} and offerBookmarkStatus={true}`, function () {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <OfferCardBookmark
                offerId={`1`}
                isAuthorizedStatus={true}
                offerBookmarkStatus={true}
                onChangeBookmark={() => {}}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`OfferCardBookmark should render correctly when isAuthorizedStatus={false} and offerBookmarkStatus={true}`, function () {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <OfferCardBookmark
                offerId={`1`}
                isAuthorizedStatus={false}
                offerBookmarkStatus={true}
                onChangeBookmark={() => {}}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`OfferCardBookmark should render correctly when  isAuthorizedStatus={true} and offerBookmarkStatus={false}`, function () {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <OfferCardBookmark
                offerId={`1`}
                isAuthorizedStatus={true}
                offerBookmarkStatus={false}
                onChangeBookmark={() => {}}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
