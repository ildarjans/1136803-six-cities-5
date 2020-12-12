import React from "react";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";

import {AuthorizationStatus} from "../../const";
import {Header} from "./header";

describe(`Should Header rendered correctly`, () => {
  it(`(1) render with email`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Header
              email={``}
              authorizationStatus={AuthorizationStatus.NO_AUTHORIZED}
            />
          </BrowserRouter>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`(2) render with email`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Header
              email={`user100500@yahoo.com`}
              authorizationStatus={AuthorizationStatus.AUTHORIZED}
            />
          </BrowserRouter>


      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
