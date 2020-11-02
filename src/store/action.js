export const ActionType = {
  GET_OFFERS: `GET_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_ACTIVE_OFFER: `CHANGE_ACTIVE_OFFER`
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
  changeActiveOffer: (offer) => ({
    type: ActionType.CHANGE_ACTIVE_OFFER,
    payload: offer
  }),
};
