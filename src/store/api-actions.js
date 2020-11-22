import {ApiRoute, AppRoute, AuthorizationStatus} from "../const";
import {actionCreator} from "./actions";

export const fetchHotels = () => (dispatch, getState, api) => {
  return api
    .get(ApiRoute.HOTELS)
    .then(({data}) => {
      dispatch(actionCreator.getHotels(data));
    });
};

export const fetchHotelReviews = (id) => (dispatch, getState, api) => {
  return api
    .get(`${ApiRoute.REVIEWS}/${id}`)
    .then(({data}) => {
      dispatch(actionCreator.getHotelReviews(data));
    });
};

export const fetchNearOffersById = (id) => (dispatch, getState, api) => {
  return api
    .get(ApiRoute.NEAR_OFFERS.replace(`:id`, id))
    .then(({data}) => {
      dispatch(actionCreator.getNearHotels(data));
    });
};

export const checkAuthStatus = () => (dispatch, getState, api) => {
  return api
    .get(ApiRoute.LOGIN)
    .then(() => {
      dispatch(actionCreator.setAuthorizationStatus(AuthorizationStatus.AUTH));
    })
    .catch(() => {});
};

export const loginUser = ({email, password}) => (dispatch, getState, api) => {
  return api
    .post(ApiRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(actionCreator.setAuthorizationStatus(AuthorizationStatus.AUTH));
      dispatch(actionCreator.setUserAuthData(data));
    })
    .then(() => dispatch(actionCreator.redirectToRoute(AppRoute.ROOT)))
    .catch(() => dispatch(actionCreator.redirectToRoute(AppRoute.LOGIN)));
};
