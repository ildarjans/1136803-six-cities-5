import React from "react";
import PropTypes from "prop-types";
import {NearPlaceCard} from "../near-place-card/near-place-card";
import {offerPropTypes} from "../../prop-validation/offer-prop-types";

export const NearPlaces = ({onClick, offers}) => {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {offers.map((offer) => (
            <NearPlaceCard
              key={offer.id}
              offer={offer}
              onClick={onClick}/>
          ))}
        </div>
      </section>
    </div>
  );
};

NearPlaces.propTypes = {
  onClick: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(offerPropTypes.isRequired).isRequired
};
