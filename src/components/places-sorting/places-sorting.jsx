import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {
  SortType,
  sortTypeTitle
} from "../../const";
import {actionCreator} from "../../store/action";
import {withCollapseToggle} from "../../hocs/with-collapse-toggle";

export const PlacesSortingComponent = ({sortType, onSortTypeChange, collapsed, onCollapseToggle}) => {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={onCollapseToggle}
      >

        {sortTypeTitle[sortType]}

        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>

      <ul
        className={`places__options places__options--custom ${!collapsed ? `places__options--opened` : ``}`}>

        {Object.values(SortType).map((type, i) => (
          <li
            key={`${i}-${type}`}
            className={`places__option ${sortType === type ? `places__option--active` : ``}`}
            tabIndex="0"
            onClick={() => {
              onSortTypeChange(type);
              onCollapseToggle();
            }}
          >
            {sortTypeTitle[type]}
          </li>
        ))}
      </ul>

    </form>

  );
};

PlacesSortingComponent.propTypes = {
  sortType: PropTypes.string.isRequired,
  onSortTypeChange: PropTypes.func.isRequired,
  onCollapseToggle: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  sortType: state.sortType,
});

const mapDispatchToProps = (dispatch) => ({
  onSortTypeChange: (sortType) => {
    dispatch(actionCreator.changeSortType(sortType));
  }
});

export const PlacesSorting = connect(
    mapStateToProps,
    mapDispatchToProps
)(withCollapseToggle(PlacesSortingComponent));
