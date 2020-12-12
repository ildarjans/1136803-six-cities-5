import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {mockCityOffers} from "../../mocks/mock-data";
import {PlaceCard} from "./place-card";

const PLACE_CARD_OPTION = {
  PLACE_LIST: {
    CLASSNAME_ARTICLE: `cities__place-card`,
    CLASSNAME_WRAPPER: `cities__place-card`,
    IMAGE_WIDTH: 260,
    IMAGE_HEIGHT: 200,
  },
  NEAR_LIST: {
    CLASSNAME_ARTICLE: `near-places__card`,
    CLASSNAME_WRAPPER: `near-places__image-wrapper`,
    IMAGE_WIDTH: 260,
    IMAGE_HEIGHT: 200,
  },
  FAVORITE_LIST: {
    CLASSNAME_ARTICLE: `favorites__card`,
    CLASSNAME_WRAPPER: `favorites__image-wrapper`,
    IMAGE_WIDTH: 150,
    IMAGE_HEIGHT: 110,
  },
};

const noop = () => {};

jest.mock(`../favorite-button/favorite-button`);

describe(`Should PlaceCard rendered correctly`, () => {
  it(`(1) render Favorites list implementation`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <PlaceCard
              offer={mockCityOffers.AMSTERDAM[0]}
              options={PLACE_CARD_OPTION.FAVORITE_LIST}
            />
          </BrowserRouter>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`(2) render Near list implementation`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <PlaceCard
              offer={mockCityOffers.AMSTERDAM[0]}
              options={PLACE_CARD_OPTION.NEAR_LIST}
              onActiveOfferChange={noop}
            />
          </BrowserRouter>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`(3) render Places list implementation`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <PlaceCard
              offer={mockCityOffers.AMSTERDAM[0]}
              options={PLACE_CARD_OPTION.PLACE_LIST}
              renderChild={noop}
              onActiveOfferChange={noop}
            />
          </BrowserRouter>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
