import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import {LoginPage} from "./login-page";
import {mockStore} from "../../mocks/mock-store";

it(`Should LoginPage render correctly`, () => {
  const tree = renderer.create(
      <Provider store={mockStore}>
        <MemoryRouter>
          <LoginPage/>
        </MemoryRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
