import React from "react";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {mockCityOffers} from "../../mocks/mock-data";
import {PlacesList} from "./places-list";

const noop = () => {};
jest.mock(`../favorite-button/favorite-button`);

it(`Should PlaceList rendered correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <PlacesList
            offers={mockCityOffers.AMSTERDAM}
            onActiveOfferChange={noop}
          />
        </BrowserRouter>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
