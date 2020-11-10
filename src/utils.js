import {Settings} from "./const";

export function getReviewDateString(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  return (
    date.toLocaleDateString(`en-Us`, {month: `long`, year: `numeric`})
  );
}

export function getRatingWidth(rating) {
  return Math.round(100 / Settings.RATING_STARS_COUNT * rating);
}

export function getReviewTimeDateString(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  return date.toISOString().split(`T`)[0];
}

export function extend(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

export const debounce = (fn, delay) => {
  let timeout;
  return (id) => {
    clearTimeout(timeout);
    timeout = setTimeout(fn.bind(null, id), delay);
  };
};

export const sortOffersPriceAsc = (offerA, offerB) => offerA.price - offerB.price;

export const sortOffersPriceDes = (offerA, offerB) => offerB.price - offerA.price;

export const sortOffersTopRated = (offerA, offerB) => offerB.rating - offerA.rating;

