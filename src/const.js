export const FAVORITE_BUTTON_OPTIONS = {
  PLACE_CARD: {
    WIDTH: 18,
    HEIGHT: 19,
    CLASSNAME_PREFIX: `place-card`
  },
  PROPERTY: {
    WIDTH: 31,
    HEIGHT: 33,
    CLASSNAME_PREFIX: `property`
  },
};

export const PLACE_CARD_OPTION = {
  PLACE_LIST: {
    CLASSNAME_ARTICLE: `cities__place-card`,
    CLASSNAME_WRAPPER: `cities__image-wrapper`,
    IMAGE_WIDTH: 260,
    IMAGE_HEIGHT: 200,
  },
  NEAR_LIST: {
    CLASSNAME_ARTICLE: `near-places__card`,
    CLASSNAME_WRAPPER: `near-places__image-wrapper`,
    IMAGE_WIDTH: 260,
    IMAGE_HEIGHT: 200,
  },
  FAVORITE_LIST: {
    CLASSNAME_ARTICLE: `favorites__card`,
    CLASSNAME_WRAPPER: `favorites__image-wrapper`,
    IMAGE_WIDTH: 150,
    IMAGE_HEIGHT: 110,
  },
};

export const Settings = {
  OFFERS_IMAGES_DISPLAY_LIMIT: 6,
  NEAR_OFFERS_DISPLAY_LIMIT: 3,
  REVIEW_TEXT_MIN_LENGTH: 50,
  REVIEW_TEXT_MAX_LENGTH: 300,
  RATING_STARS_COUNT: 5,
  MAP_PIN_DEBOUNCE_DELAY: 500
};

export const offerTypes = [
  `apartment`,
  `room`,
  `house`,
  `hotel`,
];

export const OfferType = {
  APARTMENT: `Apartment`,
  ROOM: `Private Room`,
  HOUSE: `House`,
  HOTEL: `Hotel`,
};

export const RatingTitle = {
  PERFECT: 5,
  GOOD: 4,
  NOT_BAD: 3,
  BADLY: 2,
  TERRIBLY: 1
};

export const Title = {
  PERFECT: `perfect`,
  GOOD: `good`,
  NOT_BAD: `not bad`,
  BADLY: `badly`,
  TERRIBLY: `terribly`
};


export const CityCoords = {
  AMSTERDAM: {
    lat: 52.38333,
    lng: 4.9,
    zoom: 12,
  },
  PARIS: {
    lat: 48.866667,
    lng: 2.333333,
    zoom: 12,
  },
  COLOGNE: {
    lat: 50.933333,
    lng: 6.95,
    zoom: 12,
  },
  BRUSSELS: {
    lat: 50.833333,
    lng: 4.333333,
    zoom: 12,
  },
  HAMBURG: {
    lat: 53.575323,
    lng: 10.01534,
    zoom: 12,
  },
  DUSSELDORF: {
    lat: 51.228304,
    lng: 6.793849,
    zoom: 12,
  },
};

export const cities = [
  `AMSTERDAM`,
  `PARIS`,
  `COLOGNE`,
  `BRUSSELS`,
  `HAMBURG`,
  `DUSSELDORF`
];

export const SortType = {
  POPULAR: `popular`,
  ASC: `asc`,
  DESC: `desc`,
  TOP: `top`
};

export const sortTypeTitles = {
  popular: `Popular`,
  asc: `Price: low to high`,
  desc: `Price: high to low`,
  top: `Top rated first`
};

export const AuthorizationStatus = {
  AUTHORIZED: `AUTHORIZED`,
  NO_AUTHORIZED: `NO_AUTHORIZED`
};

export const AppRoute = {
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  ROOT: `/`,
  OFFER: `/offer/:id`
};

export const ApiRoute = {
  OFFERS: `/hotels`,
  REVIEWS: `/comments`,
  LOGIN: `/login`,
  NEAR_OFFERS: `/hotels/:id/nearby`,
  GET_FAVORITE: `/favorite`,
  POST_FAVORITE: `/favorite/:id/:status`
};

