import {
  generateId,
  getRandomArrayElement,
  getRandomArrayElements,
  getRandomAvatar,
  getRandomFullName,
  getRandomImageGallery,
  getRandomInteger,
} from "./utils";
import {OFFER_TYPES} from "../const";
import {
  BEDROOMS_RANGE,
  CITIES,
  DESCRIPTIONS,
  FEATURES,
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
    title: getRandomArrayElement(CITIES),
    type: getRandomArrayElement(OFFER_TYPES),
    rating: getRandomInteger(5),
    description: getRandomArrayElement(DESCRIPTIONS),
    bedrooms: getRandomInteger(BEDROOMS_RANGE.MAX, BEDROOMS_RANGE.MIN),
    guests: getRandomInteger(GUEST_RANGE.MAX, GUEST_RANGE.MIN),
    features: getRandomArrayElements(FEATURES, MAX_FEATURES),
    owner: {
      avatar: getRandomAvatar(),
      name: getRandomFullName(),
      super: Boolean(getRandomInteger(1)),
    },
  };
}

