import React from "react";
import PropTypes from "prop-types";

import {offerPropTypes} from "../../prop-validation/offer-prop-types";
import {cities} from "../../const";

import {Header} from "../header/header";
import {Tabs} from "../tabs/tabs";
import {Cities} from "../cities/cities";

export const MainPage = (props) => {
  const {activeCity, offers} = props;
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs activeCity={activeCity}/>
        <Cities offers={offers} activeCity={activeCity}/>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  activeCity: PropTypes.oneOf(cities).isRequired,
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
};
