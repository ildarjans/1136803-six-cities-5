import {
  AVATAR_URL,
  AVATAR_SPRITES,
  LAST_NAMES,
  NAMES,
  IMAGE_GALLERY,
} from "./consts";

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
    `${getRandomArrayElement(NAMES)} ${getRandomArrayElement(LAST_NAMES)}`
  );
}

export function getRandomAvatar() {
  return `${AVATAR_URL}/${getRandomArrayElement(AVATAR_SPRITES)}/${Math.random()}.svg`;
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
