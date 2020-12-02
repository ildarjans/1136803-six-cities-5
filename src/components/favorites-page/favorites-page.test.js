import React from "react";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {mockFavoritesOffers} from "../../mocks/mock-data";
import {mockStore} from "../../mocks/mock-store";
import {FavoritesPage} from "./favorites-page";

describe(`Should FavoritePage rendered correctly`, () => {
  it(`rendered empty favorites page correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={mockStore}>
            <MemoryRouter>
              <FavoritesPage
                favoriteCityOffers={{}}
                isEmpty={true}
              />
            </MemoryRouter>
          </Provider>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`rendered normal favorites page correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={mockStore}>
            <MemoryRouter>
              <FavoritesPage
                favoriteCityOffers={mockFavoritesOffers}
                isEmpty={false}
              />
            </MemoryRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
