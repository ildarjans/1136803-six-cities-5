import {ApiRoute, AppRoute} from "../const";
import {offersActionCreator} from "../store/offers/offers-action";
import {reviewsActionCreator} from "../store/reviews/reviews-action";
import {nearOffersActionCreator} from "../store/near-offers/near-offers-action";
import {userActionCreator} from "../store/user/user-action";
import {processActionCreator} from "../store/process/process-action";
import {favoritesActionCreator} from "../store/favorites/favorites-action";
import {adaptOfferToClient} from "../utils";

export const fetchOffers = () => (dispatch, _getState, api) => {
  dispatch(offersActionCreator.offersLoadingStart());
  return api
    .get(ApiRoute.OFFERS)
    .then(({data}) => dispatch(offersActionCreator.offersLoadingSuccess(data)))
    .catch((err) => dispatch(offersActionCreator.offersLoadingFail(err.status)));
};

export const fetchNearOffers = (id) => (dispatch, _getState, api) => {
  dispatch(nearOffersActionCreator.nearOffersLoadingStart());
  return api
    .get(ApiRoute.NEAR_OFFERS.replace(`:id`, id))
    .then(({data}) => dispatch(nearOffersActionCreator.nearOffersLoadingSuccess(data)))
    .catch((err) => dispatch(nearOffersActionCreator.nearOffersLoadingFail(err.message)));
};

export const checkAuthStatus = () => (dispatch, _getState, api) => {
  dispatch(userActionCreator.requireAuthorizationStatus());
  return api
    .get(ApiRoute.LOGIN)
    .then(({data}) => dispatch(userActionCreator.setUserLoginProfile(data)))
    .then(() => dispatch(userActionCreator.authorizationSuccess()))
    .then(() => dispatch(fetchFavoritesOffers()))
    .catch((err) => dispatch(userActionCreator.authorizationFail(err.message)));
};

export const loginUser = ({email, password}) => (dispatch, _getState, api) => {
  dispatch(userActionCreator.requireAuthorizationStatus());
  return api
    .post(ApiRoute.LOGIN, {email, password})
    .then(({data}) => dispatch(userActionCreator.setUserLoginProfile(data)))
    .then(() => dispatch(userActionCreator.authorizationSuccess()))
    .then(() => dispatch(processActionCreator.redirectToRoute(AppRoute.ROOT)))
    .catch((err) => {
      dispatch(userActionCreator.authorizationFail(err.status));
      dispatch(processActionCreator.redirectToRoute(AppRoute.LOGIN));
    });
};

export const fetchReviews = (id) => (dispatch, _getState, api) => {
  dispatch(reviewsActionCreator.reviewsLoadingStart());
  return api
    .get(`${ApiRoute.REVIEWS}/${id}`)
    .then(({data}) => dispatch(reviewsActionCreator.reviewsLoadingSuccess(data)))
    .catch((err) => dispatch(reviewsActionCreator.reviewsLoadingFail(err.status)));
};

export const postReview = ({comment, rating}, id) => (dispatch, _getState, api) => {
  dispatch(reviewsActionCreator.reviewPostStart());
  return api
    .post(`${ApiRoute.REVIEWS}/${id}`, {comment, rating})
    .then(({data}) => dispatch(reviewsActionCreator.reviewsLoadingSuccess(data)))
    .catch((err) => dispatch(reviewsActionCreator.reviewPostFail(err.message)));
};

export const fetchFavoritesOffers = () => (dispatch, _getState, api) => {
  dispatch(favoritesActionCreator.favoritesLoadingStart());
  return api
    .get(ApiRoute.GET_FAVORITE)
    .then(({data}) => dispatch(favoritesActionCreator.favoritesLoadingSuccess(data)))
    .catch((err) => dispatch(favoritesActionCreator.favoriteOfferUpdateFail(err.message)));
};

export const updateFavoriteOffer = (id, status) => (dispatch, _getState, api) => {
  const route = ApiRoute.POST_FAVORITE
    .replace(`:id`, id)
    .replace(`:status`, status);
  dispatch(favoritesActionCreator.favoriteOfferUpdateStart());
  return api
    .post(route)
    .then(({data}) => {
      const adaptedOffer = adaptOfferToClient(data);
      dispatch(offersActionCreator.updateOffer(adaptedOffer));
      dispatch(offersActionCreator.updateCityOffer(adaptedOffer));
      if (status) {
        dispatch(favoritesActionCreator.addFavoriteOffer(adaptedOffer));
      } else {
        dispatch(favoritesActionCreator.removeFavoriteOffer(adaptedOffer));
      }
    })
    .then(()=> dispatch(favoritesActionCreator.favoriteOfferUpdateSuccess()))
    .catch((err) => dispatch(favoritesActionCreator.favoriteOfferUpdateFail(err.message)));
};
