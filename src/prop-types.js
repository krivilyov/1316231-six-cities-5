import PropTypes from "prop-types";
import {OfferTypes} from "./const";

const offerPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  pictures: PropTypes.array.isRequired,
  preview: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isBookMark: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.oneOf([OfferTypes.APARTMENT, OfferTypes.ROOM, OfferTypes.HOUSE, OfferTypes.HOTEL]).isRequired,
  rating: PropTypes.number.isRequired,
  bedroomsMax: PropTypes.string.isRequired,
  guestsMax: PropTypes.string.isRequired,
  amenities: PropTypes.array.isRequired,
  hostInfo: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isSuper: PropTypes.bool.isRequired,
  }).isRequired
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
