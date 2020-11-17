export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_ACTIVE_OFFER_ID: `CHANGE_ACTIVE_OFFER_ID`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  GET_HOTELS: `GET_HOTELS`,
  GET_REVIEWS: `GET_REVIEWS`,
  GET_NEAR_HOTELS: `GET_NEAR_HOTELS`,
};

export const actionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  changeActiveOfferId: (id) => ({
    type: ActionType.CHANGE_ACTIVE_OFFER_ID,
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
  })
};
