import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {
  selectFavoriteCityOffers,
  selectIsEmptyFavorites
} from "../../selectors/selectors";

import Header from "../header/header";
import {Footer} from "../footer/footer";
import {FavoritesItem} from "../favorites-item/favorites-item";
import {FavoritesEmpty} from "../favorites-empty/favorites-empty";
import {offerPropTypes} from "../../prop-types/offer";

const CLASSNAME_EMPTY = `page--favorites-empty`;

export const FavoritesPage = ({favoriteCityOffers, isEmpty}) => {
  return (
    <div className={`page ${isEmpty ? CLASSNAME_EMPTY : ``}`}>

      <Header/>

      {isEmpty ?
        <FavoritesEmpty/> :
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.entries(favoriteCityOffers).map(([city, offers], i) => (
                  offers.length !== 0
                  &&
                  <FavoritesItem
                    key={`${i}-${city}`}
                    city={city}
                    offers={offers}
                  />
                ))
                }
              </ul>
            </section>
          </div>
        </main>
      }

      <Footer/>

    </div>
  );
};

FavoritesPage.propTypes = ({
  favoriteCityOffers: PropTypes.objectOf(PropTypes.arrayOf(offerPropTypes.isRequired)).isRequired,
  isEmpty: PropTypes.bool.isRequired
});

const mapStateToProps = (state) => ({
  favoriteCityOffers: selectFavoriteCityOffers(state),
  isEmpty: selectIsEmptyFavorites(state),
});

export default connect(mapStateToProps)(FavoritesPage);
