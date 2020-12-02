import React from "react";
import PropTypes from "prop-types";
import renderer from "react-test-renderer";
import {withCollapseToggle} from "./with-collapse-toggle";

const mockedComponent = ({collapsed, onCollapseToggle}) => {
  return (
    <button
      id="btn"
      type="button"
      onClick={onCollapseToggle}
    >
      {`Initial collapsed state is ${collapsed}`}
    </button>
  );
};

mockedComponent.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  onCollapseToggle: PropTypes.func.isRequired
};

it(`Should CollapseToggle HOC render correctly`, () => {
  const WithLoadingComponent = withCollapseToggle(mockedComponent);
  const tree = renderer.create(
      <WithLoadingComponent/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
