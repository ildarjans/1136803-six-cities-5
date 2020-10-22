import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../prop-validation/offer-prop-types";
import {getRatingWidth} from "../../utils";

export const PlaceCard = ({onClick, offer, block, element}) => {
  const handleClickPlaceCard = onClick.bind(null, offer.id);

  return (
    <article className={`${block}__${element} place-card`}>
      <div className={`${block}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.images[0]}
            width="260"
            height="200"
            alt={offer.title}
            onClick={handleClickPlaceCard}
          />
        </Link>

      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
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
            <span style={{width: `${getRatingWidth(offer.rating)}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );

};

PlaceCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  offer: offerPropTypes.isRequired,
  block: PropTypes.string.isRequired,
  element: PropTypes.string.isRequired
};

