import React from "react";
import PropTypes from "prop-types";

import {offerPropTypes} from "../../prop-validation/offer-prop-types";
import {placeCardClassNames} from "../../const";

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
              classNames={placeCardClassNames.nearPlaces}
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
