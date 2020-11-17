import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getRatingWidth, getDecimalRating} from "../../utils";
import {offerPropTypes} from "../../prop-types/offer";
import {mapCenterPropTypes, mapIconPropTypes} from "../../prop-types/map";
import {
  selectCityOffers,
  selectMapCenter,
  selectMemoizePropertyMapIcons
} from "../../selectors/offers";
import {fetchHotelReviews, fetchNearOffersById} from "../../store/api-actions";

import {Header} from "../header/header";
import {NearPlaces} from "../near-places/near-places";
import {PropertyGallery} from "../property-gallery/property-gallery";
import {NotFoundPage} from "../not-found-page/not-found-page";
import {PropertyReviews} from "../property-reviews/property-reviews";
import {Map} from "../map/map";

export const PropertyComponent = (props) => {
  const {offers, center, icons, fetchNearOffers, fetchReviews} = props;
  const {id} = props.match.params;
  const offer = offers.find((it) => it.id === +id);

  fetchReviews(id);
  fetchNearOffers(id);

  if (!offer) {
    return (
      <NotFoundPage/>
    );
  }

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--property">
        <section className="property">
          <PropertyGallery offer={offer}/>
          <div className="property__container container">
            <div className="property__wrapper">

              {offer.isPremium &&
                (<div className="property__mark">
                  <span>Premium</span>
                </div>)}

              <div className="property__name-wrapper">
                <h1 className="property__name">{offer.title}</h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getRatingWidth(offer.rating)}%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {getDecimalRating(offer.rating)}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms}
                </li>
                <li className="property__feature property__feature--adults">
                  {offer.maxAdults}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">

                  {offer.goods.map((good, i) => {
                    return (
                      <li className="property__inside-item" key={`${good}-${i}`}>
                        {good}
                      </li>
                    );
                  })}

                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74"
                      alt={`${offer.host.name} avatar`}/>
                  </div>
                  <span className="property__user-name">
                    {offer.host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>

              <PropertyReviews />

            </div>
          </div>
          <section className="property__map map">
            <Map center={center} icons={icons}/>
          </section>
        </section>

        <NearPlaces/>

      </main>
    </div>
  );
};

PropertyComponent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  offers: PropTypes.arrayOf(offerPropTypes.isRequired).isRequired,
  center: mapCenterPropTypes.isRequired,
  icons: PropTypes.arrayOf(mapIconPropTypes.isRequired).isRequired,
  fetchReviews: PropTypes.func.isRequired,
  fetchNearOffers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: selectCityOffers(state),
  center: selectMapCenter(state),
  icons: selectMemoizePropertyMapIcons(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchReviews(hotelId) {
    dispatch(fetchHotelReviews(hotelId));
  },
  fetchNearOffers(hotelId) {
    dispatch(fetchNearOffersById(hotelId));
  }
});

export const Property = connect(mapStateToProps, mapDispatchToProps)(PropertyComponent);
