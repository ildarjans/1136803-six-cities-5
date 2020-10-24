import React from "react";
import PropTypes from "prop-types";
import {PropertyReviewsForm} from "../property-reviews-form/property-reviews-form";
import {PropertyReview} from "../property-review/property-review";
import {reviewPropTypes} from "../../prop-validation/review-prop-types";

export const PropertyReviews = ({reviews}) => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">
          {reviews.length}
        </span>
      </h2>
      <ul className="reviews__list">
        {
          reviews.map((review, i) => (
            <PropertyReview key={`${review.date}-${i}`} review={review}/>
          ))
        }
      </ul>

      <PropertyReviewsForm/>

    </section>
  );
};

PropertyReviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropTypes.isRequired).isRequired
};
