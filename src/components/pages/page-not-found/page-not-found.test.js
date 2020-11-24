import React from "react";
import renderer from "react-test-renderer";
import PageNotFound from "./page-not-found";

it(`PageNotFound should render correctly`, () => {
  const tree = renderer
    .create(
        <PageNotFound />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
