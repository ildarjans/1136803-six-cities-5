import React from "react";
import renderer from "react-test-renderer";
import {PlacesSortingComponent} from "./places-sorting";

const popularSortType = `popular`;

const noop = () => {};

describe(`Should PlacesSortingComponent render correctly`, () => {
  it(`then collapsed`, () => {
    const tree = renderer.create(
        <PlacesSortingComponent
          sortType={popularSortType}
          collapsed={true}
          onSortTypeChange={noop}
          onCollapseToggle={noop}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`then expanded`, () => {
    const tree = renderer.create(
        <PlacesSortingComponent
          sortType={popularSortType}
          collapsed={false}
          onSortTypeChange={noop}
          onCollapseToggle={noop}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
