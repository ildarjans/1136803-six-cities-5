import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {SortType, sortTypeTitles} from "../../const";
import {offersActionCreator} from "../../store/offers/offers-action";
import {withCollapseToggle} from "../../hocs/with-collapse-toggle";
import {selectSortType} from "../../selectors/selectors";
import {processActionCreator} from "../../store/process/process-action";

export const PlacesSortingComponent = ({sortType, onSortTypeChange, collapsed, onCollapseToggle}) => {
  const handlePlacesOptionClick = (evt) => {
    onSortTypeChange(evt.target.dataset.sortType);
    onCollapseToggle();
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={onCollapseToggle}
      >

        {sortTypeTitles[sortType]}

        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>

      <ul
        className={`places__options places__options--custom ${!collapsed ? `places__options--opened` : ``}`}>

        {Object.values(SortType).map((type, i) => (
          <li
            key={`${i}-${type}`}
            id={`${i}`}
            className={`places__option ${sortType === type ? `places__option--active` : ``}`}
            data-sort-type={type}
            tabIndex="0"
            onClick={handlePlacesOptionClick}
          >
            {sortTypeTitles[type]}
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
  sortType: selectSortType(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSortTypeChange: (sortType) => {
    dispatch(processActionCreator.changeSortType(sortType));
  }
});

export const PlacesSorting = connect(
    mapStateToProps,
    mapDispatchToProps
)(withCollapseToggle(PlacesSortingComponent));
