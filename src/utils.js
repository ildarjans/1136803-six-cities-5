import {RATING_STARS_COUNT} from "./const";

export function getReviewDateString(date) {
  return (
    date.toLocaleDateString(`en-Us`, {month: `long`, year: `numeric`})
  );
}

export function getRatingWidth(rating) {
  return Math.round(100 / RATING_STARS_COUNT * rating);
};

export function getReviewTimeDateString(date) {
  return date.toISOString().split(`T`)[0];
}
