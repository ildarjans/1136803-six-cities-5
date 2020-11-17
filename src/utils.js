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

export const isEqualListsIds = (current, previous) => {
  return (
    current.length === previous.length &&
    current.every((it, i) => (
      it.id === (previous[i] || 0 ? previous[i].id : undefined)
    ))
  );
};

export const adaptHotelToClient = (hotel) => {
  const clientHotel = Object.assign({}, hotel, {
    previewImage: hotel[`preview_image`],
    isFavorite: hotel[`is_favorite`],
    isPremium: hotel[`is_premium`],
    maxAdults: hotel[`max_adults`],
    host: {
      id: hotel.host[`id`],
      isPro: hotel.host[`is_pro`],
      avatarUrl: `/${hotel.host[`avatar_url`]}`,
      name: hotel.host[`name`],
    }
  });

  delete clientHotel[`preview_image`];
  delete clientHotel[`is_favorite`];
  delete clientHotel[`is_premium`];
  delete clientHotel[`max_adults`];

  return clientHotel;
};

export const adaptReviewToClient = (review) => {
  return Object.assign({}, review, {
    user: {
      isPro: review.user[`is_pro`],
      avatarUrl: review.user[`avatar_url`],
      name: review.user.name,
      id: review.user.id,
    },
  });
};
