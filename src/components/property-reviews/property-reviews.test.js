import React from "react";
import renderer from "react-test-renderer";
import {PropertyReviews} from "./property-reviews";
import {mockReviews} from "../../mocks/mock-data";

const noop = () => {};

describe(`Should PropertyReviews render correctly`, () => {
  it(`(1) then user is auth`, () => {
    const tree = renderer.create(
        <PropertyReviews
          fetchReviewsById={noop}
          postUserReview={noop}
          reviews={mockReviews}
          id={1}
          isAuth={true}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`(2) then user is not auth`, () => {
    const tree = renderer.create(
        <PropertyReviews
          fetchReviewsById={noop}
          postUserReview={noop}
          reviews={mockReviews}
          id={1}
          isAuth={false}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`(3) then user is auth and no reviews`, () => {
    const tree = renderer.create(
        <PropertyReviews
          fetchReviewsById={noop}
          postUserReview={noop}
          reviews={[]}
          id={1}
          isAuth={true}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`(4) then user is no auth and no reviews`, () => {
    const tree = renderer.create(
        <PropertyReviews
          fetchReviewsById={noop}
          postUserReview={noop}
          reviews={[]}
          id={1}
          isAuth={false}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
