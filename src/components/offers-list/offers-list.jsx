import React from "react";
import PropTypes from "prop-types";
import {offerPropType} from "../../prop-types";
import OfferCard from "../offer-card/offer-card";
import {connect} from "react-redux";
import {getSortedOffers} from "../../store/selectors";
import {ActionCreator} from "../../store/action";
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
  offerId: PropTypes.number,
};

const mapToStateProps = (state) => ({
  city: state.activeCity,
  offers: getSortedOffers(state)
});

const mapDispatchToProps = (dispatch) => ({
  onMouseOverOffer: (offer) => dispatch(ActionCreator.onMouseOverOffer(offer))
});

export {OffersList};
export default connect(mapToStateProps, mapDispatchToProps)(OffersList);
