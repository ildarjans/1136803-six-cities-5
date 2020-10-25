import {
  generateId,
  getLocationCoords,
  getRandomArrayElement,
  getRandomArrayElements,
  getRandomAvatar,
  getRandomFullName,
  getRandomImageGallery,
  getRandomInteger,
} from "./utils";
import {offerTypes, cities} from "../const";
import {
  MAX_FEATURES,
  descriptions,
  features,
  titles,
  bedroomsRange,
  guestRange,
  priceRange,
} from "./consts";

export function getOffer() {
  const city = getRandomArrayElement(cities);
  return {
    city,
    id: generateId(),
    images: getRandomImageGallery(),
    premium: Boolean(getRandomInteger(1)),
    price: getRandomInteger(priceRange.MAX, priceRange.MIN),
    title: getRandomArrayElement(titles),
    type: getRandomArrayElement(offerTypes),
    rating: getRandomInteger(5),
    description: getRandomArrayElement(descriptions),
    bedrooms: getRandomInteger(bedroomsRange.MAX, bedroomsRange.MIN),
    guests: getRandomInteger(guestRange.MAX, guestRange.MIN),
    features: getRandomArrayElements(features, MAX_FEATURES),
    owner: {
      avatar: getRandomAvatar(),
      name: getRandomFullName(),
      super: Boolean(getRandomInteger(1)),
    },
    coords: getLocationCoords(city)
  };
}

