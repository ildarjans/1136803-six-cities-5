import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PlaceCard} from "./place-card";
import {mockCityOffers} from "../../mocks/mock-data";

configure({adapter: new Adapter()});

const PLACE_CARD_OPTION = {
  CLASSNAME_ARTICLE: `cities__place-card`,
  CLASSNAME_WRAPPER: `cities__image-wrapper`,
  IMAGE_WIDTH: 260,
  IMAGE_HEIGHT: 200,
};
const CLASSNAME_SELECTOR = `.cities__place-card`;
const debounce = (fn, delay) => {
  let timeout;
  return (id) => {
    clearTimeout(timeout);
    timeout = setTimeout(fn.bind(null, id), delay);
  };
};

jest.useFakeTimers();

describe(`Should PlaceCard correct behavior`, () => {
  let onActiveOfferChange;
  let renderChild;
  let debounceCallback;
  beforeEach(() => {
    debounceCallback = jest.fn();
    onActiveOfferChange = debounce(debounceCallback);
    renderChild = jest.fn();
  });

  it(`Mouseover test`, () => {
    const card = shallow(
        <PlaceCard
          offer={mockCityOffers.AMSTERDAM[0]}
          onActiveOfferChange={onActiveOfferChange}
          renderChild={renderChild}
          options={PLACE_CARD_OPTION}
        />
    );
    const article = card.find(`article${CLASSNAME_SELECTOR}`);
    article.simulate(`mouseover`);
    expect(debounceCallback).not.toBeCalled();
    jest.runAllTimers();
    expect(debounceCallback).toHaveBeenCalledTimes(1);
    expect(renderChild).toHaveBeenCalledTimes(1);
  });
  it(`Mouseout test`, () => {
    const card = shallow(
        <PlaceCard
          offer={mockCityOffers.AMSTERDAM[0]}
          onActiveOfferChange={onActiveOfferChange}
          renderChild={renderChild}
          options={PLACE_CARD_OPTION}
        />
    );
    const article = card.find(`article${CLASSNAME_SELECTOR}`);
    article.simulate(`mouseover`);
    article.simulate(`mouseout`);
    expect(debounceCallback).not.toBeCalled();
    jest.runAllTimers();
    expect(debounceCallback).toHaveBeenCalledTimes(1);
    expect(renderChild).toHaveBeenCalledTimes(1);
  });
});
