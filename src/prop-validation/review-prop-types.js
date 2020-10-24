import PropTypes from "prop-types";

export const reviewPropTypes = PropTypes.shape({
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  rating: PropTypes.number.isRequired,
  review: PropTypes.string.isRequired,
});
