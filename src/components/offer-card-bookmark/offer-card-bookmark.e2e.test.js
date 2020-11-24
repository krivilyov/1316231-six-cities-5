import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {OfferCardBookmark} from "./offer-card-bookmark";

configure({adapter: new Adapter()});

it(`click on OfferCardBookmark correctly`, () => {
  const onChangeBookmark = jest.fn();
  const wrapper = shallow(
      <OfferCardBookmark
        offerId={`1`}
        offerBookmarkStatus={false}
        isAuthorizedStatus={true}
        onChangeBookmark={onChangeBookmark}
      />
  );

  wrapper.find(`.place-card__bookmark-button`).simulate(`click`, {preventDefault() {}});
  expect(onChangeBookmark).toHaveBeenCalledTimes(1);
});
