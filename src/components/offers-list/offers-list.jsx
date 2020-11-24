import React from "react";
import PropTypes from "prop-types";
import {offerPropType} from "../../prop-types";
import OfferCard from "../offer-card/offer-card";

const OffersList = (props) => {
  const {offers, currentCardType} = props;

  return (
    offers.map((offer) => (
      <OfferCard
        key={offer.id}
        offer={offer}
        currentCardType={currentCardType}
      />
    ))
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired,
  currentCardType: PropTypes.string.isRequired,
};

export default OffersList;
