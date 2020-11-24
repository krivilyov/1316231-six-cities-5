import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {OfferBookmark} from "./offer-bookmark";

configure({adapter: new Adapter()});

it(`click on OfferBookmark correctly`, () => {
  const onChangeBookmark = jest.fn();
  const wrapper = shallow(
      <OfferBookmark
        offerId={`1`}
        isAuthorizedStatus={true}
        offerBookmarkStatus={false}
        onChangeBookmark={onChangeBookmark}
      />
  );

  wrapper.find(`.property__bookmark-button`).simulate(`click`, {preventDefault() {}});
  expect(onChangeBookmark).toHaveBeenCalledTimes(1);
});
