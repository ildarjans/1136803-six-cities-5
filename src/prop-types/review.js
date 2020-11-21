import PropTypes from "prop-types";
import {userPropTypes} from "./user";

export const reviewPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  user: userPropTypes.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
});

