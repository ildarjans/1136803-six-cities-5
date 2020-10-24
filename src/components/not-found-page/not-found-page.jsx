import React from "react";
import {Link} from "react-router-dom";
import {Header} from "../header/header";

export const NotFoundPage = () => {
  return (
    <>
      <Header/>
      <h1>Page not Found</h1>
      <br/>
      <Link to='/'>Go to main page</Link>
    </>
  );
};
