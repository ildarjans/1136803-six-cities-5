import {
  getRandomArrayElement,
  getRandomAvatar,
  getRandomFullName,
  getRandomInteger,
} from "./utils";
import {descriptions} from "./consts";

export function getReview() {
  return {
    avatar: getRandomAvatar(),
    name: getRandomFullName(),
    date: new Date(),
    rating: getRandomInteger(5),
    review: getRandomArrayElement(descriptions),
  };
}

