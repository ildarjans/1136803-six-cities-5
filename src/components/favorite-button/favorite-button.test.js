import React from "react";
import renderer from "react-test-renderer";

import {FAVORITE_BUTTON_OPTIONS} from "../../mocks/mock-data";

import {FavoriteButtonComponent} from "./favorite-button";

const noop = () => {};

describe(`Should favorite button rendered correctly`, () => {
  it(`(1) render Place card implementation if favorite`, () => {
    const tree = renderer
      .create(
          <FavoriteButtonComponent
            options={FAVORITE_BUTTON_OPTIONS.PLACE_CARD}
            updateOfferFavoriteField={noop}
            redirectLoginPage={noop}
            isFavorite={true}
            isAuth={true}
            id={1}
          />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`(2) render Place card implementation if not favorite`, () => {
    const tree = renderer
      .create(
          <FavoriteButtonComponent
            options={FAVORITE_BUTTON_OPTIONS.PLACE_CARD}
            updateOfferFavoriteField={noop}
            redirectLoginPage={noop}
            isFavorite={false}
            isAuth={false}
            id={1}
          />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`(3) render Property page implementation if favorite`, () => {
    const tree = renderer
      .create(
          <FavoriteButtonComponent
            options={FAVORITE_BUTTON_OPTIONS.PROPERTY}
            updateOfferFavoriteField={noop}
            redirectLoginPage={noop}
            isFavorite={true}
            isAuth={true}
            id={1}
          />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`(4) render Property page implementation if not favorite`, () => {
    const tree = renderer
      .create(
          <FavoriteButtonComponent
            options={FAVORITE_BUTTON_OPTIONS.PROPERTY}
            updateOfferFavoriteField={noop}
            redirectLoginPage={noop}
            isFavorite={false}
            isAuth={false}
            id={1}
          />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
