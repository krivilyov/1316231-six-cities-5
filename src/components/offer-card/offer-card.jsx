import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {offerPropType} from "../../prop-types";
import {OFFER_CARD_TYPE} from "../../const";

const OfferCard = (props) => {
  const {offer, currentCardType} = props;
  const {id, isPremium, pictures, preview, price, isBookMark, rating, title, type} = offer;
  const isFavoriteType = currentCardType === OFFER_CARD_TYPE.FAVORITE;

  const getCardClass = (classIndex, classRelated, classFavorite) => {
    switch (currentCardType) {
      case OFFER_CARD_TYPE.INDEX:
        return classIndex;
      case OFFER_CARD_TYPE.RELATED:
        return classRelated;
      case OFFER_CARD_TYPE.FAVORITE:
        return classFavorite;
      default:
        return false;
    }
  };

  return (
    <article className={`${getCardClass(`cities__place-card`, `near-places__card`, `favorites__card`)} place-card`}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>)}
      <div className={`${getCardClass(`cities__image-wrapper`, `near-places__image-wrapper`, `favorites__image-wrapper`)} place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image"
            src={`img/${isFavoriteType ? preview : pictures[0]}`}
            width={isFavoriteType ? `150` : `260`}
            height={isFavoriteType ? `110` : `200`}
            alt="Place image"/>
        </Link>
      </div>
      <div className={`${getCardClass(``, ``, `favorites__card-info`)} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button
           ${isBookMark && `place-card__bookmark-button--active`}
           button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isBookMark ? `In bookmarks` : `To bookmarks`}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: offerPropType,
  currentCardType: PropTypes.string.isRequired,
};

export default OfferCard;
