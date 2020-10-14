import PropTypes from "prop-types";

export const offerPropTypes = PropTypes.shape({
  id: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  premium: PropTypes.boolean,
  price: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.string,
  rating: PropTypes.number,
  description: PropTypes.string,
  bedrooms: PropTypes.number,
  guests: PropTypes.number,
  features: PropTypes.array,
  owner: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    super: PropTypes.boolean,
  }),
});
