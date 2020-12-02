import React from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";

export const Footer = () => {
  return (
    <footer className="footer container">
      <Link to={AppRoute.ROOT} className="footer__logo-link">
        <img
          className="footer__logo"
          src="/img/logo.svg"
          alt="6 cities logo"
          width="64"
          height="33"
        />
      </Link>
    </footer>
  );
};
