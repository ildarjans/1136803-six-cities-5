import React from "react";
import {reviewPropTypes} from "../../prop-validation/review-prop-types";
import {
  getReviewDateString,
  getReviewTimeDateString,
} from "../../utils";

export const PropertyReview = ({review: singleReview}) => {
  const {
    avatar,
    name,
    date,
    rating,
    review,
  } = singleReview;
  const ratingToSpanWidth = Math.round(100 / 5 * rating);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54"
            alt={`${name} avatar`}/>
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${ratingToSpanWidth}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review}</p>
        <time
          className="reviews__time"
          dateTime={getReviewTimeDateString(date)}
        >
          {getReviewDateString(date)}
        </time>
      </div>
    </li>
  );
};

PropertyReview.propTypes = {
  review: reviewPropTypes.isRequired
};
