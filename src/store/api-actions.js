import {ApiRoute} from "../const";
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
    .get(`${ApiRoute.NEAR_OFFERS.replace(`id`, id)}`)
    .then(({data}) => {
      dispatch(actionCreator.getNearHotels(data));
    });
};

