import PropTypes from "prop-types";
import {idPropType} from "./id";

export const mapIconPropTypes = PropTypes.shape({
  id: idPropType.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired
});

export const mapCenterPropTypes = PropTypes.shape({
  zoom: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
});
