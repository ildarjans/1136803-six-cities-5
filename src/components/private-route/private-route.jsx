import React from "react";
import {Route, Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {AppRoute, AuthorizationStatus} from "../../const";

export const PrivateRouteComponent = (props) => {
  const {authorizationStatus, path, isExact, render} = props;
  return (
    <Route
      exact={isExact}
      path={path}
      render={() => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH ?
            render() :
            <Redirect to={AppRoute.LOGIN}/>
        );
      }}
    />
  );
};

PrivateRouteComponent.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  isExact: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus
});

export const PrivateRoute = connect(mapStateToProps)(PrivateRouteComponent);
