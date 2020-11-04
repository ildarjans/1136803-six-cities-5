import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getRatingWidth} from "../../utils";
import {offerPropTypes} from "../../prop-validation/offer-prop-types";
import {actionCreator} from "../../store/action";

export const PlaceCardComponent = (props) => {
  const {offer, classNameArticle, classNameWrapper, onActiveOfferChange} = props;
  return (
    <article
      className={`${classNameArticle} place-card`}
      onMouseOver={() => {
        onActiveOfferChange(offer.id);
      }}
      onMouseOut={() => {
        onActiveOfferChange(``);
      }}
    >
      <div className={`${classNameWrapper} place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.images[0]}
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
  // activeOfferId: PropTypes.string.isRequired,
  classNameArticle: PropTypes.string.isRequired,
  classNameWrapper: PropTypes.string.isRequired,
  onActiveOfferChange: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({
});


const mapDispatchToProps = (dispatch) => ({
  onActiveOfferChange: (id) => {
    dispatch(actionCreator.changeActiveOfferId(id));
  }
});


export const PlaceCard = connect(mapStateToProps, mapDispatchToProps)(PlaceCardComponent);
