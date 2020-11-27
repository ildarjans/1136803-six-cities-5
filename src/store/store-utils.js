import {adaptOfferToClient} from "../utils";

export const updateOffersList = (offers, update) => {
  const index = offers.findIndex((offer) => offer.id === update.id);
  const offersCopy = offers.slice();
  if (index === -1) {
    return offersCopy;
  }

  offersCopy.splice(index, 1, update);

  return offersCopy;
};

export const addOfferToFavoritesList = (favorites, offer) => {
  return [...favorites, offer];
};

export const removeOfferById = (offers, id) => {
  const index = offers.findIndex((offer) => offer.id === id);
  const offersCopy = offers.slice();
  if (index === -1) {
    return offersCopy;
  }

  offersCopy.splice(index, 1);

  return offersCopy;
};

export const getOffersDictionaries = (offersList) => {
  const offers = {};
  const cityOffers = {};
  offersList.forEach((offer) => {
    const city = offer.city.name.toUpperCase();
    const adaptedOffer = adaptOfferToClient(offer);

    if (!cityOffers[city]) {
      cityOffers[city] = [];
    }

    offers[offer.id] = adaptedOffer;
    cityOffers[city].push(adaptedOffer);
  });

  return [offers, cityOffers];
};

export const getFavoriteCityOffersDictionary = (offersList) => {
  const favoriteCityOffers = {};
  offersList.forEach((offer) => {
    const city = offer.city.name.toUpperCase();
    if (!favoriteCityOffers[city]) {
      favoriteCityOffers[city] = [];
    }
    favoriteCityOffers[city].push(adaptOfferToClient(offer));
  });

  return favoriteCityOffers;
};
