import {
  generateId,
  getRandomArrayElement,
  getRandomArrayElements,
  getRandomAvatar,
  getRandomFullName,
  getRandomImageGallery,
  getRandomInteger,
} from "./utils";
import {offerTypes} from "../const";
import {
  cities,
  descriptions,
  features,
  BEDROOMS_RANGE,
  GUEST_RANGE,
  MAX_FEATURES,
  PRICE_RANGE,
} from "./consts";

export function getOffer() {
  return {
    id: generateId(),
    images: getRandomImageGallery(),
    premium: Boolean(getRandomInteger(1)),
    price: getRandomInteger(PRICE_RANGE.MAX, PRICE_RANGE.MIN),
    title: getRandomArrayElement(cities),
    type: getRandomArrayElement(offerTypes),
    rating: getRandomInteger(5),
    description: getRandomArrayElement(descriptions),
    bedrooms: getRandomInteger(BEDROOMS_RANGE.MAX, BEDROOMS_RANGE.MIN),
    guests: getRandomInteger(GUEST_RANGE.MAX, GUEST_RANGE.MIN),
    features: getRandomArrayElements(features, MAX_FEATURES),
    owner: {
      avatar: getRandomAvatar(),
      name: getRandomFullName(),
      super: Boolean(getRandomInteger(1)),
    },
  };
}

