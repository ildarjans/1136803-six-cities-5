import React from "react";
import PropTypes from "prop-types";
import {PlaceCard} from "../place-card/place-card";
import {offerPropTypes} from "../../prop-validation/offer-prop-types";

export class PlacesList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <PlaceCard key={offer.id} offer={offer} />
        ))}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes)
};
