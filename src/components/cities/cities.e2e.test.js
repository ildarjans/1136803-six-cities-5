import React from "react";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import Adapter from "enzyme-adapter-react-16";
import {configure, mount} from "enzyme";
import {
  mockAmsterdamIcons,
  mockAmsterdamMapCenter,
  mockCityOffers
} from "../../mocks/mock-data";
import {mockStore} from "../../mocks/mock-store";
import {CitiesComponent} from "./cities";

configure({adapter: new Adapter()});

const activeCity = `AMSTERDAM`;

it(`Should Cities correct behavior`, () => {
  const restoreHoveredOffer = jest.fn();
  mount(
      <Provider store={mockStore}>
        <MemoryRouter>
          <CitiesComponent
            activeCity={activeCity}
            offers={mockCityOffers.AMSTERDAM}
            icons={mockAmsterdamIcons}
            center={mockAmsterdamMapCenter}
            onActiveOfferChange={() => {}}
            restoreHoveredOffer={restoreHoveredOffer}
          />
        </MemoryRouter>
      </Provider>
  );
  expect(restoreHoveredOffer).toHaveBeenCalledTimes(1);
});
