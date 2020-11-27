import React, {useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {updateFavoriteOffer} from "../../middleware/thunk-api";
import {selectIsAuthStatus} from "../../selectors/selectors";
import {processActionCreator} from "../../store/process/process-action";
import {AppRoute} from "../../const";

const FavoriteButtonComponent = (props) => {
  const {
    updateOfferFavoriteField,
    redirectLoginPage,
    isFavorite,
    options,
    isAuth,
    id,
  } = props;

  const currentClassName = `${options.CLASSNAME_PREFIX}__bookmark-button`;

  const [favoriteState, setFavorite] = useState(isFavorite);

  const handleButtonClick = () => {
    if (!isAuth) {
      redirectLoginPage();
      return;
    }
    updateOfferFavoriteField(id, Number(!favoriteState))
      .then((setFavorite(!favoriteState)));
  };

  return (
    <button
      className={`${currentClassName} ${favoriteState ? `${currentClassName}--active` : ``} button`}
      type="button"
      onClick={handleButtonClick}
    >
      <svg
        className={`${options.CLASSNAME_PREFIX}__bookmark-icon`}
        width={options.WIDTH}
        height={options.WIDTH}
      >
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">{favoriteState ? `In` : `To`} bookmarks</span>
    </button>
  );
};

FavoriteButtonComponent.propTypes = ({
  updateOfferFavoriteField: PropTypes.func.isRequired,
  redirectLoginPage: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  options: PropTypes.shape({
    WIDTH: PropTypes.number.isRequired,
    HEIGHT: PropTypes.number.isRequired,
    CLASSNAME_PREFIX: PropTypes.string.isRequired
  }),
});

const mapDispatchToProps = (dispatch) => ({
  updateOfferFavoriteField(id, status) {
    return dispatch(updateFavoriteOffer(id, status));
  },
  redirectLoginPage() {
    dispatch(processActionCreator.redirectToRoute(AppRoute.LOGIN));
  }
});

const mapStateToProps = (state) => ({
  isAuth: selectIsAuthStatus(state),
});

export const FavoriteButton = connect(mapStateToProps, mapDispatchToProps)(FavoriteButtonComponent);
