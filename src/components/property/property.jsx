import React from "react";
import PropTypes from "prop-types";
import {Header} from "../header/header";
import {PlaceCard} from "../place-card/place-card";
import {offerPropTypes} from "../../prop-validation/offer-prop-types";
import {Settings} from "../../const";
import {UnFoundPage} from "../unfound-page/unfound-page";
import {reviewPropTypes} from "../../prop-validation/review-prop-types";
import {PropertyGallery} from "../property-gallery/property-gallery";
import {PropertyReviews} from "../property-reviews/property-reviews";

export class Property extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id
    };

    this._handleNeighbourhoodOfferClick = this._handleNeighbourhoodOfferClick.bind(this);
  }

  _handleNeighbourhoodOfferClick(id) {
    this.setState({
      id
    });
  }

  render() {
    const {offers, reviews} = this.props;
    const {id} = this.state;
    const offer = offers.filter((off) => off.id === id)[0];

    if (!offer) {
      return (
        <UnFoundPage/>
      );
    }
    const {
      title,
      premium,
      rating,
      type,
      bedrooms,
      guests,
      price,
      description,
      features,
      owner,
    } = offer;
    const ratingToSpanWidth = Math.round(100 / 5 * rating);
    const decimalRating = Math.round(rating * 10) / 10;

    const neighbourhoodOffers = offers.slice(0, Settings.NEIGHBOURHOOD_OFFERS_DISPLAY_LIMIT);

    return (
      <div className="page">
        <Header/>

        <main className="page__main page__main--property">
          <section className="property">
            <PropertyGallery offer={offer}/>
            <div className="property__container container">
              <div className="property__wrapper">

                {premium &&
                (<div className="property__mark">
                  <span>Premium</span>
                </div>)}

                <div className="property__name-wrapper">
                  <h1 className="property__name">{title}</h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"/>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${ratingToSpanWidth}%`}}/>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{decimalRating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms}
                  </li>
                  <li className="property__feature property__feature--adults">
                    {guests}
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">

                    {features.map((feature, i) => {
                      return (
                        <li className="property__inside-item" key={`${feature}-${i}`}>
                          {feature}
                        </li>
                      );
                    })}

                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={owner.avatar} width="74" height="74"
                        alt={`${owner.name} avatar`}/>
                    </div>
                    <span className="property__user-name">
                      {owner.name}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>

                <PropertyReviews reviews={reviews}/>

              </div>
            </div>
            <section className="property__map map"/>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {neighbourhoodOffers.map((nOffer) => (
                  <PlaceCard
                    key={nOffer.id}
                    offer={nOffer}
                    onClick={this._handleNeighbourhoodOfferClick}/>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}


Property.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  offers: PropTypes.arrayOf(offerPropTypes),
  reviews: PropTypes.arrayOf(reviewPropTypes),
};
