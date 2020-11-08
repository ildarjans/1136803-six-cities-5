import PropTypes from "prop-types";

export const mapIconPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired
});

export const mapCenterPropTypes = PropTypes.shape({
  zoom: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
});
