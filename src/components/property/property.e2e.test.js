import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {mockAmsterdamIcons, mockCityOffers} from "../../mocks/mock-data";

import {Property} from "./property";

configure({adapter: new Adapter()});
jest.mock(`../header/header`);
jest.mock(`../map/map`);
jest.mock(`../property-reviews/property-reviews`);
jest.mock(`../near-places/near-places`);
jest.mock(`../favorite-button/favorite-button`);

it(`Should PropertyComponent has expected behavior`, () => {
  const setHoveredIcon = jest.fn();
  mount(<Property
    offer={mockCityOffers.AMSTERDAM[0]}
    icons={mockAmsterdamIcons}
    id={73}
    setHoveredIcon={setHoveredIcon}
  />
  );
  expect(setHoveredIcon).toHaveBeenCalledTimes(1);
});
