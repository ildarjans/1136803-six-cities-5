import React from "react";
import renderer from "react-test-renderer";
import {Map} from "./map";
import {
  mockAmsterdamIcons,
  mockAmsterdamMapCenter
} from "../../mocks/mock-data";

it(`Map render correctly`, () => {
  const tree = renderer.create(
      <Map
        icons={mockAmsterdamIcons}
        center={mockAmsterdamMapCenter}
        hoveredOfferId={73}
      />,
      {
        createNodeMock: () => document.createElement(`div`)
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
