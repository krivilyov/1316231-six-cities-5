import React from "react";
import renderer from "react-test-renderer";
import FavoritesEmptyPage from "./favorites-empty-page";

it(`FavoritesEmpty should render correctly`, () => {
  const tree = renderer
    .create(
        <FavoritesEmptyPage />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
