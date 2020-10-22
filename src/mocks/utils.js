import {
  AVATAR_URL,
  avatarSprites,
  lastNames,
  names,
  IMAGE_GALLERY,
} from "./consts";

import {CityCoords} from "../const";

function getCoordsRandomDeviation() {
  return {
    lng: getRandomInteger(5, -5) / 100,
    lat: getRandomInteger(3, -3) / 100
  };
}

export function getRandomInteger(max, min = 0) {
  return min + Math.floor(Math.random() * (max + 1 - min));
}

export function getRandomArrayElements(arr, count) {
  if (arr.length < count) {
    return undefined;
  }
  const resultArray = [];
  while (resultArray.length < count) {
    const randElement = arr[getRandomInteger(arr.length - 1)];
    if (!resultArray.includes(randElement)) {
      resultArray.push(randElement);
    }
  }
  return resultArray;
}

export function getRandomArrayElement(arr) {
  if (!arr && arr.length === 0) {
    return undefined;
  }
  return arr[getRandomInteger(arr.length - 1)];
}

export function getRandomFullName() {
  return (
    `${getRandomArrayElement(names)} ${getRandomArrayElement(lastNames)}`
  );
}

export function getRandomAvatar() {
  return `${AVATAR_URL}/${getRandomArrayElement(avatarSprites)}/${Math.random()}.svg`;
}

export function getRandomImageGallery() {
  const gallerySize = getRandomInteger(IMAGE_GALLERY.MAX, IMAGE_GALLERY.MIN);
  return Array(gallerySize).fill().map(getRandomPhoto);
}

function getRandomPhoto() {
  return `http://picsum.photos/248/152?r=${Math.random()}`;
}

export function generateId() {
  return getRandomInteger(Date.now()).toString(16);
}

export function getLocationCoords(city) {
  const {lat, lng} = getCoordsRandomDeviation();
  const coords = Object.assign({}, CityCoords[city]);
  coords.lat += lat;
  coords.lng += lng;
  return coords;
}
