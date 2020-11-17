import PropTypes from "prop-types";
import {idPropType} from "./id";
import {userPropTypes} from "./user";

export const reviewPropTypes = PropTypes.shape({
  id: idPropType,
  user: userPropTypes.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
});

