import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import {FAVORITE_BUTTON_OPTIONS, Settings} from "../../const";
import {debounce, getRatingWidth} from "../../utils";
import {offerPropTypes} from "../../prop-types/offer";
import FavoriteButton from "../favorite-button/favorite-button";

export const PlaceCard = (props) => {
  const {
    offer,
    options,
    renderChild,
    onActiveOfferChange
  } = props;

  const handleDebouncedActiveOfferChange = debounce(
      onActiveOfferChange,
      Settings.MAP_PIN_DEBOUNCE_DELAY
  );

  const handleMouseOver = () => {
    handleDebouncedActiveOfferChange(offer.id);
  };

  const handleMouseOut = () => {
    handleDebouncedActiveOfferChange(``);
  };

  return (
    <article
      className={`${options.CLASSNAME_ARTICLE} place-card`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {renderChild(offer)}
      <div className={`${options.CLASSNAME_WRAPPER} place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={options.IMAGE_WIDTH}
            height={options.IMAGE_HEIGHT}
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

          <FavoriteButton
            id={offer.id}
            isFavorite={offer.isFavorite}
            options={FAVORITE_BUTTON_OPTIONS.PLACE_CARD}
          />

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
  offer: offerPropTypes.isRequired,
  onActiveOfferChange: PropTypes.func.isRequired,
  renderChild: PropTypes.func.isRequired,
  options: PropTypes.shape({
    CLASSNAME_ARTICLE: PropTypes.string.isRequired,
    CLASSNAME_WRAPPER: PropTypes.string.isRequired,
    IMAGE_WIDTH: PropTypes.number.isRequired,
    IMAGE_HEIGHT: PropTypes.number.isRequired,
  })
};
PlaceCard.defaultProps = {
  onActiveOfferChange: () => {},
  renderChild: () => {},
};
