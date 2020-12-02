import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {reviewPropTypes} from "../../prop-types/review";
import {
  selectHotelReviews,
  selectIsAuthStatus
} from "../../selectors/selectors";
import {fetchReviews, postReview} from "../../middleware/thunk-api";

import {PropertyReview} from "../property-review/property-review";
import {PropertyReviewsForm} from "../property-reviews-form/property-reviews-form";

export const PropertyReviewsComponent = (props) => {
  const {reviews, id, isAuth, fetchReviewsById, postUserReview} = props;

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

      {
        isAuth && <PropertyReviewsForm id={id} postUserReview={postUserReview}/>
      }
    </section>
  );
};

PropertyReviewsComponent.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropTypes.isRequired).isRequired,
  id: PropTypes.number.isRequired,
  isAuth: PropTypes.bool.isRequired,
  fetchReviewsById: PropTypes.func.isRequired,
  postUserReview: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  reviews: selectHotelReviews(state),
  isAuth: selectIsAuthStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchReviewsById(id) {
    dispatch(fetchReviews(id));
  },
  postUserReview(review, id) {
    dispatch(postReview(review, id));
  }
});

export const PropertyReviews = connect(mapStateToProps, mapDispatchToProps)(PropertyReviewsComponent);
