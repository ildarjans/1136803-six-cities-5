import PropTypes from "prop-types";
import {idPropType} from "./id";

export const userPropTypes = PropTypes.shape({
  id: idPropType.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isPro: PropTypes.bool.isRequired,
});
