import React from "react";
import renderer from "react-test-renderer";
import {PropertyGallery} from "./property-gallery";
import {mockCityOffers} from "../../mocks/mock-data";

describe(`Should PropertyGallery render correctly`, () => {
  it(`(1) then user is auth`, () => {
    const tree = renderer.create(
        <PropertyGallery
          offer={mockCityOffers.AMSTERDAM[0]}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`(2) then no images`, () => {
    const offerWithOutImages = mockCityOffers.AMSTERDAM[0];
    offerWithOutImages.images = [];
    const tree = renderer.create(
        <PropertyGallery
          offer={mockCityOffers.AMSTERDAM[0]}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
