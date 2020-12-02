import React from "react";
import renderer from "react-test-renderer";

import {FavoritesEmpty} from "./favorites-empty";

it(`Should Empty favorites component rendered correctly`, () => {
  const tree = renderer.create(<FavoritesEmpty/>).toJSON();

  expect(tree).toMatchSnapshot();
});
