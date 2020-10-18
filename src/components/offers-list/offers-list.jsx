import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {offerPropType} from "../../prop-types";
import OfferCard from "../offer-card/offer-card";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      overOffer: this.props.offers[0],
    };
  }

  render() {
    const {offers, currentCardType} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            currentCardType={currentCardType}
            currentOffer={this.state.overOffer}
            onMouseOverOffer={(newOverOffer) => {
              this.setState(() => ({
                overOffer: newOverOffer,
              }));
            }}
          />
        ))}
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired,
  currentCardType: PropTypes.string.isRequired,
};

export default OffersList;
