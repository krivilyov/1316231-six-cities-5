import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs";
import {MemoryRouter} from "react-router-dom";

const noop = () => {};

describe(`Tabs should render correctly`, () => {
  it(`Tabs should render correctly when the type is current`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <Tabs
              activeCity={`type1`}
              onTabClick={noop}
            />
          </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
