import React from "react";
import PropTypes from "prop-types";

import {offerPropTypes} from "../../prop-types/offer";

import {PlaceCard} from "../place-card/place-card";

export const NearPlaces = ({offers}) => {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {offers.map((offer) => (
            <PlaceCard
              key={offer.id}
              offer={offer}
              classNameArticle={`near-places__card`}
              classNameWrapper={`near-places__image-wrapper`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

NearPlaces.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes.isRequired).isRequired
};
