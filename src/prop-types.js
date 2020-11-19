import PropTypes from "prop-types";

const offerPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  cityCoordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  cityZoom: PropTypes.number.isRequired,
  img: PropTypes.array.isRequired,
  smallImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  isPremium: PropTypes.bool.isRequired,
  isBookmark: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  bedroom: PropTypes.number.isRequired,
  visitor: PropTypes.number.isRequired,
  option: PropTypes.array.isRequired,
  avatar: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
  hostTop: PropTypes.bool.isRequired,
});

const reviewPropType = PropTypes.shape({
  reviewId: PropTypes.number.isRequired,
  reviewDate: PropTypes.string.isRequired,
  reviewRating: PropTypes.number.isRequired,
  userInfo: PropTypes.shape({
    userAvatar: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
  }).isRequired
});

export {offerPropType, reviewPropType};
