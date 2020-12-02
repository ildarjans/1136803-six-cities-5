import React from "react";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import renderer from "react-test-renderer";

import {mockFavoritesOffers} from "../../mocks/mock-data";
import {mockStore} from "../../mocks/mock-store";

import {FavoritesPlaces} from "./favorites-places";

it(`Should Favorites list rendered correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <MemoryRouter>
            <FavoritesPlaces
              offers={mockFavoritesOffers.DUSSELDORF}
            />
          </MemoryRouter>
        </Provider>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
