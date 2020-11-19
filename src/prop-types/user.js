import PropTypes from "prop-types";

export const userPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isPro: PropTypes.bool.isRequired,
});
