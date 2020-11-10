export const ActionType = {
  GET_OFFERS: `GET_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_ACTIVE_OFFER_ID: `CHANGE_ACTIVE_OFFER`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`
};

export const actionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  getOffers: (offers, city) => ({
    type: ActionType.GET_OFFERS,
    payload: offers.filter((offer) => offer.city === city)
  }),
  changeActiveOfferId: (id) => ({
    type: ActionType.CHANGE_ACTIVE_OFFER_ID,
    payload: id
  }),
  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType
  })
};
