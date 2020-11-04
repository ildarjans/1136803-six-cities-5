import PropTypes from "prop-types";

export const mapPropTypes = PropTypes.shape({
  center: PropTypes.shape({
    lng: PropTypes.number.isRequired,
    lat: PropTypes.number.isRequired
  }).isRequired,
  zoom: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    lng: PropTypes.number.isRequired,
    lat: PropTypes.number.isRequired
  })),
  activeOfferId: PropTypes.string.isRequired
});
