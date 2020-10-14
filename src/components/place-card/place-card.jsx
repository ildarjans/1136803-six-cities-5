import React from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../prop-validation/offer-prop-types";
import {Link} from "react-router-dom";

export const PlaceCard = (props) => {
  const {offer, onClick} = props;
  const {id, images, price, rating, title, type} = offer;
  const firstImage = images[0] || ``;
  const ratingToSpanWidth = Math.round(100 / 5 * rating);
  const onClickNeighbourhoodOffer = onClick ? onClick.bind(null, id) : (() => {
  });

  return (
    <article className="cities__place-card place-card">
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={firstImage}
            width="260"
            height="200"
            alt="Place image"
            onClick={onClickNeighbourhoodOffer}
          />
        </Link>

      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingToSpanWidth}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );

};

PlaceCard.propTypes = {
  offer: offerPropTypes,
  onClick: PropTypes.func,
};

