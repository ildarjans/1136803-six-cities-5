import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {offerPropTypes} from "../../prop-types/offer";

import {PlaceCard} from "../place-card/place-card";
import {selectNearCityOffers} from "../../selectors/offers";
import {fetchNearOffers} from "../../middleware/thunk-api";

const NearPlacesComponent = ({nearOffers, fetchNearOffersById, id}) => {
  useEffect(() => {
    fetchNearOffersById(id);
  }, []);
  return (
    nearOffers.length > 0
    &&
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
  id: PropTypes.string.isRequired,
  fetchNearOffersById: PropTypes.func.isRequired,
  nearOffers: PropTypes.arrayOf(offerPropTypes).isRequired
};

const mapStateToProps = (state) => ({
  nearOffers: selectNearCityOffers(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchNearOffersById(id) {
    dispatch(fetchNearOffers(id));
  }
});

export const NearPlaces = connect(mapStateToProps, mapDispatchToProps)(NearPlacesComponent);
