import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {cities} from "../../const";
import {offerPropTypes} from "../../prop-types/offer";
import {mapCenterPropTypes, mapIconPropTypes} from "../../prop-types/map";
import {
  selectActiveCity,
  selectCitiesMapIcons,
  selectMapCenter,
  selectSortedOffersByType
} from "../../selectors/selectors";

import {PlacesList} from "../places-list/places-list";
import {PlacesSorting} from "../places-sorting/places-sorting";
import Map from "../map/map";
import {processActionCreator} from "../../store/process/process-action";

export const CitiesComponent = ({offers, activeCity, center, icons, restoreHoveredOffer, onActiveOfferChange}) => {
  useEffect(() => {
    restoreHoveredOffer();
  }, []);
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay
            in {activeCity}</b>

          <PlacesSorting/>

          <PlacesList offers={offers} onActiveOfferChange={onActiveOfferChange}/>

        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map center={center} icons={icons}/>
          </section>
        </div>
      </div>
    </div>
  );
};

CitiesComponent.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes.isRequired).isRequired,
  activeCity: PropTypes.oneOf(cities).isRequired,
  center: mapCenterPropTypes.isRequired,
  icons: PropTypes.arrayOf(mapIconPropTypes.isRequired).isRequired,
  restoreHoveredOffer: PropTypes.func.isRequired,
  onActiveOfferChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  activeCity: selectActiveCity(state),
  offers: selectSortedOffersByType(state),
  center: selectMapCenter(state),
  icons: selectCitiesMapIcons(state),
});

const mapDispatchToProps = (dispatch) => ({
  restoreHoveredOffer() {
    dispatch(processActionCreator.changeHoveredOfferId(``));
  },
  onActiveOfferChange(id) {
    dispatch(processActionCreator.changeHoveredOfferId(id));
  }
});

export const Cities = connect(mapStateToProps, mapDispatchToProps)(CitiesComponent);
