import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {NotFoundPage} from "./not-found-page";

jest.mock(`../header/header`);

it(`Should NotFoundPage rendered correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <NotFoundPage/>
      </BrowserRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
