import React from "react";
import renderer from "react-test-renderer";
import IndexEmptyPage from "./index-empty-page";

it(`MainEmpty should render correctly`, () => {
  const tree = renderer
    .create(
        <IndexEmptyPage />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
