import React from "react";
import {connect} from "react-redux";
import {Route, Redirect} from "react-router-dom";

import PropTypes from "prop-types";
import {AppRoute, AuthorizationStatus} from "../../const";

export const PrivateRoute = (props) => {
  const {authorizationStatus, path, isExact, render} = props;
  return (
    <Route
      exact={isExact}
      path={path}
      render={() => {
        return (
          authorizationStatus === AuthorizationStatus.AUTHORIZED ?
            render() :
            <Redirect to={AppRoute.LOGIN}/>
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  isExact: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus
});

export default connect(mapStateToProps)(PrivateRoute);
