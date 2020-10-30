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
