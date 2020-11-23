import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {reviewPropTypes} from "../../prop-types/review";
import {RatingTitle, Settings, Title} from "../../const";
import {selectHotelReviews} from "../../selectors/offers";

import {PropertyReview} from "../property-review/property-review";
import {fetchReviews} from "../../middleware/thunk-api";

export const PropertyReviewsComponent = ({reviews, id, fetchReviewsById}) => {
  const formRef = React.createRef();

  useEffect(() => {
    fetchReviewsById(id);
  }, [id]);

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
          reviews.map((review) => (
            <PropertyReview key={`${review.id}`} review={review}/>
          ))
        }
      </ul>

      <form
        ref={formRef}
        className="reviews__form form"
        action="#"
        method="post"
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">

          {Object.entries(RatingTitle).map(([title, number]) => {
            return (
              <React.Fragment key={`${number}-${title}`}>
                <input
                  className="form__rating-input visually-hidden"
                  name="rating"
                  value={number}
                  id={`${number}-stars`}
                  type="radio"
                />
                <label
                  htmlFor={`${number}-stars`}
                  className="reviews__rating-label form__rating-label"
                  title={Title[title]}
                >
                  <svg className="form__star-image"
                    width="37"
                    height="33"
                  >
                    <use xlinkHref="#icon-star"/>
                  </svg>
                </label>
              </React.Fragment>
            );
          })}
        </div>
        <textarea
          className="reviews__textarea form__textarea" id="review" name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          minLength={Settings.REVIEW_TEXT_MIN_LENGTH}
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and
            describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={false}>Submit</button>
        </div>
      </form>

    </section>
  );
};

PropertyReviewsComponent.propTypes = {
  id: PropTypes.string.isRequired,
  fetchReviewsById: PropTypes.func.isRequired,
  reviews: PropTypes.arrayOf(reviewPropTypes.isRequired).isRequired
};

const mapStateToProps = (state) => ({
  reviews: selectHotelReviews(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchReviewsById(id) {
    dispatch(fetchReviews(id));
  }
});

export const PropertyReviews = connect(mapStateToProps, mapDispatchToProps)(PropertyReviewsComponent);
