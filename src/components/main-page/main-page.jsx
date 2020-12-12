import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {selectCityOffers} from "../../selectors/selectors";
import {offerPropTypes} from "../../prop-types/offer";

import LocationsTabs from "../locations-tabs/locations-tabs";
import Header from "../header/header";
import Cities from "../cities/cities";
import {MainEmpty} from "../main-empty/empty-main";

export const MainPage = ({cityOffers}) => {
  return (
    <div className="page page--gray page--main">
      <Header/>
      {
        cityOffers.length === 0 ?
          <MainEmpty/> :
          <main className="page__main page__main--index">
            <h1 className="visually-hidden">Cities</h1>
            <LocationsTabs/>
            <Cities/>
          </main>
      }
    </div>
  );
};

MainPage.propTypes = {
  cityOffers: PropTypes.arrayOf(offerPropTypes).isRequired,
};

const mapStateToProps = (state) => ({
  cityOffers: selectCityOffers(state),
});

export default connect(mapStateToProps)(MainPage);
