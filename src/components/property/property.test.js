import React from "react";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import renderer from "react-test-renderer";

import {mockAmsterdamIcons, mockCityOffers} from "../../mocks/mock-data";
import {mockStore} from "../../mocks/mock-store";

import {Property} from "./property";

const noop = () => {};

it(`Should Property rendered correctly`, () => {
  const offer = mockCityOffers.AMSTERDAM[0];
  const tree = renderer.create(
      <Provider store={mockStore}>
        <MemoryRouter>
          <Property
            setHoveredIcon={noop}
            id={offer.id}
            icons={mockAmsterdamIcons}
            offer={offer}
          />
        </MemoryRouter>
      </Provider>,
      {
        createNodeMock: () => document.createElement(`div`)
      }
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
