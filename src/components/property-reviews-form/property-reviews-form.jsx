import React from "react";
import {RatingTitle, Settings} from "../../const";

export class PropertyReviewsForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      rating: ``,
      review: ``,
    };

    this._formRef = React.createRef();
    this._handleFormChange = this._handleFormChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleFormChange(evt) {
    this.setState(Object.assign(
        (prevState) => prevState,
        {
          [evt.target.name]: evt.target.value,
        })
    );
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    return new FormData(this._formRef.current);
  }

  render() {
    return (
      <form
        ref={this._formRef}
        className="reviews__form form"
        action="#"
        method="post"
        onChange={this._handleFormChange}
        onSubmit={this._handleSubmit}
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">

          {Object.entries(RatingTitle).map(([number, title]) => (
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
                title={title}
              >
                <svg className="form__star-image"
                  width="37"
                  height="33"
                >
                  <use xlinkHref="#icon-star"/>
                </svg>
              </label>
            </React.Fragment>
          ))}
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
          <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
        </div>
      </form>
    );
  }
}
