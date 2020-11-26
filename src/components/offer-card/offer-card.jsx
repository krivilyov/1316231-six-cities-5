import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {offerPropType} from "../../prop-types";
import {OfferCardType} from "../../const";
import OfferCardBookmark from "../offer-card-bookmark/offer-card-bookmark";
import {connect} from "react-redux";
import {fetchBookmarkOffers, updateOfferBookmarkStatus} from "../../store/api-actions";
import {setOverOfferId} from "../../store/action";

const OfferCard = (props) => {
  const {offer, currentCardType, overOfferId, onChangeOfferId} = props;
  const {id, isPremium, smallImg, price, rating, title, type} = offer;
  const isFavoriteType = currentCardType === OfferCardType.FAVORITE;

  const getCardClass = {
    index: `cities__place-card`,
    related: `near-places__card`,
    favorite: `favorites__card`,
  };

  const getWrapperClass = {
    index: `cities__image-wrapper`,
    related: `near-places__image-wrapper`,
    favorite: `favorites__image-wrapper`,
  };

  const onSetNewId = () => {
    if (offer.id !== overOfferId) {
      onChangeOfferId(offer.id);
    }
  };

  const checkIsFavorite = () => isFavoriteType ? `favorites__card-info` : ``;

  return (
    <article className={`${getCardClass[currentCardType]} place-card`}
      onMouseEnter={currentCardType === OfferCardType.INDEX ? () => {
        onSetNewId();
      } : undefined}
      onMouseLeave={currentCardType === OfferCardType.INDEX ? () => {
        onChangeOfferId(``);
      } : undefined}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>)}
      <div className={`${getWrapperClass[currentCardType]} place-card__image-wrapper`}>
        <Link to={`/offer/${id}`} className={`place-card__img-link`}
          onClick={currentCardType !== OfferCardType.INDEX ? onSetNewId : undefined}
        >
          <img className="place-card__image"
            src={smallImg}
            width={isFavoriteType ? `150` : `260`}
            height={isFavoriteType ? `110` : `200`}
            alt="Place image"/>
        </Link>
      </div>
      <div className={`place-card__info ${checkIsFavorite()}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <OfferCardBookmark
            offerId={offer.id}
            offerBookmarkStatus={offer.isBookmark}
          />

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}
            onClick={currentCardType !== OfferCardType.INDEX ? onSetNewId : undefined}
          >{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: offerPropType,
  currentCardType: PropTypes.string.isRequired,
  onChangeOfferId: PropTypes.func.isRequired,
  overOfferId: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  overOfferId: state.COMMON.overOfferId
});

const mapDispatchToProps = (dispatch) => ({
  onChangeOfferId(offerId) {
    dispatch(setOverOfferId(offerId));
  },
  onChangeBookmark(offerId, bookmarkStatus) {
    dispatch(updateOfferBookmarkStatus(offerId, bookmarkStatus));
  },
  onChangeBookmarkOffers() {
    dispatch(fetchBookmarkOffers());
  },
});

export {OfferCard};
export default connect(mapStateToProps, mapDispatchToProps)(OfferCard);
