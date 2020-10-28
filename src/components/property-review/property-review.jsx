import React from "react";

import {reviewPropTypes} from "../../prop-validation/review-prop-types";
import {
  getReviewDateString,
  getReviewTimeDateString,
  getRatingWidth
} from "../../utils";

export const PropertyReview = ({review}) => {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.avatar} width="54" height="54"
            alt={`${review.name} avatar`}/>
        </div>
        <span className="reviews__user-name">{review.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${getRatingWidth(review.rating)}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review.review}</p>
        <time
          className="reviews__time"
          dateTime={getReviewTimeDateString(review.date)}
        >
          {getReviewDateString(review.date)}
        </time>
      </div>
    </li>
  );
};

PropertyReview.propTypes = {
  review: reviewPropTypes.isRequired
};
