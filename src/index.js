import React from "react";
import ReactDOM from "react-dom";

import {offers} from "./mocks/offer";
import {reviews} from "./mocks/review";

import {App} from "./components/app/app";

const root = document.querySelector(`#root`);

ReactDOM.render(
    <App
      offers={offers}
      reviews={reviews}
    />,
    root
);
