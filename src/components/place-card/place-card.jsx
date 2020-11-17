import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {Settings} from "../../const";
import {debounce, getRatingWidth} from "../../utils";
import {offerPropTypes} from "../../prop-types/offer";
import {actionCreator} from "../../store/actions";

export const PlaceCardComponent = (props) => {
  const {offer, classNameArticle, classNameWrapper, onActiveOfferChange} = props;
  const handleDebouncedActiveOfferChange = debounce(
      onActiveOfferChange,
      Settings.MAP_PIN_DEBOUNCE_DELAY
  );
  return (
    <article
      className={`${classNameArticle} place-card`}
      onMouseOver={() => {
        handleDebouncedActiveOfferChange(offer.id);
      }}
      onMouseOut={() => {
        handleDebouncedActiveOfferChange(``);
      }}
    >
      <div className={`${classNameWrapper} place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt={offer.title}
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

PlaceCardComponent.propTypes = {
  offer: offerPropTypes.isRequired,
  classNameArticle: PropTypes.string.isRequired,
  classNameWrapper: PropTypes.string.isRequired,
  onActiveOfferChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onActiveOfferChange: (id) => {
    dispatch(actionCreator.changeActiveOfferId(id));
  }
});

export const PlaceCard = connect(null, mapDispatchToProps)(PlaceCardComponent);
