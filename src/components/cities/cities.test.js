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
import Cities from "./cities";

const noop = () => {};
const activeCity = `AMSTERDAM`;

it(`Should Cities rendered correctly`, () => {
  const tree = renderer.create(
      <Provider store={mockStore}>
        <MemoryRouter>
          <Cities
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
