import React from "react";
import renderer from "react-test-renderer";
import {UserLinkContent} from "./user-link-content";

describe(`UserLinkContent should render correctly`, () => {
  it(`UserLinkContent should render correctly when isAuthorizedStatus={false}`, () => {
    const tree = renderer
      .create(
          <UserLinkContent
            userEMail={``}
            userAvatar={``}
            isAuthorizedStatus={false}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`UserLinkContent should render correctly when isAuthorizedStatus={true}`, () => {
    const tree = renderer
      .create(
          <UserLinkContent
            userEMail={`user@mail.com`}
            userAvatar={`avatar-url`}
            isAuthorizedStatus={true}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
