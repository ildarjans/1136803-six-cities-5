import React from "react";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import renderer from "react-test-renderer";

import {mockStore} from "../../mocks/mock-store";
import {mockFavoritesOffers} from "../../mocks/mock-data";

import {FavoritesItem} from "./favorites-item";

const city = `AMSTERDAM`;

it(`Should Favorites item rendered correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <MemoryRouter>
            <FavoritesItem
              city={city}
              offers={mockFavoritesOffers.AMSTERDAM}
            />
          </MemoryRouter>
        </Provider>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
