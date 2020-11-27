import PropTypes from "prop-types";

export const userWithEmailPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isPro: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired
});

export const userPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isPro: PropTypes.bool.isRequired,
});
