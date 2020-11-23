import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {cities} from "../../const";
import {selectActiveCity} from "../../selectors/offers";
import {processActionCreator} from "../../store/process/process-action";

const LocationsTabsComponent = ({activeCity, onCityChange}) => {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city, i) => {
            const isActive = city === activeCity;
            const handleTabClick = () => {
              if (!isActive) {
                onCityChange(city);
              }
            };
            return (
              <li key={`${city}-${i}`} className="locations__item">
                <Link
                  className={`locations__item-link tabs__item ${isActive ? `tabs__item--active` : ``}`}
                  to={isActive ? `/` : `#`}
                  onClick={handleTabClick}
                >
                  <span>{city}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );

};

LocationsTabsComponent.propTypes = {
  activeCity: PropTypes.oneOf(cities).isRequired,
  onCityChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: selectActiveCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange: (city) => {
    dispatch(processActionCreator.changeCity(city));
  }
});

export const LocationsTabs = connect(mapStateToProps, mapDispatchToProps)(LocationsTabsComponent);
