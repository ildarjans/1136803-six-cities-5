import React from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../prop-types/offer";
import {FavoritesPlaces} from "../favorites-places/favorites-places";

export const FavoritesItem = ({city, offers}) => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span> {city} </span>
          </a>
        </div>
      </div>
      <FavoritesPlaces offers={offers}/>
    </li>
  );
};

FavoritesItem.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerPropTypes.isRequired).isRequired
};
