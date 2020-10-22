import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {offerPropType} from "../../prop-types";
import OfferCard from "../offer-card/offer-card";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mouseOverOffer: this.props.offers[0],
    };

    this.onMouseOverOffer = this.onMouseOverOffer.bind(this);
  }

  onMouseOverOffer(newMouseOverOffer) {
    this.setState(() => ({
      mouseOverOffer: newMouseOverOffer,
    }));
  }

  render() {
    const {offers, currentCardType} = this.props;

    return (
      offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          currentCardType={currentCardType}
          currentOffer={this.state.mouseOverOffer}
          onMouseOverOffer={this.onMouseOverOffer}
        />
      ))
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired,
  currentCardType: PropTypes.string.isRequired,
};

export default OffersList;
