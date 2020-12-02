import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

import {mockStore} from "../../mocks/mock-store";
import {App} from "./app";

it(`Should App rendered correctly`, () => {
  const tree = renderer.create(
      <Provider store={mockStore}>
        <MemoryRouter>
          <App/>,
        </MemoryRouter>
      </Provider>,
      {
        createNodeMock: () => document.createElement(`div`)
      }
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
