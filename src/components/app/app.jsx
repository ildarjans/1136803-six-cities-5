import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../prop-validation/offer-prop-types";
import {MainPage} from "../main-page/main-page";
import {LoginPage} from "../login-page/login-page";
import {FavoritesPage} from "../favorites-page/favorites-page";
import {Property} from "../property/property";
import {UnFoundPage} from "../unfound-page/unfound-page";

export const App = ({offersCount, offers, reviews}) => {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <MainPage offersCount={offersCount} offers={offers}/>
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

        <Route component={UnFoundPage}/>

      </Switch>
    </BrowserRouter>
  );
};


App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(offerPropTypes),
  reviews: PropTypes.array.isRequired,
};
