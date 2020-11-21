import React from "react";

import {Header} from "../header/header";
import {LocationsTabs} from "../locations-tabs/locations-tabs";
import {Cities} from "../cities/cities";

export const MainPage = () => {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsTabs />
        <Cities />
      </main>
    </div>
  );
};
