import React from "react";
import renderer from "react-test-renderer";
import {PropertyReview} from "./property-review";
import {mockReviews} from "../../mocks/mock-data";

it(`Should PropertyReview render correctly`, () => {
  const tree = renderer.create(
      <PropertyReview review={mockReviews[0]}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
