import React from "react";
import renderer from "react-test-renderer";
import {PropertyReviewsForm} from "./property-reviews-form";

const noop = () => {};

it(`Should PropertyReviewsForm render correctly`, () => {
  const tree = renderer.create(
      <PropertyReviewsForm
        postUserReview={noop}
        id={1}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
