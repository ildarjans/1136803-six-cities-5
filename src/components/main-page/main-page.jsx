import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {offerPropTypes} from "../../prop-validation/offer-prop-types";
import {actionCreator} from "../../store/action";
import {cities} from "../../const";

import {Header} from "../header/header";
import {Tabs} from "../tabs/tabs";
import {Cities} from "../cities/cities";

const MainPageComponent = ({activeCity, offers, changeCity}) => {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs activeCity={activeCity} onTabClick={changeCity}/>
        <Cities offers={offers} activeCity={activeCity}/>
      </main>
    </div>
  );
};

MainPageComponent.propTypes = {
  activeCity: PropTypes.oneOf(cities).isRequired,
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  changeCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers.filter((offer) => offer.city === state.activeCity),
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity: (city) => {
    dispatch(actionCreator.changeCity(city));
  }
});

export const MainPage = connect(mapStateToProps, mapDispatchToProps)(MainPageComponent);
