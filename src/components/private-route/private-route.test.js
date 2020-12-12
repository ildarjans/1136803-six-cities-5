import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {PrivateRoute} from "./private-route";

const isAuthStatus = `AUTHORIZED`;
const isNotAuthStatus = `NO_AUTHORIZED`;
const noop = () => {};

describe(`Should PrivateRoute rendered correctly`, () => {
  it(`is Authorized`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <PrivateRoute
            authorizationStatus={isAuthStatus}
            path={`/`}
            isExact={true}
            render={noop}
          />
        </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`is not Authorized`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <PrivateRoute
            authorizationStatus={isNotAuthStatus}
            path={`/`}
            isExact={true}
            render={noop}
          />
        </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
