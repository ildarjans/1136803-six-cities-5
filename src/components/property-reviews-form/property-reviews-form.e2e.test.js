import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PropertyReviewsForm} from "./property-reviews-form";

configure({adapter: new Adapter()});

describe(`Should PropertyReviewsForm has expected behavior`, () => {
  let onSubmit;
  let reviewsForm;
  let comment;
  let ratingRefs;
  beforeEach(() => {
    onSubmit = jest.fn();
    reviewsForm = mount(
        <PropertyReviewsForm
          id={73}
          postUserReview={onSubmit}
        />
    );
    comment = reviewsForm.instance()._commentRef.current;
    ratingRefs = reviewsForm.instance()._ratingRefs;
  });
  it(`(1) valid form`, () => {
    ratingRefs[0].current.checked = true;
    expect(ratingRefs[0].current.value).toEqual(`5`);
    comment.value = `a`.repeat(50);
    reviewsForm.simulate(`submit`);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
  it(`(2) valid form`, () => {
    ratingRefs[1].current.checked = true;
    expect(ratingRefs[1].current.value).toEqual(`4`);
    comment.value = `a`.repeat(150);
    reviewsForm.simulate(`submit`);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
  it(`(3) valid form`, () => {
    ratingRefs[2].current.checked = true;
    expect(ratingRefs[2].current.value).toEqual(`3`);

    comment.value = `a`.repeat(299);
    reviewsForm.simulate(`submit`);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
  it(`(4) invalid rating`, () => {
    comment.value = `a`.repeat(51);
    reviewsForm.simulate(`submit`);
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });
  it(`(5) invalid rating`, () => {
    comment.value = `a`.repeat(149);
    reviewsForm.simulate(`submit`);
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });
  it(`(6) invalid rating`, () => {
    comment.value = `a`.repeat(299);
    reviewsForm.simulate(`submit`);
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });
  it(`(7) invalid text comment length`, () => {
    ratingRefs[2].current.checked = true;
    expect(ratingRefs[2].current.value).toEqual(`3`);
    comment.value = `a`.repeat(301);
    reviewsForm.simulate(`submit`);
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });
  it(`(8) invalid text comment length`, () => {
    ratingRefs[0].current.checked = true;
    expect(ratingRefs[0].current.value).toEqual(`5`);
    comment.value = `a`.repeat(49);
    reviewsForm.simulate(`submit`);
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });
});
