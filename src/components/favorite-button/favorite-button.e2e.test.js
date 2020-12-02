import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FavoriteButtonComponent} from "./favorite-button";
import {FAVORITE_BUTTON_OPTIONS} from "../../mocks/mock-data";

configure({adapter: new Adapter()});

describe(`Should FavoriteButton behavior correct`, () => {
  let updateOfferFavoriteField;
  let redirectLoginPage;
  beforeEach(() => {
    updateOfferFavoriteField = jest.fn(() => Promise.resolve());
    redirectLoginPage = jest.fn();
  });

  it(`then is auth favorite button clicked`, () => {
    const button = shallow(
        <FavoriteButtonComponent
          updateOfferFavoriteField={updateOfferFavoriteField}
          redirectLoginPage={redirectLoginPage}
          options={FAVORITE_BUTTON_OPTIONS.PLACE_CARD}
          isFavorite={true}
          isAuth={true}
          id={1}
        />
    );
    button.simulate(`click`);
    expect(redirectLoginPage).toHaveBeenCalledTimes(0);
    expect(updateOfferFavoriteField).toHaveBeenCalledTimes(1);
  });
  it(`then is not auth favorite button clicked`, () => {
    const button = shallow(
        <FavoriteButtonComponent
          updateOfferFavoriteField={updateOfferFavoriteField}
          redirectLoginPage={redirectLoginPage}
          options={FAVORITE_BUTTON_OPTIONS.PLACE_CARD}
          isFavorite={true}
          isAuth={false}
          id={1}
        />
    );
    button.simulate(`click`);
    expect(redirectLoginPage).toHaveBeenCalledTimes(1);
    expect(updateOfferFavoriteField).toHaveBeenCalledTimes(0);
  });
});
