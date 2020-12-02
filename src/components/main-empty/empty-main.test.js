import React from "react";
import renderer from "react-test-renderer";
import {MainEmpty} from "./empty-main";
import {Provider} from "react-redux";
import {mockStore} from "../../mocks/mock-store";
import {MemoryRouter} from "react-router-dom";

it(`Should Main empty rendered correct`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <MemoryRouter>
            <MainEmpty/>
          </MemoryRouter>
        </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
