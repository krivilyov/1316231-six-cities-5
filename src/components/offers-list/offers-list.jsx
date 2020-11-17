import React from "react";
import PropTypes from "prop-types";
import {offerPropType} from "../../prop-types";
import OfferCard from "../offer-card/offer-card";
import {connect} from "react-redux";
import {getCurrentSortedCityOffers} from "../../store/selectors";
import {setOverOfferId} from "../../store/action";
import {getSortCardTypeOffers} from "../../utils";

const OffersList = (props) => {

  const {offers, currentCardType, onMouseOverOffer, offerId} = props;
  const sortCardTypeOffers = getSortCardTypeOffers(offers, currentCardType, offerId);

  return (
    sortCardTypeOffers.map((offer) => (
      <OfferCard
        key={offer.id}
        offer={offer}
        currentCardType={currentCardType}
        onMouseOverOffer={onMouseOverOffer}
      />
    ))
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired,
  currentCardType: PropTypes.string.isRequired,
  onMouseOverOffer: PropTypes.func.isRequired,
  offerId: PropTypes.string,
};

const mapToStateProps = (state) => ({
  city: state.COMMON.activeCity,
  offers: getCurrentSortedCityOffers(state)
});

const mapDispatchToProps = (dispatch) => ({
  onMouseOverOffer: (offer) => dispatch(setOverOfferId(offer))
});

export {OffersList};
export default connect(mapToStateProps, mapDispatchToProps)(OffersList);
