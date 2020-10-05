import React, {Fragment} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import PropTypes from "prop-types";
import MainPage from '../main-page/main-page';
import Login from "../login/login";
import Favorites from "../favorites/favorite";
import Offer from "../offer/offer";

const App = (props) => {
  const {offersCount} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <MainPage offersCount={offersCount}/>
        </Route>
        <Route exact path='/login'>
          <Login/>
        </Route>
        <Route exact path='/favorites'>
          <Favorites/>
        </Route>
        <Route exact path='/offer/:id'>
          <Offer/>
        </Route>
        <Route render={() => (
          <Fragment>
            <h1>Page not Found</h1>
            <br/>
            <Link to='/'>Go to main page</Link>
          </Fragment>
        )}
        />
      </Switch>
    </BrowserRouter>
  );
};


App.propTypes = {
  offersCount: PropTypes.number.isRequired
};

export default App;
