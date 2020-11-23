import {Settings} from "./const";

export const getReviewDateString = (date) => {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  return (
    date.toLocaleDateString(`en-Us`, {month: `long`, year: `numeric`})
  );
};

export const getRatingWidth = (rating) => {
  return Math.round(100 / Settings.RATING_STARS_COUNT * rating);
};

export const getDecimalRating = (offer) => {
  return Math.round(offer * 10) / 10;
};

export const getReviewTimeDateString = (date) => {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  return date.toISOString().split(`T`)[0];
};

export const extend = (obj1, obj2) => {
  return Object.assign({}, obj1, obj2);
};

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

export const adaptOfferToClient = (hotel) => {
  return {
    bedrooms: hotel[`bedrooms`],
    city: hotel[`city`],
    description: hotel[`description`],
    goods: hotel[`goods`],
    id: hotel[`id`],
    images: hotel[`images`],
    isFavorite: hotel[`is_favorite`],
    isPremium: hotel[`is_premium`],
    host: {
      id: hotel.host[`id`],
      isPro: hotel.host[`is_pro`],
      avatarUrl: `/${hotel.host[`avatar_url`]}`,
      name: hotel.host[`name`],
    },
    location: hotel[`location`],
    maxAdults: hotel[`max_adults`],
    title: hotel[`title`],
    type: hotel[`type`],
    previewImage: hotel[`preview_image`],
    price: hotel[`price`],
    rating: hotel[`rating`]
  };
};

export const adaptReviewToClient = (review) => {
  return {
    comment: review[`comment`],
    date: review[`date`],
    id: review[`id`],
    rating: review[`rating`],
    user: {
      isPro: review.user[`is_pro`],
      avatarUrl: review.user[`avatar_url`],
      name: review.user.name,
      id: review.user.id,
    },
  };
};

export const adaptUserToClient = (user) => {
  return {
    id: user[`id`],
    email: user[`email`],
    name: user[`name`],
    avatarUrl: user[`avatar_url`],
    isPro: user[`is_pro`],
  };
};
