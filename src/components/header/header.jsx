import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../const";
import {userWithEmailPropTypes} from "../../prop-types/user";

const HeaderComponent = ({user, authorizationStatus}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link">
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to="/login">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__login">
                    {authorizationStatus === AuthorizationStatus.AUTH ? `${user.email}` : `Sign in`}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

HeaderComponent.propTypes = ({
  user: PropTypes.oneOfType([userWithEmailPropTypes, PropTypes.object]).isRequired,
  authorizationStatus: PropTypes.string.isRequired
});

const mapStateToProps = ({USER}) => ({
  user: USER.user,
  authorizationStatus: USER.authorizationStatus
});

export const Header = connect(mapStateToProps)(HeaderComponent);
