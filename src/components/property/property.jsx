import React from "react";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getDecimalRating, getRatingWidth} from "../../utils";
import {offerPropTypes} from "../../prop-types/offer";
import {mapIconPropTypes} from "../../prop-types/map";
import {
  selectOffer,
  selectPropertyMapIcons,
  selectRouteId
} from "../../selectors/selectors";
import {processActionCreator} from "../../store/process/process-action";

import Map from "../map/map";
import {Header} from "../header/header";
import {PropertyGallery} from "../property-gallery/property-gallery";
import {NotFoundPage} from "../not-found-page/not-found-page";
import {PropertyReviews} from "../property-reviews/property-reviews";
import {NearPlaces} from "../near-places/near-places";
import {CityCoords, FAVORITE_BUTTON_OPTIONS} from "../../const";
import {FavoriteButton} from "../favorite-button/favorite-button";

export const PropertyComponent = ({offer, icons, id, setHoveredIcon}) => {
  if (!offer) {
    return <NotFoundPage/>;
  }

  React.useEffect(() => setHoveredIcon(+id), [+id]);

  const center = CityCoords[offer.city.name.toUpperCase()];

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

                <FavoriteButton
                  options={FAVORITE_BUTTON_OPTIONS.PROPERTY}
                  id={id}
                  isFavorite={offer.isFavorite}
                />

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
  offer: offerPropTypes.isRequired,
  icons: PropTypes.arrayOf(mapIconPropTypes.isRequired).isRequired,
  id: PropTypes.number.isRequired,
  setHoveredIcon: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  id: selectRouteId(props),
  offer: selectOffer(state, props),
  icons: selectPropertyMapIcons(state, props),
});

const mapDispatchToProps = (dispatch) => ({
  setHoveredIcon(id) {
    dispatch(processActionCreator.changeHoveredOfferId(id));
  }
});

export const Property = connect(mapStateToProps, mapDispatchToProps)(withRouter(PropertyComponent));
