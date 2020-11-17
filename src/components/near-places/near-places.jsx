import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {offerPropTypes} from "../../prop-types/offer";

import {PlaceCard} from "../place-card/place-card";
import {selectMemoizeNearOffers} from "../../selectors/offers";

const NearPlacesComponent = ({nearOffers}) => {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {nearOffers.map((offer) => (
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

NearPlacesComponent.propTypes = {
  nearOffers: PropTypes.arrayOf(offerPropTypes.isRequired).isRequired
};

const mapStateToProps = (state) => ({
  nearOffers: selectMemoizeNearOffers(state)
});

export const NearPlaces = connect(mapStateToProps)(NearPlacesComponent);
