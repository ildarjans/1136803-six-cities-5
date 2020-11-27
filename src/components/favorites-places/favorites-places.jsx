import React from "react";
import PropTypes from "prop-types";

import {offerPropTypes} from "../../prop-types/offer";

import {PlaceCard} from "../place-card/place-card";
import {PLACE_CARD_OPTION} from "../../const";

export const FavoritesPlaces = ({offers}) => {
  return (
    <div className="favorites__places">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          options={PLACE_CARD_OPTION.FAVORITE_LIST}
          renderChild={() => {}}
          onActiveOfferChange={() => {}}
        />
      ))}
    </div>
  );
};

FavoritesPlaces.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes.isRequired).isRequired
};
