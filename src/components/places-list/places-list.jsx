import React from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../prop-types/offer";

import {PlaceCard} from "../place-card/place-card";

export const PlacesList = ({offers}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          classNameArticle={`cities__place-card`}
          classNameWrapper={`cities__image-wrapper`}
        />
      ))}
    </div>
  );
};

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes.isRequired).isRequired
};
