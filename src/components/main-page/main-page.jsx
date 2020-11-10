import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {actionCreator} from "../../store/action";
import {cities} from "../../const";

import {Header} from "../header/header";
import {Tabs} from "../tabs/tabs";
import {Cities} from "../cities/cities";

const MainPageComponent = ({activeCity, onCityChange}) => {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs activeCity={activeCity} onTabClick={onCityChange}/>
        <Cities activeCity={activeCity}/>
      </main>
    </div>
  );
};

MainPageComponent.propTypes = {
  activeCity: PropTypes.oneOf(cities).isRequired,
  onCityChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange: (city) => {
    dispatch(actionCreator.changeCity(city));
  }
});

export const MainPage = connect(mapStateToProps, mapDispatchToProps)(MainPageComponent);

