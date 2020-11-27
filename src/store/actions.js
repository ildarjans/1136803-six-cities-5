export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_HOVERED_OFFER_ID: `CHANGE_HOVERED_OFFER_ID`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  GET_HOTELS: `GET_HOTELS`,
  GET_REVIEWS: `GET_REVIEWS`,
  GET_NEAR_HOTELS: `GET_NEAR_HOTELS`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SET_AUTH_USER: `SET_AUTH_USER`
};

export const actionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  changeHoveredOfferId: (id) => ({
    type: ActionType.CHANGE_HOVERED_OFFER_ID,
    payload: id
  }),
  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType
  }),
  getHotels: (hotels) => ({
    type: ActionType.GET_HOTELS,
    payload: hotels,
  }),
  getHotelReviews: (reviews) => ({
    type: ActionType.GET_REVIEWS,
    payload: reviews
  }),
  getNearHotels: (hotels) => ({
    type: ActionType.GET_NEAR_HOTELS,
    payload: hotels
  }),
  setAuthorizationStatus: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status
  }),
  setUserAuthData: (data) => ({
    type: ActionType.SET_AUTH_USER,
    payload: data
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url
  })
};
