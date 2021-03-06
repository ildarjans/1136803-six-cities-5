import React from "react";
import {Router, Route, Switch} from "react-router-dom";

import {AppRoute} from "../../const";
import {browserHistory} from "../../browser-history";

import MainPage from "../main-page/main-page";
import {LoginPage} from "../login-page/login-page";
import FavoritesPage from "../favorites-page/favorites-page";
import Property from "../property/property";
import PrivateRoute from "../private-route/private-route";
import {NotFoundPage} from "../not-found-page/not-found-page";
import LoginRoute from "../login-route/login-route";

export const App = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT} component={MainPage}/>
        <Route exact path={AppRoute.OFFER} component={Property}/>
        <LoginRoute isExact path={AppRoute.LOGIN} render={() => <LoginPage/> }/>
        <PrivateRoute isExact path={AppRoute.FAVORITES} render={() => <FavoritesPage/> }/>
        <Route component={NotFoundPage}/>
      </Switch>
    </Router>
  );
};
