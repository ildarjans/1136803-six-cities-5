import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {offerPropTypes} from "../../prop-types/offer";

import {selectNearCityOffers} from "../../selectors/selectors";
import {fetchNearOffers} from "../../middleware/thunk-api";
import {PLACE_CARD_OPTION} from "../../const";

import {PlaceCard} from "../place-card/place-card";

export const NearPlaces = ({id, nearOffers, fetchNearOffersById}) => {
  useEffect(() => {
    fetchNearOffersById(id);
  }, [id]);
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
              options={PLACE_CARD_OPTION.NEAR_LIST}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

NearPlaces.propTypes = {
  id: PropTypes.number.isRequired,
  fetchNearOffersById: PropTypes.func.isRequired,
  nearOffers: PropTypes.arrayOf(offerPropTypes).isRequired
};

const mapStateToProps = (state) => ({
  nearOffers: selectNearCityOffers(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchNearOffersById(id) {
    dispatch(fetchNearOffers(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NearPlaces);
