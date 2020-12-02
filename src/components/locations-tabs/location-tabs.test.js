import React from "react";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";

import {LocationsTabs} from "./locations-tabs";
import {mockStore} from "../../mocks/mock-store";
import {mockCities} from "../../mocks/mock-data";

const noop = () => {};

describe(`Should Tabs rendered correct`, () => {
  it(`cities names rendered correct`, () => {
    const tree = renderer
      .create(
          <Provider store={mockStore}>
            <MemoryRouter>
              <LocationsTabs
                onCityChange={noop}
                activeCity={mockCities[0]}
              />
            </MemoryRouter>
          </Provider>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
