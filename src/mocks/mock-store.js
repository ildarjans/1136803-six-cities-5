import configureStore from "redux-mock-store";
import {
  mockCityOffers,
  mockFavoritesOffers,
  mockOffers,
  mockReviews,
  mockUser
} from "./mock-data";

const createStore = configureStore();

const mockStoreTemplate = {
  OFFERS: {
    offers: mockOffers,
    cityOffers: mockCityOffers,
    loading: true,
    error: null
  },
  REVIEWS: {
    reviews: mockReviews,
    loading: false,
    error: null,
    posting: false
  },
  NEAR_OFFERS: {
    nearOffers: mockCityOffers.AMSTERDAM.slice(0, 3),
    loading: false,
    error: null
  },
  PROCESS: {
    activeCity: `AMSTERDAM`,
    hoveredOfferId: ``,
    sortType: ``
  },
  USER: {
    authorizationStatus: `NO_AUTHORIZED`,
    waitingAuthorizationResponse: false,
    error: null,
    user: mockUser
  },
  FAVORITES: {
    favoriteCityOffers: mockFavoritesOffers,
    updating: false,
    loading: false,
    error: null,
  }
};

export const mockStore = createStore(mockStoreTemplate);
