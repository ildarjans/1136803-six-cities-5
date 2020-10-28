import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import {cities} from "../../const";


export const Tabs = ({activeCity}) => {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city, i) => {
            const isActive = city === activeCity;
            return (
              <li key={`${city}-${i}`} className="locations__item">
                <Link
                  className={`locations__item-link tabs__item ${isActive ? `tabs__item--active` : ``}`}
                  to={isActive ? `/` : `#`}>
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

Tabs.propTypes = {
  activeCity: PropTypes.oneOf(cities).isRequired,
};
