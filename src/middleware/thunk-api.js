import {ApiRoute, AppRoute} from "../const";
import {offersActionCreator} from "../store/offers/offers-action";
import {reviewsActionCreator} from "../store/reviews/reviews-action";
import {nearOffersActionCreator} from "../store/near-offers/near-offers-action";
import {authActionCreator} from "../store/user/user-action";
import {processActionCreator} from "../store/process/process-action";

export const fetchOffers = () => (dispatch, getState, api) => {
  dispatch(offersActionCreator.offersLoadingStart());
  return api
    .get(ApiRoute.OFFERS)
    .then(({data}) => {
      dispatch(offersActionCreator.offersLoadingSuccess(data));
    })
    .catch((err) => {
      dispatch(offersActionCreator.offersLoadingFail(err.status));
    });
};

export const fetchReviews = (id) => (dispatch, getState, api) => {
  dispatch(reviewsActionCreator.reviewsLoadingStart());
  return api
    .get(`${ApiRoute.REVIEWS}/${id}`)
    .then(({data}) => {
      dispatch(reviewsActionCreator.reviewsLoadingSuccess(data));
    })
    .catch((err) => {
      dispatch(reviewsActionCreator.reviewsLoadingFail(err));
    });
};

export const fetchNearOffers = (id) => (dispatch, getState, api) => {
  dispatch(nearOffersActionCreator.nearOffersLoadingStart());
  return api
    .get(ApiRoute.NEAR_OFFERS.replace(`:id`, id))
    .then(({data}) => {
      dispatch(nearOffersActionCreator.nearOffersLoadingSuccess(data));
    })
    .catch((err) => {
      dispatch(nearOffersActionCreator.nearOffersLoadingFail(err));
    });
};

export const checkAuthStatus = () => (dispatch, getState, api) => {
  dispatch(authActionCreator.requireAuthorizationStatus());
  return api
    .get(ApiRoute.LOGIN)
    .then(() => {
      dispatch(authActionCreator.authorizationSuccess());
    })
    .catch(() => {
      dispatch(authActionCreator.authorizationFail());
    });
};

export const loginUser = ({email, password}) => (dispatch, getState, api) => {
  dispatch(authActionCreator.requireAuthorizationStatus());
  return api
    .post(ApiRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(authActionCreator.authorizationSuccess());
      dispatch(authActionCreator.setUserLoginProfile(data));
    })
    .then(() => dispatch(processActionCreator.redirectToRoute(AppRoute.ROOT)))
    .catch(() => {
      dispatch(authActionCreator.authorizationFail());
      dispatch(processActionCreator.redirectToRoute(AppRoute.LOGIN));
    });
};
