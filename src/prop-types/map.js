import PropTypes from "prop-types";

export const mapIcons = PropTypes.shape({
  id: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired
});

export const mapCenter = PropTypes.shape({
  zoom: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
});
