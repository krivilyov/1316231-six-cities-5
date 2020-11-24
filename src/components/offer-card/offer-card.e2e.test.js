
import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {OfferCard} from "./offer-card";
import {formatUpperCaseFirst} from "../../utils";

configure({adapter: new Adapter()});

const mockOffer = {
  id: `7`,
  img: [`url1`, `url2`, `url3`, `url4`, `url5`, `url6`],
  smallImg: `small-url`,
  title: `title`,
  description: [`description`],
  isPremium: false,
  type: formatUpperCaseFirst(`type1`),
  rating: 4.8,
  bedroom: 3,
  visitor: 4,
  price: 256,
  option: [`option1`, `option2`, `option3`, `option4`],
  isBookmark: false,
  city: `city1`,
  cityCoordinates: [48.85661, 2.351499],
  cityZoom: 13,
  host: `hostName`,
  hostTop: false,
  avatar: `avatar_url`,
  coordinates: [48.877610000000004, 2.333499],
};

it(`click on OfferCard correctly`, () => {
  const onChangeOfferId = jest.fn();
  const onChangeBookmark = jest.fn();
  const wrapper = shallow(
      <OfferCard
        offer={mockOffer}
        currentCardType={`type1`}
        overOfferId={`1`}
        onChangeOfferId={onChangeOfferId}
      />
  );

  wrapper.find(`.place-card__img-link`).simulate(`click`);
  expect(onChangeBookmark).toHaveBeenCalledTimes(0);
});
