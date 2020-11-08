import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {cities} from "../../const";
import {offerPropTypes} from "../../prop-types/offer";
import {
  mapCenter,
  mapIcons
} from "../../prop-types/map";
import {
  selectCitiesMapIcons,
  selectMapCenter
} from "../../selectors/offers";

import {PlacesList} from "../places-list/places-list";
import {Map} from "../map/map";

const CitiesComponent = ({offers, activeCity, center, icons}) => {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {activeCity}</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex="0">
                  Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"/>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex="0">Popular</li>
              <li className="places__option" tabIndex="0">Price: low to high</li>
              <li className="places__option" tabIndex="0">Price: high to low</li>
              <li className="places__option" tabIndex="0">Top rated first</li>
            </ul>

          </form>

          <PlacesList offers={offers}/>

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
  center: mapCenter.isRequired,
  icons: PropTypes.arrayOf(mapIcons.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  center: selectMapCenter(state),
  icons: selectCitiesMapIcons(state),
});

export const Cities = connect(mapStateToProps)(CitiesComponent);
