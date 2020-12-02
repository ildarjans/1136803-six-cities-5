import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {LoginFormComponent} from "./login-form";

configure({adapter: new Adapter()});

describe(`Should LoginForm has expected behavior`, () => {

  it(`Login and pass is valid`, () => {
    const onSubmit = jest.fn();
    const loginForm = mount(
        <LoginFormComponent onSubmit={onSubmit}/>
    );
    const email = loginForm.instance()._emailRef.current;
    const password = loginForm.instance()._passwordRef.current;

    email.value = `example@mail.com`;
    password.value = `any`;
    loginForm.simulate(`submit`);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
  it(`Login is valid, pass is invalid`, () => {
    const onSubmit = jest.fn();
    const loginForm = mount(
        <LoginFormComponent onSubmit={onSubmit}/>
    );
    const email = loginForm.instance()._emailRef.current;
    const password = loginForm.instance()._passwordRef.current;

    email.value = `example@mail.com`;
    password.value = ``;
    loginForm.simulate(`submit`);
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });
  it(`Invalid login, pass is valid`, () => {
    const onSubmit = jest.fn();
    const loginForm = mount(
        <LoginFormComponent onSubmit={onSubmit}/>
    );
    const email = loginForm.instance()._emailRef.current;
    const password = loginForm.instance()._passwordRef.current;

    email.value = ``;
    password.value = `any`;
    loginForm.simulate(`submit`);
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });
});
