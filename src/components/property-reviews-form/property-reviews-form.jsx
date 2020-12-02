import React from "react";
import PropTypes from "prop-types";

import {RatingTitle, Settings, Title} from "../../const";

const COMMENT_ERROR = `Unexpected comment length`;
const RATING_ERROR = `Expected rating between 1 and 5`;

export class PropertyReviewsForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this._formRef = React.createRef();
    this._commentRef = React.createRef();
    this._ratingRefs = [];

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleRatingChange = this._handleRatingChange.bind(this);
    this._handleFormChange = this._handleFormChange.bind(this);
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    if (this._isFormValid()) {
      const reviewData = {
        comment: this._commentRef.current.value,
        rating: this._getRatingValue(),
      };

      this.props.postUserReview(reviewData, this.props.id);
      this._formRef.current.reset();
    }
  }
  _isValidInput(input, isValid, error) {
    if (isValid) {
      input.setCustomValidity(``);
    } else {
      input.setCustomValidity(error);
    }
    return isValid;
  }

  _getRatingValue() {
    const checkedStar = this._ratingRefs.find((ref) => ref.current.checked);
    return checkedStar ? Number(checkedStar.current.value) : undefined;
  }

  _handleRatingChange(evt) {
    this._ratingRefs.forEach((ref) => {
      ref.current.checked = ref.current === evt.target;
    });
  }

  _isRatingValid() {
    return this._isValidInput(
        this._ratingRefs[0].current,
        this._getRatingValue(),
        RATING_ERROR
    );
  }

  _isCommentValid() {
    const {value} = this._commentRef.current;
    return this._isValidInput(
        this._commentRef.current,
        (
          value.length >= Settings.REVIEW_TEXT_MIN_LENGTH
          &&
          value.length <= Settings.REVIEW_TEXT_MAX_LENGTH
        ),
        COMMENT_ERROR
    );
  }

  _isFormValid() {
    return this._isRatingValid() && this._isCommentValid();
  }

  _handleFormChange() {
    this._isFormValid();
  }

  render() {
    return (
      <form
        ref={this._formRef}
        className="reviews__form form"
        action="#"
        method="post"
        onSubmit={this._handleFormSubmit}
        onChange={this._handleFormChange}
      >
        <label className="reviews__label form__label" htmlFor="review">
          Your review
        </label>
        <div
          className="reviews__rating-form form__rating"
          onChange={this._handleRatingChange}
        >

          {Object.entries(RatingTitle).map(([title, number]) => {
            const ratingRef = React.createRef();
            this._ratingRefs.push(ratingRef);
            return (
              <React.Fragment key={`${number}-${title}`}>
                <input
                  ref={ratingRef}
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
          ref={this._commentRef}
          className="reviews__textarea form__textarea" id="review" name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          minLength={Settings.REVIEW_TEXT_MIN_LENGTH}
          maxLength={Settings.REVIEW_TEXT_MAX_LENGTH}
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set
            <span className="reviews__star">rating</span>
            and describe your stay with at least
            <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit"
            disabled={false}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}


PropertyReviewsForm.propTypes = {
  id: PropTypes.number.isRequired,
  postUserReview: PropTypes.func.isRequired,
};
