import React from "react";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import renderer from "react-test-renderer";

import {mockCityOffers} from "../../mocks/mock-data";
import {mockStore} from "../../mocks/mock-store";

import {NearPlaces} from "./near-places";

const noop = () => {};
const CARDS_DISPLAY_LIMIT = 3;

it(`Should NearPlaces rendered correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <MemoryRouter>
            <NearPlaces
              id={1}
              nearOffers={mockCityOffers.AMSTERDAM.slice(0, CARDS_DISPLAY_LIMIT)}
              fetchNearOffersById={noop}
            />
          </MemoryRouter>
        </Provider>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
