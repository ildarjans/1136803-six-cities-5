import React from "react";

import {Header} from "../header/header";
import {Tabs} from "../tabs/tabs";
import {Cities} from "../cities/cities";

export const MainPage = () => {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <Cities />
      </main>
    </div>
  );
};
