import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {LocationsTabs} from "./locations-tabs";

configure({adapter: new Adapter()});
const CLASSNAME = `.locations__item-link.tabs__item`;
const ACTIVE_CITY = `AMSTERDAM`;

it(`Should LocationTabs has correct behavior`, () => {
  const onCityChange = jest.fn();
  const tabs = shallow(
      <LocationsTabs
        activeCity={ACTIVE_CITY}
        onCityChange={onCityChange}/>
  );
  const links = tabs.find(CLASSNAME);
  expect(links).toHaveLength(6);
  links.at(0).simulate(`click`);
  expect(onCityChange).toHaveBeenCalledTimes(0);
  links.at(1).simulate(`click`);
  expect(onCityChange).toHaveBeenCalledTimes(1);
  links.at(2).simulate(`click`);
  expect(onCityChange).toHaveBeenCalledTimes(2);
});
