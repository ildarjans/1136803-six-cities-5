import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {mockReviews} from "../../mocks/mock-data";

import {PropertyReviewsComponent} from "./property-reviews";

configure({adapter: new Adapter()});

it(`Should PropertyReviewsComponent has expected behavior`, () => {
  const fetchReviewsById = jest.fn();
  const noop = () => {};
  mount(
      <PropertyReviewsComponent
        id={73}
        reviews={mockReviews}
        isAuth={true}
        fetchReviewsById={fetchReviewsById}
        postUserReview={noop}
      />
  );
  expect(fetchReviewsById).toHaveBeenCalledTimes(1);
});
