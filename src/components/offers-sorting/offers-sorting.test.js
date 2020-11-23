import React from "react";
import renderer from "react-test-renderer";
import {OffersSorting} from "./offers-sorting";

const noop = () => {};
describe(`OffersSorting should render correctly`, () => {
  it(`OffersSortingItem should render correctly when the type is current`, () => {
    const tree = renderer
      .create(
          <OffersSorting
            toggle={false}
            onOptionClick={noop}
            onToggleClick={noop}
            sortingType={`type1`}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
