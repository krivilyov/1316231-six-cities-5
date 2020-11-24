import React from "react";
import renderer from "react-test-renderer";
import OfferBookmarkContent from "./offer-bookmark-content";

const bookmarkProperty = {
  bemBlock: `property`,
  width: `31`,
  height: `33`,
};

describe(`OfferBookmarkContent should render correctly`, () => {
  it(`OfferBookmarkContent should render correctly when offerBookmarkStatus={true}`, () => {
    const tree = renderer
      .create(
          <OfferBookmarkContent
            offerBookmarkStatus={true}
            offerBookmarkTypeProperty={bookmarkProperty}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`OfferBookmarkContent should render correctly when offerBookmarkStatus={false}`, () => {
    const tree = renderer
      .create(
          <OfferBookmarkContent
            offerBookmarkStatus={false}
            offerBookmarkTypeProperty={bookmarkProperty}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
