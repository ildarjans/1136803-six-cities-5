import React from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../prop-types/offer";

import {PlaceCard} from "../place-card/place-card";
import {PLACE_CARD_OPTION} from "../../const";

const renderChild = (offer) => {
  return (
    offer.isPremium &&
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
};

export const PlacesList = ({offers, onActiveOfferChange}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onActiveOfferChange={onActiveOfferChange}
          options={PLACE_CARD_OPTION.PLACE_LIST}
          renderChild={renderChild}
        />
      ))}
    </div>
  );
};

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes.isRequired).isRequired,
  onActiveOfferChange: PropTypes.func.isRequired
};
