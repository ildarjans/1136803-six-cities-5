import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getDecimalRating, getRatingWidth} from "../../utils";
import {offerPropTypes} from "../../prop-types/offer";
import {mapCenterPropTypes, mapIconPropTypes} from "../../prop-types/map";
import {
  selectMapCenter,
  selectOffer,
  selectPropertyMapIcons
} from "../../selectors/offers";

import {Header} from "../header/header";
import {PropertyGallery} from "../property-gallery/property-gallery";
import {NotFoundPage} from "../not-found-page/not-found-page";
import {Map} from "../map/map";
import {PropertyReviews} from "../property-reviews/property-reviews";
import {NearPlaces} from "../near-places/near-places";

export const PropertyComponent = (props) => {
  const {offers, center, icons} = props;
  const {id} = props.match.params;
  const offer = offers[id];

  if (!offer) {
    return <NotFoundPage/>;
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
                <button className="property__bookmark-button button"
                  type="button">
                  <svg className="property__bookmark-icon" width="31"
                    height="33">
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
                      <li className="property__inside-item"
                        key={`${good}-${i}`}>
                        {good}
                      </li>
                    );
                  })}

                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar"
                      src={offer.host.avatarUrl} width="74" height="74"
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

              <PropertyReviews id={id}/>

            </div>
          </div>
          <section className="property__map map">
            <Map center={center} icons={icons}/>
          </section>
        </section>

        <NearPlaces id={id}/>

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
  offers: PropTypes.objectOf(offerPropTypes.isRequired).isRequired,
  center: mapCenterPropTypes.isRequired,
  icons: PropTypes.arrayOf(mapIconPropTypes.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  offers: selectOffer(state),
  center: selectMapCenter(state),
  icons: selectPropertyMapIcons(state),
});

export const Property = connect(mapStateToProps)(PropertyComponent);
