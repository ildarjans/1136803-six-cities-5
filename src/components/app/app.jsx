import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {AppRoute} from "../../const";

import {MainPage} from "../main-page/main-page";
import {LoginPage} from "../login-page/login-page";
import {FavoritesPage} from "../favorites-page/favorites-page";
import {Property} from "../property/property";
import {NotFoundPage} from "../not-found-page/not-found-page";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage/>
        </Route>

        <Route exact path={AppRoute.LOGIN}>
          <LoginPage/>
        </Route>

        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage/>
        </Route>

        <Route
          exact path={`${AppRoute.OFFER}:id`}
          component={Property}
        />

        <Route component={NotFoundPage}/>
      </Switch>
    </BrowserRouter>
  );
};
