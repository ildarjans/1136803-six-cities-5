import {favoritesReducer} from "./favorites-reducer";
import {ActionType} from "../action-type";
import {
  mockCityOffers,
  mockError,
  mockResponseOffers
} from "../../mocks/mock-data";


const mockFavoriteCityOffers = {
  AMSTERDAM: [
    {
      city: {
        name: `Amsterdam`,
        location: {
          latitude: 52.38333,
          longitude: 4.9,
          zoom: 12
        }
      },
      id: 73,
      images: [
        `http://picsum.photos/248/152?r=0.0922933754368811`,
        `http://picsum.photos/248/152?r=0.897019347231856`
      ],
      previewImage: `http://picsum.photos/248/152?r=0.16844568825898554`,
      isFavorite: true,
      isPremium: false,
      price: 2523,
      title: `Big company apartment`,
      type: `apartment`,
      rating: 1,
      description: `Et malesuada fames ac turpis egestas integer eget aliquet nibh`,
      bedrooms: 2,
      maxAdults: 9,
      goods: [
        [
          `Washer`,
          `Heating`,
          `Gym`
        ]
      ],
      host: {
        id: 17,
        avatarUrl: `/public/img/avatar-angelina.jpg`,
        name: `Christopher Jones`,
        isPro: true
      },
      location: {
        latitude: 52.37333,
        longitude: 4.86,
        zoom: 12
      }
    },
  ],
};

const mockAddedFavoriteCityOffers = {
  AMSTERDAM: [
    {
      city: {
        name: `Amsterdam`,
        location: {
          latitude: 52.38333,
          longitude: 4.9,
          zoom: 12
        }
      },
      id: 73,
      images: [
        `http://picsum.photos/248/152?r=0.0922933754368811`,
        `http://picsum.photos/248/152?r=0.897019347231856`
      ],
      previewImage: `http://picsum.photos/248/152?r=0.16844568825898554`,
      isFavorite: true,
      isPremium: false,
      price: 2523,
      title: `Big company apartment`,
      type: `apartment`,
      rating: 1,
      description: `Et malesuada fames ac turpis egestas integer eget aliquet nibh`,
      bedrooms: 2,
      maxAdults: 9,
      goods: [
        [
          `Washer`,
          `Heating`,
          `Gym`
        ]
      ],
      host: {
        id: 17,
        avatarUrl: `/public/img/avatar-angelina.jpg`,
        name: `Christopher Jones`,
        isPro: true
      },
      location: {
        latitude: 52.37333,
        longitude: 4.86,
        zoom: 12
      }
    },
    {
      city: {
        name: `Amsterdam`,
        location: {
          latitude: 52.38333,
          longitude: 4.9,
          zoom: 12
        }
      },
      id: 85,
      images: [
        `http://picsum.photos/248/152?r=0.45448580373366476`,
        `http://picsum.photos/248/152?r=0.731415434249594`
      ],
      previewImage: `http://picsum.photos/248/152?r=0.34977443093807237`,
      isFavorite: true,
      isPremium: true,
      price: 3585,
      title: `Big company apartment`,
      type: `room`,
      rating: 0,
      description: `Eu turpis egestas pretium aenean pharetra magna ac`,
      bedrooms: 3,
      maxAdults: 10,
      goods: [
        [
          `Washer`,
          `Heating`,
          `Towels`
        ]
      ],
      host: {
        id: 26,
        avatarUrl: `/public/img/avatar-angelina.jpg`,
        name: `Christopher Jackson`,
        isPro: true
      },
      location: {
        latitude: 52.35333,
        longitude: 4.95,
        zoom: 12
      }
    }
  ],
};

const mockInitialState = {
  favoriteCityOffers: {},
  updating: false,
  loading: false,
  error: null
};

const mockFavoriteOffer85 = {
  city: {
    name: `Amsterdam`,
    location: {
      latitude: 52.38333,
      longitude: 4.9,
      zoom: 12
    }
  },
  id: 85,
  images: [
    `http://picsum.photos/248/152?r=0.45448580373366476`,
    `http://picsum.photos/248/152?r=0.731415434249594`
  ],
  previewImage: `http://picsum.photos/248/152?r=0.34977443093807237`,
  isFavorite: true,
  isPremium: true,
  price: 3585,
  title: `Big company apartment`,
  type: `room`,
  rating: 0,
  description: `Eu turpis egestas pretium aenean pharetra magna ac`,
  bedrooms: 3,
  maxAdults: 10,
  goods: [
    [
      `Washer`,
      `Heating`,
      `Towels`
    ]
  ],
  host: {
    id: 26,
    avatarUrl: `/public/img/avatar-angelina.jpg`,
    name: `Christopher Jackson`,
    isPro: true
  },
  location: {
    latitude: 52.35333,
    longitude: 4.95,
    zoom: 12
  }
};

const mockNotFavoriteOffer85 = {
  city: {
    name: `Amsterdam`,
    location: {
      latitude: 52.38333,
      longitude: 4.9,
      zoom: 12
    }
  },
  id: 85,
  images: [
    `http://picsum.photos/248/152?r=0.45448580373366476`,
    `http://picsum.photos/248/152?r=0.731415434249594`
  ],
  previewImage: `http://picsum.photos/248/152?r=0.34977443093807237`,
  isFavorite: false,
  isPremium: true,
  price: 3585,
  title: `Big company apartment`,
  type: `room`,
  rating: 0,
  description: `Eu turpis egestas pretium aenean pharetra magna ac`,
  bedrooms: 3,
  maxAdults: 10,
  goods: [
    [
      `Washer`,
      `Heating`,
      `Towels`
    ]
  ],
  host: {
    id: 26,
    avatarUrl: `/public/img/avatar-angelina.jpg`,
    name: `Christopher Jackson`,
    isPro: true
  },
  location: {
    latitude: 52.35333,
    longitude: 4.95,
    zoom: 12
  }
};

describe(`Should favoritesReducer works correctly`, () => {
  it(`favoriteReducer without parameters returns initial state`, () => {
    expect(favoritesReducer(void 0, {})).toEqual(mockInitialState);
  });
  it(`favoriteReducer with FAVORITES_LOADING_START action`, () => {
    const state = favoritesReducer(mockInitialState, {
      type: ActionType.FAVORITES_LOADING_START
    });
    expect(state).toEqual({
      favoriteCityOffers: {},
      updating: false,
      loading: true,
      error: null
    });
  });
  it(`favoriteReducer with FAVORITES_LOADING_SUCCESS action`, () => {
    const state = favoritesReducer(mockInitialState, {
      type: ActionType.FAVORITES_LOADING_SUCCESS,
      payload: mockResponseOffers
    });
    expect(state).toEqual({
      favoriteCityOffers: mockCityOffers,
      updating: false,
      loading: false,
      error: null
    });
  });
  it(`favoriteReducer with FAVORITES_LOADING_FAIL action`, () => {
    const state = favoritesReducer(mockInitialState, {
      type: ActionType.FAVORITES_LOADING_FAIL,
      payload: mockError
    });
    expect(state).toEqual({
      favoriteCityOffers: {},
      updating: false,
      loading: false,
      error: mockError
    });
  });
  it(`favoriteReducer with FAVORITE_OFFER_UPDATE_START action`, () => {
    const state = favoritesReducer(mockInitialState, {
      type: ActionType.FAVORITE_OFFER_UPDATE_START,
    });
    expect(state).toEqual({
      favoriteCityOffers: {},
      updating: true,
      loading: false,
      error: null
    });
  });
  it(`favoriteReducer with FAVORITE_OFFER_UPDATE_SUCCESS action`, () => {
    const state = favoritesReducer(mockInitialState, {
      type: ActionType.FAVORITE_OFFER_UPDATE_SUCCESS,
    });
    expect(state).toEqual({
      favoriteCityOffers: {},
      updating: false,
      loading: false,
      error: null
    });
  });
  it(`favoriteReducer with FAVORITE_OFFER_UPDATE_FAIL action`, () => {
    const state = favoritesReducer(mockInitialState, {
      type: ActionType.FAVORITE_OFFER_UPDATE_FAIL,
      payload: mockError
    });
    expect(state).toEqual({
      favoriteCityOffers: {},
      updating: false,
      loading: false,
      error: mockError
    });
  });
  it(`favoriteReducer with FAVORITE_OFFER_ADD action`, () => {
    const state = favoritesReducer({
      favoriteCityOffers: mockFavoriteCityOffers,
      updating: false,
      loading: false,
      error: null
    }, {
      type: ActionType.FAVORITE_OFFER_ADD,
      payload: mockFavoriteOffer85
    });
    expect(state).toEqual({
      favoriteCityOffers: mockAddedFavoriteCityOffers,
      updating: false,
      loading: false,
      error: null
    });
  });
  it(`favoriteReducer with FAVORITE_OFFER_REMOVE action`, () => {
    const state = favoritesReducer({
      favoriteCityOffers: mockAddedFavoriteCityOffers,
      updating: false,
      loading: false,
      error: null
    }, {
      type: ActionType.FAVORITE_OFFER_REMOVE,
      payload: mockNotFavoriteOffer85
    });
    expect(state).toEqual({
      favoriteCityOffers: mockFavoriteCityOffers,
      updating: false,
      loading: false,
      error: null
    });
  });
});
