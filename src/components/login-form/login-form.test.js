import React from "react";
import renderer from "react-test-renderer";
import {LoginForm} from "./login-form";

const noop = () => {};

it(`Should LoginForm render correctly`, () => {
  const tree = renderer.create(
      <LoginForm onSubmit={noop}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
