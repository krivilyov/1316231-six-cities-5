import PropTypes from "prop-types";
import {OfferType} from "./const";

const offerPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  pictures: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isBookmark: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.oneOf([OfferType.APARTMENT, OfferType.ROOM, OfferType.HOUSE, OfferType.HOTEL]).isRequired,
  rating: PropTypes.number.isRequired,
  bedroomsMax: PropTypes.string.isRequired,
  guestsMax: PropTypes.string.isRequired,
  amenities: PropTypes.array.isRequired,
  hostInfo: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isSuper: PropTypes.bool.isRequired,
  })).isRequired
});

export {offerPropType};
