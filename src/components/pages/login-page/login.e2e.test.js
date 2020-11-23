import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {LoginPage} from "./login-page";

configure({adapter: new Adapter()});

it(`click on Login correctly`, () => {
  const onSubmit = jest.fn();
  const wrapper = shallow(
      <LoginPage
        onSubmit={onSubmit}
      />
  );

  wrapper.find(`.login__form`).simulate(`click`, {preventDefault() {}});
  expect(onSubmit).toHaveBeenCalledTimes(0);
});
