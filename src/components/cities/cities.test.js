import React from "react";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import {
  mockAmsterdamIcons,
  mockCityOffers,
  mockAmsterdamMapCenter
} from "../../mocks/mock-data";
import {mockStore} from "../../mocks/mock-store";
import {CitiesComponent} from "./cities";

const noop = () => {};
const activeCity = `AMSTERDAM`;

it(`Should CitiesComponent rendered correctly`, () => {
  const tree = renderer.create(
      <Provider store={mockStore}>
        <MemoryRouter>
          <CitiesComponent
            activeCity={activeCity}
            offers={mockCityOffers.AMSTERDAM}
            icons={mockAmsterdamIcons}
            center={mockAmsterdamMapCenter}
            onActiveOfferChange={noop}
            restoreHoveredOffer={noop}
          />
        </MemoryRouter>
      </Provider>,
      {
        createNodeMock: () => document.createElement(`div`)
      }
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
