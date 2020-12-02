import React from "react";
import renderer from "react-test-renderer";
import {LoginFormComponent} from "./login-form";

const noop = () => {};

it(`Should LoginForm render correctly`, () => {
  const tree = renderer.create(
      <LoginFormComponent onSubmit={noop}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
