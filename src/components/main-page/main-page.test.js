import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {mockCityOffers} from "../../mocks/mock-data";
import {mockStore} from "../../mocks/mock-store";
import MainPage, {MainPage as MainPageComponent} from "./main-page";

jest.mock(`../map/map`);

describe(`Should rendered MainPage correctly`, () => {
  it(`Main page if offers exist`, () => {
    const tree = renderer.create(
        <Provider store={mockStore}>
          <MemoryRouter>
            <MainPage
              cityOffers={mockCityOffers.AMSTERDAM}
            />
          </MemoryRouter>
        </Provider>

    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`Main page if offers is empty`, () => {
    const tree = renderer.create(
        <Provider store={mockStore}>
          <MemoryRouter>
            <MainPageComponent
              cityOffers={[]}
            />
          </MemoryRouter>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
