import React from "react";
import {configure, mount} from "enzyme";
import {Provider} from "react-redux";
import Adapter from "enzyme-adapter-react-16";
import {MemoryRouter} from "react-router-dom";

import {mockStore} from "../../mocks/mock-store";
import {mockCityOffers} from "../../mocks/mock-data";

import {NearPlaces} from "./near-places";

configure({adapter: new Adapter()});
const CARDS_DISPLAY_LIMIT = 3;

it(`Should NearPlacesComponent has expected behavior`, () => {
  const fetchNearOffersById = jest.fn();
  mount(
      <Provider store={mockStore}>
        <MemoryRouter>
          <NearPlaces
            id={1}
            nearOffers={mockCityOffers.AMSTERDAM.slice(0, CARDS_DISPLAY_LIMIT)}
            fetchNearOffersById={fetchNearOffersById}
          />
        </MemoryRouter>
      </Provider>
  );
  expect(fetchNearOffersById).toHaveBeenCalledTimes(1);
});
