import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../services/api";
import {
  checkAuthStatus,
  fetchFavoritesOffers,
  fetchNearOffers,
  fetchOffers,
  fetchReviews,
  loginUser,
  postReview,
  updateFavoriteOffer
} from "./thunk-api";
import {ApiRoute, AppRoute} from "../const";
import {ActionType} from "../store/action-type";
import * as mockUtils from "../utils";

const fakeId = `3`;

const api = createAPI(()=>{});

describe(`Async fetchOffers works correctly`, () => {
  let mockApi;
  let dispatch;
  let offersLoader;
  beforeEach(() => {
    mockApi = new MockAdapter(api);
    dispatch = jest.fn();
    offersLoader = fetchOffers();
  });
  it(`fetchOffers success response`, () => {
    mockApi
      .onGet(ApiRoute.OFFERS)
      .reply(200, [{fakeOffer: true}]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.OFFERS_LOADING_START
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.OFFERS_LOADING_SUCCESS,
          payload: [{fakeOffer: true}]
        });
      });
  });
  it(`fetchOffers fail response`, () => {
    mockApi
      .onGet(ApiRoute.OFFERS)
      .reply(404, `error`);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.OFFERS_LOADING_START
        });
      })
      .catch(() => {
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.OFFERS_LOADING_FAIL,
          payload: `error`
        });
      });
  });
});

describe(`Async fetchNearOffers works correctly`, () => {
  let mockApi;
  let dispatch;
  let nearOffersLoader;
  beforeEach(() => {
    mockApi = new MockAdapter(api);
    dispatch = jest.fn();
    nearOffersLoader = fetchNearOffers(fakeId);
  });
  it(`fetchNearOffers success response`, () => {
    mockApi
      .onGet(ApiRoute.NEAR_OFFERS.replace(`:id`, fakeId))
      .reply(200, [{fakeNearOffers: true}]);

    return nearOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.NEAR_OFFERS_LOADING_START
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.NEAR_OFFERS_LOADING_SUCCESS,
          payload: [{fakeNearOffers: true}]
        });
      });
  });
  it(`fetchNearOffers fail response`, () => {
    mockApi
      .onGet(`${ApiRoute.REVIEWS}/${fakeId}`)
      .reply(404, `error`);

    return nearOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.NEAR_OFFERS_LOADING_START
        });
      })
      .catch(() => {
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.NEAR_OFFERS_LOADING_START,
          payload: `error`
        });
      });
  });
});

describe(`Async checkAuthStatus works correctly`, () => {
  let mockApi;
  let dispatch;
  let authStatusChecker;

  beforeEach(() => {
    mockApi = new MockAdapter(api);
    dispatch = jest.fn();
    authStatusChecker = checkAuthStatus();
  });

  it(`checkAuthStatus success response`, () => {
    mockApi
      .onGet(ApiRoute.LOGIN)
      .reply(200, {fakeUser: true});

    return authStatusChecker(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SEND_AUTHORIZATION_REQUEST
        });
      })
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_USER_LOGIN_PROFILE,
          payload: {fakeUser: true}
        });
      })
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.AUTHORIZATION_SUCCESS
        });
      })
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
      });
  });
  it(`checkAuthStatus fail response`, () => {
    mockApi
      .onGet(ApiRoute.LOGIN)
      .reply(404, `error`);

    return authStatusChecker(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SEND_AUTHORIZATION_REQUEST
        });
      })
      .catch(() => {
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.AUTHORIZATION_FAIL,
          payload: `error`
        });
      });
  });
});

describe(`Async fetchFavoritesOffers works correctly`, () => {
  let mockApi;
  let dispatch;
  let favoritesOffersLoader;
  beforeEach(() => {
    mockApi = new MockAdapter(api);
    dispatch = jest.fn();
    favoritesOffersLoader = fetchFavoritesOffers();
  });
  it(`fetchFavoritesOffers success response`, () => {
    mockApi
      .onGet(ApiRoute.GET_FAVORITE)
      .reply(200, [{fakeFavoritesOffers: true}]);

    return favoritesOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.FAVORITES_LOADING_START
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.FAVORITES_LOADING_SUCCESS,
          payload: [{fakeFavoritesOffers: true}]
        });
      });
  });
  it(`fetchFavoritesOffers fail response`, () => {
    mockApi
      .onGet(ApiRoute.GET_FAVORITE)
      .reply(404, `error`);

    return favoritesOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.FAVORITES_LOADING_START
        });
      })
      .catch(() => {
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.FAVORITES_LOADING_FAIL,
          payload: `error`
        });
      });
  });
});

describe(`Async loginUser works correctly`, () => {
  const userAuthData = {email: `example@mail.com`, password: `any`};
  let mockApi;
  let dispatch;
  let postLoginUser;

  beforeEach(() => {
    mockApi = new MockAdapter(api);
    dispatch = jest.fn();
    postLoginUser = loginUser(userAuthData);
  });

  it(`loginUser success response`, () => {
    mockApi
      .onPost(ApiRoute.LOGIN)
      .reply(200, {fakeUser: true});

    return postLoginUser(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SEND_AUTHORIZATION_REQUEST
        });
      })
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_USER_LOGIN_PROFILE,
          payload: {fakeUser: true}
        });
      })
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.AUTHORIZATION_SUCCESS
        });
      })
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.ROOT
        });
      });
  });
  it(`loginUser fail response`, () => {
    mockApi
      .onPost(ApiRoute.LOGIN, userAuthData)
      .reply(404, `error`);

    return postLoginUser(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SEND_AUTHORIZATION_REQUEST
        });
      })
      .catch(() => {
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.AUTHORIZATION_FAIL,
          payload: `error`
        });
      })
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.LOGIN
        });
      });
  });
});

describe(`Async fetchReviews works correctly`, () => {
  let mockApi;
  let dispatch;
  let reviewsLoader;
  beforeEach(() => {
    mockApi = new MockAdapter(api);
    dispatch = jest.fn();
    reviewsLoader = fetchReviews(fakeId);
  });
  it(`fetchReviews success response`, () => {
    mockApi
      .onGet(`${ApiRoute.REVIEWS}/${fakeId}`)
      .reply(200, [{fakeReviews: true}]);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REVIEWS_LOADING_START
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REVIEWS_LOADING_SUCCESS,
          payload: [{fakeReviews: true}]
        });
      });
  });
  it(`fetchReviews fail response`, () => {
    mockApi
      .onGet(`${ApiRoute.REVIEWS}/${fakeId}`)
      .reply(404, `error`);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REVIEWS_LOADING_START
        });
      })
      .catch(() => {
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REVIEWS_LOADING_FAIL,
          payload: `error`
        });
      });
  });
});

describe(`Async postReview works correctly`, () => {
  const userReview = {comment: `everything fine`, rating: 4};
  let mockApi;
  let dispatch;
  let postUserReview;

  beforeEach(() => {
    mockApi = new MockAdapter(api);
    dispatch = jest.fn();
    postUserReview = postReview(userReview, fakeId);
  });

  it(`postReview success response`, () => {
    mockApi
      .onPost(`${ApiRoute.REVIEWS}/${fakeId}`)
      .reply(200, [{review: true}]);

    return postUserReview(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REVIEW_POST_START
        });
      })
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REVIEWS_LOADING_SUCCESS,
          payload: [{review: true}]
        });
      });
  });
  it(`postReview fail response`, () => {
    mockApi
      .onPost(`${ApiRoute.REVIEWS}/${fakeId}`)
      .reply(404, `error`);

    return postUserReview(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REVIEW_POST_START
        });
      })
      .catch(() => {
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REVIEW_POST_FAIL,
          payload: `error`
        });
      });
  });
});

describe(`Async updateFavoriteOffer works correctly`, () => {
  let requestRoute;
  let mockApi;
  let dispatch;
  let adaptedOffer;
  beforeEach(() => {
    mockApi = new MockAdapter(api);
    dispatch = jest.fn();
    adaptedOffer = {fakeAdaptedOffer: true};
    requestRoute = ApiRoute.POST_FAVORITE
      .replace(`:id`, fakeId);
  });

  it(`remove FavoriteOffer with success response`, () => {
    const updateUserFavoriteOffer = updateFavoriteOffer(fakeId, 0);
    const adaptOffer = jest.spyOn(mockUtils, `adaptOfferToClient`);

    mockApi
      .onPost(requestRoute.replace(`:status`, 0))
      .reply(200);

    adaptOffer.mockReturnValue((adaptedOffer));
    return updateUserFavoriteOffer(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.FAVORITE_OFFER_UPDATE_START
        });
        expect(adaptOffer()).toEqual(adaptedOffer);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.UPDATE_OFFER,
          payload: (adaptedOffer)
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.UPDATE_CITY_OFFER,
          payload: (adaptedOffer)
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.FAVORITE_OFFER_REMOVE,
          payload: (adaptedOffer)
        });
      })
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(5, {
          type: ActionType.FAVORITE_OFFER_UPDATE_SUCCESS
        });
      });
  });
  it(`add FavoriteOffer with success response`, () => {
    const updateUserFavoriteOffer = updateFavoriteOffer(fakeId, 1);
    const adaptOffer = jest.spyOn(mockUtils, `adaptOfferToClient`);

    mockApi
      .onPost(requestRoute.replace(`:status`, 1))
      .reply(200);

    adaptOffer.mockReturnValue(adaptedOffer);
    return updateUserFavoriteOffer(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.FAVORITE_OFFER_UPDATE_START
        });
        expect(adaptOffer()).toStrictEqual(adaptedOffer);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.UPDATE_OFFER,
          payload: adaptedOffer
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.UPDATE_CITY_OFFER,
          payload: adaptedOffer
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.FAVORITE_OFFER_ADD,
          payload: adaptedOffer
        });
      })
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(5, {
          type: ActionType.FAVORITE_OFFER_UPDATE_SUCCESS
        });
      });
  });
  it(`fail updateFavoriteOffer request with any status`, () => {
    const updateUserFavoriteOffer = updateFavoriteOffer(fakeId, 0);

    mockApi
      .onPost(requestRoute.replace(`:status`, 0))
      .reply(404, `error`);

    return updateUserFavoriteOffer(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.FAVORITE_OFFER_UPDATE_START
        });
      })
      .catch(() => {
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.FAVORITE_OFFER_UPDATE_FAIL,
          payload: `error`
        });
      });
  });
});
