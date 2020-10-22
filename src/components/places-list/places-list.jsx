import React from "react";
import PropTypes from "prop-types";
import {CitiesPlaceCard} from "../cities-place-card/cities-place-card";
import {offerPropTypes} from "../../prop-validation/offer-prop-types";

export const PlacesList = ({offers}) => {
  const handlePlaceCardClick = () => {};
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CitiesPlaceCard onClick={handlePlaceCardClick} key={offer.id} offer={offer} />
      ))}
    </div>
  );
};

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes.isRequired).isRequired
};
