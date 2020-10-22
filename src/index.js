import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app";
import {getOffer} from "./mocks/offer";
import {getReview} from "./mocks/review";
import {
  MOCK_OFFERS_COUNT,
  MOCK_REVIEWS_COUNT,
} from "./mocks/consts";

const root = document.querySelector(`#root`);

const offers = Array(MOCK_OFFERS_COUNT).fill(``).map(getOffer);
const reviews = Array(MOCK_REVIEWS_COUNT).fill(``).map(getReview);

ReactDOM.render(
    <App
      offers={offers}
      reviews={reviews}
    />,
    root
);
