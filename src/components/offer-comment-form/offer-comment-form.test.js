import React from "react";
import renderer from "react-test-renderer";
import {OfferCommentForm} from "./offer-comment-form";

const noop = () => {};
describe(`CommentForm should render correctly`, () => {
  it(`CommentForm should render correctly when isDisabledSubmitButton={false}`, () => {
    const tree = renderer
      .create(<OfferCommentForm
        rating={`4`}
        review={`review text`}
        isDisabledSubmitButton={false}
        offerId={`1`}
        onFieldChange={noop}
        onClearFormField={noop}
        onSetResponseFormStatus={noop}
        uploadReviewAction={noop}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`CommentForm should render correctly when isDisabledSubmitButton={true}`, () => {
    const tree = renderer
      .create(<OfferCommentForm
        rating={`4`}
        review={`review text`}
        isDisabledSubmitButton={true}
        offerId={`1`}
        onFieldChange={noop}
        onClearFormField={noop}
        onSetResponseFormStatus={noop}
        uploadReviewAction={noop}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
