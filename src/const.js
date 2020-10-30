export const Settings = {
  OFFERS_COUNT: 969,
  OFFERS_IMAGES_DISPLAY_LIMIT: 6,
  NEAR_OFFERS_DISPLAY_LIMIT: 3,
  REVIEW_TEXT_MIN_LENGTH: 50,
  RATING_STARS_COUNT: 5
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
  },
  PARIS: {
    lat: 48.866667,
    lng: 2.333333,
  },
  COLOGNE: {
    lat: 50.933333,
    lng: 6.95,
  },
  BRUSSELS: {
    lat: 50.833333,
    lng: 4.333333,
  },
  HAMBURG: {
    lat: 53.575323,
    lng: 10.01534,
  },
  DUSSELDORF: {
    lat: 51.228304,
    lng: 6.793849,
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

export const placeCardClassNames = {
  nearPlaces: {
    article: `near-places__card place-card`,
    wrapper: `near-places__image-wrapper place-card__image-wrapper`,
  },
  citiesPlaces: {
    article: `cities__place-card place-card`,
    wrapper: `cities__image-wrapper place-card__image-wrapper`,
  },
  favoritesPlaces: {
    article: `favorites__card place-card`,
    wrapper: `favorites__image-wrapper place-card__image-wrapper`,
  },
};
