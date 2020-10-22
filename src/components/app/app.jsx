import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import PropTypes from "prop-types";
import {MainPage} from "../main-page/main-page";
import {LoginPage} from "../login-page/login-page";
import {FavoritesPage} from "../favorites-page/favorites-page";
import {Property} from "../property/property";
import {NotFoundPage} from "../not-found-page/not-found-page";
import {offerPropTypes} from "../../prop-validation/offer-prop-types";
import {cities} from "../../const";

export const App = ({offers, reviews}) => {
  const activeCity = cities[0];
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <MainPage activeCity={activeCity} offers={offers}/>
        </Route>

        <Route exact path="/login">
          <LoginPage/>
        </Route>

        <Route exact path="/favorites">
          <FavoritesPage/>
        </Route>

        <Route
          exact path="/offer/:id"
          render={(props) => (
            <Property {...props} reviews={reviews} offers={offers}/>
          )}
        />

        <Route component={NotFoundPage}/>

      </Switch>
    </BrowserRouter>
  );
};


App.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes.isRequired).isRequired,
  reviews: PropTypes.array.isRequired,
};
