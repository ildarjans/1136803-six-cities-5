import React from "react";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";

import {AuthorizationStatus} from "../../const";
import {HeaderComponent} from "./header";

describe(`Should Header rendered correctly`, () => {
  it(`(1) render with email`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <HeaderComponent
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
            <HeaderComponent
              email={`user100500@yahoo.com`}
              authorizationStatus={AuthorizationStatus.AUTHORIZED}
            />
          </BrowserRouter>


      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
